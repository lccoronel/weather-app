import React from 'react'
import { ThemeProvider } from 'styled-components'

import { AppProvider } from 'hooks'
import { GlobalStyles, theme } from 'styles/styles'
import { Home } from './modules/Home'

export function App() {
   return (
      <ThemeProvider theme={theme}>
         <AppProvider>
            <GlobalStyles />
            <Home />
         </AppProvider>
      </ThemeProvider>
   )
}
