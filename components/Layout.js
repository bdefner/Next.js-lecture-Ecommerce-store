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
      <Header />
      <main css={mainStyles}>{props.children}</main>
      <Footer />
    </>
  );
}
