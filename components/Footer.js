import { css } from '@emotion/react';
import Lottie, { useLottie } from 'lottie-react';
import { redirect } from 'next/dist/server/api-utils';
import React from 'react';
import animation from '../public/cat.json';
import LottieAnimation from '../public/LottieAnimation';
import { footerStyles } from '../util/styles';

function CatAnimation() {
  const options = {
    animationData: animation,
    mode: 'cursor',
    autoplay: false,
    loop: false,
  };

  const { View } = useLottie(options);

  return <div>{View} </div>;
}

export default function Footer(props) {
  return (
    <footer css={footerStyles} className="footer">
      <LottieAnimation />
    </footer>
  );
}
