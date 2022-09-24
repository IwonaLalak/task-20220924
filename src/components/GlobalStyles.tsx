import { Global, css } from '@emotion/react';

const GlobalStyles = () => (
  <Global
    styles={css`
      * {
        box-sizing: border-box;
      }
      html {
        font-family: sans-serif;
      }
      body {
        margin: 0;
        font-family: 'Roboto', 'Arial', sans-serif;
      }
    `}
  />
);

export default GlobalStyles;
