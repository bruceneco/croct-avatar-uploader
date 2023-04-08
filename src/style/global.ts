import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    line-height: 1.5;
    font-weight: 400;
    
    color: ${({ theme }) => theme.colors.text.primary};

    background-color: ${({ theme }) => theme.colors.background.main};


    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
  }
  html {
    font-size: 62.5%;
  }
  body {
    margin: 0;
    display: flex;
    place-items: center;
    min-height: 100vh;
  }
  #root {
    max-width: ${({ theme }) => theme.sizes.screen.maxWidth};
    min-width: ${({ theme }) => theme.sizes.screen.minWidth};
    margin: 0 auto;
    text-align: center;
  }
`;
