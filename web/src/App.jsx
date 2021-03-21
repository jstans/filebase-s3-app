import React, { useState, useEffect } from 'react';
// import Card from './Card';
import Bunny from './Bunny';
import ReactPixi from '@inlet/react-pixi';
const { Stage, useApp } = ReactPixi;

const App = () => {
  const rootDiv = document.getElementById('root');
  const [appWidth, setAppWidth] = useState(rootDiv.offsetWidth);
  const [appHeight, setAppHeight] = useState(rootDiv.offsetHeight);

  useEffect(() => {
    function resize() {
      setAppWidth(window.innerWidth);
      setAppHeight(window.innerHeight);
    }
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize, false);
  }, []);

  return (
    <Stage width={appWidth} height={appHeight} options={{ backgroundAlpha: 0 }}>
      <Bunny />
    </Stage>
  );
};

export default App;
