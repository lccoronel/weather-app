import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
   :root {
      --background-app: #fff2cc;
      --background-app-night: #6fa8dc;
      --background-button: white;
      --font-color-gray: #5b5b5b;
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

export const theme = {
   colors: {
      backgroundApp: '#fff2cc',
      backgroundAppNight: '#6fa8dc',
      backgroundButton: 'white',
      fontColorGray: '#5b5b5b',
      fontColorBlack: 'black',
   },
}
