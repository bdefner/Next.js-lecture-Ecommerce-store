import { css, Global } from '@emotion/react';
import { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import { getParsedCookies } from '../util/cookies';
import { mainStyles } from '../util/styles';

const globalStyles = css`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    font-family: 'Inter Tight', sans-serif;
  }
`;

function MyApp({ Component, pageProps }) {
  const [mode, setMode] = useState(true);
  const [totalItems, setTotalItems] = useState(0);
  const [fontSize, setFontSize] = useState(15);

  useEffect(() => {
    const productsInCart = getParsedCookies('cart');
    // const totalItemsInCookies = productsInCart.map((item) => {
    //   setTotalItems(totalItems++);
    //   console.log('totalItems', totalItems);
    // });
  }, []);

  useEffect(() => {
    window
      .matchMedia('(prefers-color-scheme: light)')
      .addEventListener('change', (event) => {
        const colorScheme = event.matches ? true : false;
        console.log(colorScheme); // true or false
        setMode(colorScheme);
      });
  }, []);
  return (
    <>
      <Layout
        fontSize={fontSize}
        setFontSize={setFontSize}
        darkModeOn={mode}
        setDarkModeOn={setMode}
        totalItems={totalItems}
      >
        <Global styles={globalStyles} />
        <Component
          {...pageProps}
          totalItems={totalItems}
          setTotalItems={setTotalItems}
          darkModeOn={mode}
          setDarkModeOn={setMode}
        />
      </Layout>
    </>
  );
}

export default MyApp;
