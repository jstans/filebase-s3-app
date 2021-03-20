import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './index.css';
import ReactPixi from '@inlet/react-pixi';

const { Stage, Container } = ReactPixi;

console.log('test', ReactPixi);

ReactDOM.render(
  <React.StrictMode>
    <Stage>
      <Container x={150} y={150}>
        <App />
      </Container>
    </Stage>
  </React.StrictMode>,
  document.getElementById('root'),
);

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://www.snowpack.dev/concepts/hot-module-replacement
if (import.meta.hot) {
  import.meta.hot.accept();
}
