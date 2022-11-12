import * as React from 'react';
import ReactDOM from 'react-dom/client';
import Camera from './Camera';
import './styles.css';

const App = () => (
  <>
    <div style={styles.headingContainer}>
      <h1>OAK Camera Position Monitor</h1>
    </div>
    <Camera />
  </>
);

const styles = {
  headingContainer: {
    display: 'flex',
    justifyContent: 'center',
    color: 'white',
  },
};

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Failed to find root element');
}

const root = ReactDOM.createRoot(rootElement);
root.render(<App />);
