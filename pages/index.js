import 'animate.css';
import { css, Global } from '@emotion/react';
import Head from 'next/head';
import Image from 'next/image';
import { mainStyles } from '../util/styles';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Products overview" />
      </Head>
      <section css={mainStyles} className="home-hero-section">
        <Image
          className="animate__animated animate__zoomIn"
          src="/logo-xl.png"
          alt="vegan hats for cats logo"
          height="386"
          width="718"
        />
      </section>
    </>
  );
}
