import { css } from '@emotion/react';
import Lottie, { useLottie } from 'lottie-react';
import React from 'react';
import animation from '../public/cat.json';

function CatAnimation() {
  const options = {
    animationData: animation,
    loop: true,
  };

  const { View } = useLottie(options);

  return <>{View}</>;
}

export default function Footer() {
  return (
    <footer>
      <CatAnimation />
    </footer>
  );
}
