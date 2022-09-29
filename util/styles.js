import { css } from '@emotion/react';

export const headerStyles = (darkModeOn) => css`
  width: 100vw;
  min-height: 50px;
  display: flex;
  justify-content: space-between;
  position: fixed;
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

  h1 {
    text-align: center;
    font-size: 100px;
    font-weight: lighter;

    & span {
      font-weight: 900;
      color: #c15c00;
      margin-left: 200px;
    }
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
  }
`;
