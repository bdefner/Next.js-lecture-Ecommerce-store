import { css } from '@emotion/react';
// import Image from 'next/image';
import Link from 'next/link';
import { headerStyles } from '../util/styles';

export default function Header(props) {
  return (
    <header css={headerStyles(props.darkModeOn)}>
      <div id="header-logo-wrap">
        <Link href="/index.js">
          <img
            src="/logo.png"
            alt="vegan hats for cats minimal logo"
            className="light-mode"
          />
        </Link>
        <Link href="/index.js">
          <img
            src="/logo-darkmode.png"
            alt="vegan hats for cats minimal logo"
            className="dark-mode"
          />
        </Link>
      </div>
      <div id="header-nav-wrap">
        <Link href="" className="nav-link">
          <a>home</a>
        </Link>
        <Link href="" className="nav-link">
          <a>hats</a>
        </Link>
        <a>
          <img
            src="/moon.png"
            alt="moon for dark mode on"
            className="nav-icon"
          />
        </a>
        <a>
          <img src="/sun.png" alt="sun for day mode on" className="nav-icon" />
        </a>
      </div>
    </header>
  );
}
