import Head from 'next/head';
import { mainStyles } from '../util/styles';
import Footer from './Footer';
import Header from './Header';

export default function Layout(props) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header darkMode={props.darkModeOn} setDarkModeOn={props.setDarkModeOn} />
      <main css={mainStyles(props.darkModeOn, props.fontSize)}>
        {props.children}
      </main>

      <button
        onClick={() => {
          props.setFontSize(props.fontSize + 1);
        }}
      >
        {' '}
        font +
      </button>
      <button
        onClick={() => {
          props.setFontSize(props.fontSize - 1);
        }}
      >
        {' '}
        font -
      </button>
      <button
        onClick={() => {
          props.setDarkModeOn(false);
        }}
      >
        dark
      </button>
      <Footer css={mainStyles(props.darkModeOn, props.fontSize)} />
    </>
  );
}
