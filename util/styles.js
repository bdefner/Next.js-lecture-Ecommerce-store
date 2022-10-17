import { css } from '@emotion/react';

const theme = (fontSize) => {
  blue: '0b8ab3';
};

export const headerStyles = (darkModeOn, fontSize) => css`
  width: 100vw;
  min-height: 50px;
  display: flex;
  justify-content: space-between;
  position: fixed;
  z-index: 100;
  padding: 15px;
  color: white;
  font-size: ${fontSize}px;

  & a {
    display: flex;
  }

  .visible {
    display: block;
  }

  .hidden {
    display: none;
  }

  #settings-wrap {
    background-color: rgba(170, 170, 170, 0.56);
    padding: 8px;
    border-radius: 7px;
  }

  .dark-mode {
    ${darkModeOn &&
    css`
      display: none;
    `}
  }

  .light-mode {
    ${!darkModeOn &&
    css`
      display: none;
    `}
  }

  #header-logo-wrap {
    width: 50px;
    height: 50px;
    padding: 5px;
    cursor: pointer;

    & img {
      width: 100%;
      height: auto;
    }
  }

  .nav-icon {
    height: 20px;
    width: 20px;
    fill: white;
    transition: filter 300ms ease;
    cursor: pointer;

    &:hover {
      filter: invert(0.8);
    }
  }

  #total-items-count-wrap {
    border-radius: 50%;
    width: 18px;
    height: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #c15c00;
    position: relative;
    font-size: 12px;
    padding: 3px;
    left: -5px;
    bottom: -5px;
  }

  #header-nav-wrap {
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    position: relative;
    z-index: 100;
    align-items: center;
    background-color: #0b8ab3;
    border-radius: 8px;
    padding: 5px 15px 5px 15px;
  }
  a {
    padding: 5px 15px 5px 15px;
    text-decoration: none;
    font-weight: medium;
    font-size: 17px;
    color: white;
    transition: 300ms color ease;

    &:hover {
      color: black;
    }
  }
`;

