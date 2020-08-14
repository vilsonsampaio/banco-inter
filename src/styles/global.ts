import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;

    box-sizing: border-box;

    outline: 0;
  }

  html {
    height: 100%;
    
    font-size: 62.5%; /* 1rem = 10px */
  }

  body {
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.grey};

    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    -moz-osx-font-smoothing: grayscale;
  }

  body, #root {
    position: relative;

    min-height: 100vh;
  }
  
  body, input, button {
    font: 1.6rem 'Lato', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    line-height: 1.48;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 700;
  }
  
  a {
    background: none;

    font-weight: 700;
    
    border: 0;
    
    cursor: pointer;
    
    text-decoration: none;
    
    transition: 180ms ease-in-out;
  }

  button {
    cursor: pointer;
  }

  ul {
    padding: 0;

    text-align: left;
    
    list-style: none;
  }
`;