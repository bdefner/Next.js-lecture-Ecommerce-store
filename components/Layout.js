import Head from 'next/head';
import { mainStyles } from 'util/styles';
import Footer from './Footer';
import Header from './Header';

export default function Layout(props) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header darkModeOn={props.darkModeOn} />
      <main css={mainStyles(props.darkModeOn)}>{props.children}</main>
      <Footer />
    </>
  );
}
