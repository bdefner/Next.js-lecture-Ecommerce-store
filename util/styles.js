import { css } from '@emotion/react';

const colors = {
  blue: '0b8ab3',
};

export const headerStyles = (darkModeOn) => css`
  width: 100vw;
  min-height: 50px;
  display: flex;
  justify-content: space-between;
  position: fixed;
  z-index: 100;
  padding: 15px;
  color: white;

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

export const mainStyles = (darkModeOn) => css`
  .main-section {
    width: 100vw;
    padding-top: 100px;
    padding-bottom: 100px;
    display: flex;
    justify-content: center;

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
      display: flex;
      justify-content: flex-start;

      & div {
        display: flex;
        align-items: center;
      }

      & button {
        margin-right: 5px;
      }

      & p {
        margin-right: 5px;
      }
    }
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
`;
