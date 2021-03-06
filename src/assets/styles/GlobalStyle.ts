import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%;
    overflow-x: hidden;
    background-color: white;
  }

  *, *::after, *::before {
    box-sizing: border-box;
  }

  body {
    font-family: 'Poppins', sans-serif;
    padding: 0;
    margin: 0;
    scroll-behavior: smooth;
  }

  a, button, textarea, input, select {
    font-family: 'Poppins', sans-serif
  }
`;

export default GlobalStyle;
