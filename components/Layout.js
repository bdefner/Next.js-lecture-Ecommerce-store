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
      <Header
        darkModeOn={props.darkModeOn}
        setDarkModeOn={props.setDarkModeOn}
        settingsVisible={props.settingsVisible}
        setSettingsVisible={props.setSettingsVisible}
        totalItems={props.totalItems}
        setTotalItems={props.setTotalItems}
      />
      <main css={mainStyles(props.darkModeOn, props.fontSize)}>
        {props.children}
      </main>
      <Footer css={mainStyles(props.darkModeOn, props.fontSize)} />
    </>
  );
}
