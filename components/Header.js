import 'animate.css';
import { css } from '@emotion/react';
// import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { getParsedCookies } from '../util/cookies';
import { headerStyles } from '../util/styles';

export default function Header(props) {
  const [settingsDisplay, setSettingsDisplay] = useState('hidden');
  return (
    <header css={headerStyles(props.darkModeOn, props.settingsVisible)}>
      <div id="header-logo-wrap">
        <Link href="/">
          <img
            src="/logo.png"
            alt="vegan hats for cats minimal logo"
            className="light-mode"
          />
        </Link>
        <Link href="/">
          <img
            src="/logo-darkmode.png"
            alt="vegan hats for cats minimal logo"
            className="dark-mode"
          />
        </Link>
      </div>
      <div id="header-nav-wrap">
        <Link href="/" className="nav-link">
          <a>home</a>
        </Link>
        <Link href="/products" className="nav-link">
          <a>shop</a>
        </Link>
        <Link href="/cart">
          <a>
            <img src="/cart.png" alt="shopping cart" className="nav-icon" />
            <div id="total-items-count-wrap">{props.totalItems}</div>
          </a>
        </Link>
        <a
          onClick={() => {
            if (settingsDisplay === 'hidden') {
              setSettingsDisplay('visible');
            } else {
              setSettingsDisplay('hidden');
            }
          }}
        >
          <img
            src="/settings.png"
            alt="moon for dark mode on"
            className="nav-icon"
          />
        </a>
        <div id="settings-wrap" className={settingsDisplay}>
          <a
            onClick={() => {
              props.setDarkModeOn(false);
            }}
          >
            <img
              src="/moon.png"
              alt="moon for dark mode on"
              className="nav-icon"
            />
          </a>

          <a
            onClick={() => {
              props.setDarkModeOn(true);
            }}
          >
            <img
              src="/sun.png"
              alt="sun for day mode on"
              className="nav-icon"
            />
          </a>
        </div>{' '}
        <Link href="/login">
          <a>
            <img src="/login.png" alt="login" className="nav-icon" />
          </a>
        </Link>
      </div>
    </header>
  );
}
