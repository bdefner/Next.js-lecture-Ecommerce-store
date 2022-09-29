import { css, Global } from '@emotion/react';
import { useEffect, useState } from 'react';
import Layout from '../components/Layout';

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
      <Layout darkModeOn={mode}>
        <Global styles={globalStyles} />
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
