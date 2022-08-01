import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
   :root {
      --background-app: #fcdec0;
      --background-button: white;
      --font-color-gray: gray;
      --font-color-black: black;
   }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  body, input, button, p {
    font-family: 'Roboto', sans-serif;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }
`
