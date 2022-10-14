import { css } from '@emotion/react';
import Lottie, { useLottie } from 'lottie-react';
import { redirect } from 'next/dist/server/api-utils';
import React from 'react';
import LottieSleepingCat from '../components/LottieSleepingCat';
import animation from '../public/cat.json';
import LottieAnimation from '../public/LottieAnimation';
import { mainStyles } from '../util/styles';

export default function Footer(props) {
  return (
    <div css={mainStyles}>
      <footer>
        <div id="sleeping-cat">
          <LottieSleepingCat />
        </div>
      </footer>
    </div>
  );
}
