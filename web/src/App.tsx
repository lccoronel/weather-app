import React from 'react'

import { AppProvider } from 'hooks'
import { GlobalStyles } from 'styles/styles'
import { Home } from './modules/Home'

export function App() {
   return (
      <AppProvider>
         <GlobalStyles />
         <Home />
      </AppProvider>
   )
}
