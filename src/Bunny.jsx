import React, { useRef, useState } from 'react';
import ReactPixi from '@inlet/react-pixi';

const { Stage, Sprite, useTick } = ReactPixi;

const Bunny = () => {
  // states
  const iter = useRef(0);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [rotation, setRotation] = useState(0);

  // custom ticker
  useTick((delta) => {
    const i = (iter.current += 0.05 * delta);

    setX(Math.sin(i) * 100);
    setY(Math.sin(i / 1.5) * 100);
    setRotation(-10 + Math.sin(i / 10 + Math.PI * 2) * 10);
  });

  return (
    <Sprite
      image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/IaUrttj.png"
      anchor={0.5}
      x={x}
      y={y}
      rotation={rotation}
    />
  );
};

export default Bunny;
