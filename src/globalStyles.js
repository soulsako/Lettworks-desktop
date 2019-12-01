// globalStyle.js
import { createGlobalStyle } from 'styled-components';
export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;

  }

  html {
    font-size: 62.5%;
  }
  body {
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, "Open Sans", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

export const Theme = {
  primaryColor: '#55c57a',
  primaryColorLight: '#7ed56f',
  primaryColorDark: '#28b485',
  secondaryColor: '#ffb900',
  secondaryColorDark: '#ff7730',
  tertiaryColor: '#2998ff',
  tertiaryColorDark: '#5643fa',
  greyColorLight: '#f7f7f7',
  greyColorDark: '#999',
  greyColorDarkest: '#333',
  whiteColor: '#fff',
  blackColor: '#000',
  defaultFontSize: '1.6rem',
};
