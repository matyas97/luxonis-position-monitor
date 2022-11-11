import React from 'react';

interface GyroscopeData {
  x: number;
  y: number;
  z: number;
}

const mockGyroscopeData: GyroscopeData = {
  x: 0.00532632227987051,
  y: 0.022370552644133568,
  z: 0.0,
};

const Camera = () => {
  const APP_URL = window.location.origin + window.location.pathname;
  const GYROSCOPE_DATA_URL = APP_URL + 'gyroscope';

  const [gyroscopeData, setGyroscopeData] =
    React.useState<GyroscopeData | null>(null);
  console.log('gyroscopeData', gyroscopeData);

  React.useEffect(() => {
    const request = fetch(GYROSCOPE_DATA_URL, {
      method: 'GET',
    });

    request.then((response) => {
      const json = response.json();
      json.then((data: GyroscopeData) => {
        setGyroscopeData(data);
      });
    });
  }, []);

  return (
    <div>
      <h2>Camera view</h2>
      <div>
        <p>x: {gyroscopeData?.x}</p>
        <p>y: {gyroscopeData?.y}</p>
        <p>z: {gyroscopeData?.z}</p>
      </div>
    </div>
  );
};

export default Camera;
