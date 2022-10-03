import React, { useEffect } from 'react';
import { getParsedCookies, setStringifiedCookie } from '../util/cookies';
import { mainStyles } from '../util/styles';

export default function Cart() {
  const productsInCart = getParsedCookies('cart');

  return (
    <div css={mainStyles}>
      <section className="main-section">
        <container>
          <div>{JSON.stringify(productsInCart)}</div>
        </container>
      </section>
    </div>
  );
}
