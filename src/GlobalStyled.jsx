import { createGlobalStyle } from 'styled-components';

export const GlobalStyled = createGlobalStyle`

:root {
  --background-color: #dde0c7;
  --light-background-color: #f5f5f5;
  --black-olive: #37392e;
  --black-text: #0b0b09;
  --blue-color: #0beda3;
  --blue-medium-color: #0aad77;

  --body-text-font: 'Newsreader', serif;
  --title-text-font: 'DM Sans', sans-serif;

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;
}

* {
  margin: 0;
  padding: 0;
  font-family: 'Newsreader', serif;
  box-sizing: border-box;
  list-style: none;
  text-decoration: none;
}

html {
  width: auto;
}

body {
  max-width: 100vw;
  height: 100vh;
  background-color: var(--background-color);
}

`;
