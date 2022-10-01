import { css } from '@emotion/react';
import Lottie, { useLottie } from 'lottie-react';
import React from 'react';
import animation from '../public/cat.json';
import LottieAnimation from '../public/LottieAnimation';

function CatAnimation() {
  const options = {
    animationData: animation,
    mode: 'cursor',
    autoplay: false,
    loop: false,
  };

  const { View } = useLottie(options);

  return (
    <div>
      {View}{' '}
      <button onClick={() => this.setState({ isStopped: true })}>stop</button>
      <button onClick={() => this.setState({ isStopped: false })}>play</button>
      <button onClick={() => this.setState({ isPaused: !this.state.isPaused })}>
        pause
      </button>
    </div>
  );
}

export default function Footer() {
  return (
    <footer>
      <LottieAnimation />
    </footer>
  );
}
