import { createGlobalStyle } from "styled-components";

import { themeColor } from "styles/styleUtils";

export const GlobalStyles = createGlobalStyle`
  :root {
    --reach-dialog: 1;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
  }

  html, body, #root {
    height: 100%;
  }
  
  body {
    background: ${themeColor("white")};
    font-family: 'Ubuntu', sans-serif;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
  }

  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }

  input, button, textarea, select {
    font: inherit;
  }
  
  button {
     
      cursor: pointer;
  }

  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
  }

  #root {
    isolation: isolate;
  }
`;
// border: none;
// background: unset;
