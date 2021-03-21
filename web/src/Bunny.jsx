import React, { useRef, useEffect, useState } from 'react';
import ReactPixi from '@inlet/react-pixi';

const { Stage, Sprite, Container, useApp, useTick } = ReactPixi;

const Bunny = () => {
  // states
  const app = useApp();
  const iter = useRef(0);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [rotation, setRotation] = useState(0);

  const rootDiv = document.getElementById('root');
  const maxX = rootDiv.offsetWidth / 2;
  const maxY = rootDiv.offsetHeight / 2;

  // custom ticker
  useTick((delta) => {
    const i = (iter.current += 0.05 * delta);

    setX(Math.sin(i) * (maxX - 200));
    setY(Math.sin(i / 1.5) * (maxY - 200));
    setRotation(-10 + Math.sin(i / 10 + Math.PI * 2) * 10);
  });

  // function resize() {
  //   app.renderer.resize(window.innerWidth, window.innerHeight);
  //   //rect.position.set(app.screen.width, app.screen.height);
  // }

  // useEffect(() => {
  //   window.addEventListener('resize', resize);
  //   return () => window.removeEventListener('resize', resize, false);
  // }, []);

  return (
    <Container x={maxX} y={maxY}>
      <Sprite
        image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/IaUrttj.png"
        anchor={0.5}
        x={x}
        y={y}
        rotation={rotation}
      />
    </Container>
  );
};

export default Bunny;
