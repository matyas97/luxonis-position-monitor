import React from 'react';
import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

interface GyroscopeData {
  x: number;
  y: number;
  z: number;
}

const Camera = () => {
  const APP_URL = window.location.origin + window.location.pathname;
  const GYROSCOPE_DATA_URL = APP_URL + 'position';

  const [gyroscopeData, setGyroscopeData] =
    React.useState<GyroscopeData | null>(null);

  React.useEffect(() => {
    const interval = setInterval(() => {
      const request = fetch(GYROSCOPE_DATA_URL, {
        method: 'GET',
      });

      request.then((response) => {
        const json = response.json();
        json.then((data: GyroscopeData) => {
          setGyroscopeData(data);
        });
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return gyroscopeData ? (
    <Canvas>
      <ambientLight />
      <spotLight intensity={0.8} position={[5, 10, 50]} />
      <CameraMesh x={gyroscopeData.x} y={gyroscopeData.y} z={gyroscopeData.z} />
      <OrbitControls />
    </Canvas>
  ) : (
    <div style={styles.infoDiv}>Can't access gyroscrope data...</div>
  );
};

const styles = {
  infoDiv: {
    display: 'flex',
    justifyContent: 'center',
    color: 'white',
  },
};

const CameraMesh: React.FC<GyroscopeData> = ({ x, y, z }) => {
  const ref = React.useRef<THREE.Mesh>();

  /* const mockGyroscopeData: GyroscopeData = {
    x: 0.022370552644133568,
    y: 0.007456851191818714,
    z: 0.023435818031430244,
  }; */

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.x = x * 100;
      ref.current.rotation.y = y * 100;
      ref.current.rotation.z = z * 100;
    }
  });

  return (
    // @ts-ignore
    <mesh ref={ref}>
      <boxGeometry args={[4, 1, 1]} />
      <meshPhysicalMaterial color="lightgrey" />
    </mesh>
  );
};

export default Camera;