export const mainStyles = (darkModeOn, fontSize, itemCounter) => css`
  // Dynamic styles

  .hidden {
    display: none;
  }

  .visible {
    display: block;
  }

  // Global - For all pages

  .main-section {
    width: 100vw;
    min-height: 100vh;
    padding-top: 100px;
    padding-bottom: 100px;
    display: flex;
    justify-content: center;
    font-size: ${fontSize}px;

    ${!darkModeOn &&
    css`
      background-color: #1d1d1d;
      color: white;
    `}

    & container {
      width: 100%;
      max-width: 1000px;
    }
  }

  .main-button {
    padding: 8px 15px 8px 15px;
    background-color: #0b8ab3;
    color: white;
    border: 0px;
    border-radius: 8px;
    cursor: pointer;
    text-decoration: none;
    transition: 300ms background-color ease;

    &:hover {
      background-color: #333;
    }
  }

  .secondary-button {
    background-color: #c15c00;
  }

  h1 {
    text-align: center;
    font-size: 80px;
    font-weight: lighter;

    & span {
      font-weight: 900;
      color: #c15c00;
      margin-left: 200px;
    }
  }

  h2 {
    font-size: 50px;
    font-weight: 900;
  }

  .flex-row-center {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  // Homepage

  .home-hero-section {
    min-height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;

    ${!darkModeOn &&
    css`
      background-color: #1d1d1d;
      color: white;
    `}
  }

  // Product/s page

  .product-showroom-wrap {
    display: flex;
    flex-wrap: wrap;

    & .showroom-item {
      width: 50%;
      padding: 100px;

      & .showroom-image {
        border-radius: 8px;
      }
    }
    & .showroom-image-wrap {
      position: relative;

      & a {
        text-decoration: none;
        font-size: 50px;
        font-weight: bold;
        color: #0b8ab3;
        ${!darkModeOn &&
        css`
          color: white;
        `}
      }
    }
  }

  .error-page-wrap {
    min-height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;

    & #error-message-wrap {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }

  .product-info-container {
    position: relative;
    display: flex;
    flex-direction: flex-start;
    width: 60%;
    & img {
      width: 100%;
      border-radius: 8px;
    }

    & #add-to-cart-wrap {
      margin-top: 25px;
      display: flex;
      justify-content: flex-start;
      align-items: center;

      & div {
        display: flex;
        align-items: top;
      }

      & button {
        margin-left: 15px;
      }

      & p {
        margin-right: 5px;
      }
    }
  }

  #product-price {
    font-size: 32px;
    font-weight: 400;
  }

  .info-text-column {
    margin-left: 50px;
    width: 50%;
  }

  #relative-push-to-left {
    position: relative;
    left: -5%;
    padding-top: 150px;

    & > button {
      transform: rotate(-0.015turn);
      font-size: 20px;
      transition: 300ms ease all;
      &:hover {
        transform: scale(1.1);
        transform: rotate(0.015turn);
      }
    }
  }

  // Cart Page
  #cart-container {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }
  #cart-item {
    display: flex;
    align-items: center;
    justify-content: space-around;

    & h3 {
      margin: 20px;
      font-size: 25px;
      width: 120px;
    }

    & div {
      margin-right: 10px;
      padding: 0px 15px 0px 15px;
    }

    & p {
      margin: 0px 5px 0px 5px;
    }

    & span {
      font-weight: bold;
    }

    & #product-image-in-cart {
      border-radius: 8px;
    }
  }

  #product-image-in-cart {
    margin-right: 25px;
  }

  .amount-wrap {
    display: flex;
    justify-content: center;
    align-items: center;
    max-height: 32px;
    border: solid 1px;
    border-color: #9a9a9a;
    border-radius: 5px;
    margin: 0px;

    & button {
      background-color: white;
      border: 0px;
      margin: 0px !important;
      padding: 5px;
    }

    & p {
      padding: 5px;
      margin: 0;
    }
  }

  #total-wrap {
    width: 100%;

    display: flex;

    justify-content: space-between;
    align-items: center;
  }

  // Checkout page

  #checkout-container {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    max-width: 1000px;
    position: relative;

    & .column {
      width: 50%;
    }

    & form {
      max-width: 300px;
      & .row-of-inputs {
        display: flex;
        justify-content: space-between;
        width: 100%;

        &:first-child {
          margin-right: 15px;
        }
      }

      & div {
        margin-top: 15px;
      }

      & .group-of-inputs {
        margin: 50px 0 50px 0;
      }

      & input {
        margin: 5px 15px 0 0;
        padding: 5px;
        border-width: 1px;
        border-color: #cccccc;
        background-color: #ffffff;
        color: #000000;
        border-style: solid;
        border-radius: 8px;
        box-shadow: 0px 0px 5px rgba(149, 149, 149, 0.22);
        width: 100%;
      }

      & .main-button {
        padding: 8px 15px 8px 15px;
        background-color: #0b8ab3;
        color: white;
        border: 0px;
        border-radius: 8px;
        cursor: pointer;
        text-decoration: none;
        transition: 300ms background-color ease;

        &:hover {
          background-color: #333;
        }
      }

      & #postal {
        max-width: 80px;
      }

      & label {
        font-size: 15px;
        font-weight: 400;
      }
      & > div {
        margin-top: 15px;
      }
    }

    #checkout-summary {
      max-width: 450px;
      padding: 25px 25px 50px 25px;
      margin: 100px 100px 0 0;
      background-color: #f2f2f2;
      border-radius: 8px;
      position: sticky;
      top: 300px;

      ${!darkModeOn &&
      css`
        background-color: #c15c00;
        color: white;
      `}

      & div {
        width: 100%;
        display: flex;
        justify-content: between;
        align-items: center;
        margin: 5px;

        & em {
          font-weight: 600;
          font-size: 25px;
        }
      }

      & #price {
        width: 100%;
        text-align: right;
      }
      & #total-wrap {
        width: 100%;
        display: flex;
        justify-content: space-between;

        & span {
          font-weight: 600;
        }
      }
    }
  }

  #login-section {
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  #login-wrap {
    display: flex;
    flex-direction: column;
    & input {
      margin: 5px 15px 0 0;
      padding: 8px;
      border-width: 1px;
      border-color: #cccccc;
      background-color: #ffffff;
      color: #000000;
      border-style: solid;
      border-radius: 8px;
      box-shadow: 0px 0px 5px rgba(149, 149, 149, 0.22);
      width: 100%;
    }
    & button {
      margin-left: 15px;
    }

    & .flex-row-wrap {
      align-items: stretch;
    }

    & #i-forgot {
      font-size: 11px;
      text-decoration: underline;
      color: #0b8ab3;
      cursor: pointer;
      margin: 15px 0 0px 15px;
    }

    & span {
      background-color: #0b8ab3;
      position: absolute;
      bottom: 50px;
      color: white;
      border-radius: 8px;
      padding: 15px;
      margin-top: 50px;
    }

    & .main-button {
      background-color: #0b8ab3;
      color: white;
      padding-left: 15px;
      padding-right: 15px;
      margin-left: 8px;
      max-width: 100px;
    }
  }

  .row-of-inputs-wrap {
    display: flex;
    align-items: bottom;
    margin-bottom: 50px;

    & label {
      font-size: 15px;
      font-weight: 500;
    }

    & input {
      border: solid 1px;
      border-radius: 5px;
      margin-right: 15px;
      box-shadow: none;
    }

    & button {
      margin-left: 15px;
    }
  }

  #product-management-list {
    margin-top: 50px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    & .row-of-inputs-wrap {
      margin-bottom: 15px;
    }

    & img {
      height: 24px;
      width: 24px;
    }

    & input {
      border: 0px;

      &:active {
        border: 1px;
      }

      &:focus {
        border: 1px;
      }
    }
  }

  #product-name-in-list {
    font-size: 17px;
    font-weight: 600;
  }

  footer {
    background-color: #0b8ab3;
    padding: 100px;
    display: flex;
    justify-content: center;
  }
  #sleeping-cat {
    max-width: 400px;
  }
`;
