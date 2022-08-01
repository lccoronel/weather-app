import React from 'react'

import { Container } from './styles'

export const Header: React.FC = () => {
   return (
      <Container>
         <a href="https://openweathermap.org/api/one-call-3" target="_blank" rel="noreferrer">
            Open Weather API
         </a>
      </Container>
   )
}
