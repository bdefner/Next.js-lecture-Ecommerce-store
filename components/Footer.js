import React from 'react';
import LottieSleepingCat from '../components/LottieSleepingCat';
import { mainStyles } from '../util/styles';

export default function Footer() {
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
