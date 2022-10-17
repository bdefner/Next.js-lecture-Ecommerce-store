import 'animate.css';
import Link from 'next/link';
import { useState } from 'react';
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
          <a data-test-id="go-to-cart">
            <img src="/cart.png" alt="shopping cart" className="nav-icon" />
            <div id="total-items-count-wrap">{props.totalItems}</div>
          </a>
        </Link>
        <button
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
        </button>
        <div id="settings-wrap" className={settingsDisplay}>
          <button
            onClick={() => {
              props.setDarkModeOn(false);
            }}
          >
            <img
              src="/moon.png"
              alt="moon for dark mode on"
              className="nav-icon"
            />
          </button>

          <button
            onClick={() => {
              props.setDarkModeOn(true);
            }}
          >
            <img
              src="/sun.png"
              alt="sun for day mode on"
              className="nav-icon"
            />
          </button>
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
