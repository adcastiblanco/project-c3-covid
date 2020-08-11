import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  html {
    height: 100%;
  }

  body {
    margin: 0;
    height: 100%;
    width: 100%;
    font-family: 'Open Sans', sans-serif;
    #root {
      height: 100%;
    }
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Montserrat', sans-serif;
  }

  p, a, li {
    font-size: 0.9em;
  }

  figure {
    margin: 0;
  }
`;

export default GlobalStyles;
