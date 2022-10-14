import { css } from '@emotion/react';
import Lottie, { useLottie } from 'lottie-react';
import { redirect } from 'next/dist/server/api-utils';
import React from 'react';
import animation from '../public/cat.json';
import LottieAnimation from '../public/LottieAnimation';
import { footerStyles } from '../util/styles';

export default function Footer(props) {
  return <footer css={footerStyles} className="footer"></footer>;
}
