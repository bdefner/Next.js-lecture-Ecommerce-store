import React, { useEffect } from 'react';
import { getParsedCookies, setStringifiedCookie } from '../util/cookies';
import { mainStyles } from '../util/styles';

export default function Cart() {
  const productsInCart = getParsedCookies('cart');

  if (!productsInCart) {
    console.log('Cart is empty');
  }

  return (
    <div css={mainStyles}>
      <section className="main-section">
        <container>??!?</container>
      </section>
    </div>
  );
}
