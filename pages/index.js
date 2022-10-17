import 'animate.css';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { mainStyles } from '../util/styles';

export default function Home(props) {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Products overview" />
      </Head>
      <section css={mainStyles(props.darkModeOn)} className="home-hero-section">
        <div className="animate__animated animate__zoomIn">
          <h1>
            vegan hats&nbsp;
            <br />
            <span>for cats</span>
          </h1>
          <Image
            src="/logo-xl.png"
            alt="vegan hats for cats logo"
            height="307"
            width="340"
          />
        </div>
        <div id="relative-push-to-left">
          <Link href="/products">
            <button className="main-button">See our products</button>
          </Link>
        </div>
      </section>
    </>
  );
}
