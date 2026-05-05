import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  :root {
    --dark-color: #030118;
    --black: #030318;
  }
  body {
    font-family: 'ArmCoronetU';
    letter-spacing: 1px;
    background: #040b2e;
    color: #030318;
    color: var(--black);
    scroll-behavior: smooth;
  }
  @font-face {
    font-family: 'englishFont';
    src: url("/font/HerrVonMuellerhoff-Regular.ttf");
    font-display: swap;
  }
  @font-face {
    font-family: 'ArmCoronetU';
    src: url("/font/ArmenianDecorativeU-Italic.ttf");
    font-display: swap;
  }
  h4 {
    font-size: 28px;
    font-weight: 100;
  }
  h1 {
    font-size: 64px;
    margin-top: 25px;
    /* text-shadow: 1px 6px 5px rgba(0,0,0,0.5);    */
  }
  h2 {
    font-size: 25px;
  }
`;
const Container = styled.div`
  max-width: 390px;
  margin: 0 auto;
  padding: 16px;
`;
const Flexible = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export { GlobalStyle, Container, Flexible };
