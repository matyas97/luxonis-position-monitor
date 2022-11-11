import * as React from 'react';
import ReactDOM from 'react-dom/client';
import Camera from './Camera';

const App = () => (
  <div style={styles.container}>
    <div>
      <h1>Luxonis Position Monitor</h1>
      <p>Check the postition of Oyour AK camera position in space!</p>
    </div>
    <Camera />
  </div>
);

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
};

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Failed to find root element');
}

const root = ReactDOM.createRoot(rootElement);
root.render(<App />);
