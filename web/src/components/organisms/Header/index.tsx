import React from 'react'

import refreshImg from 'assets/header/refresh.png'
import { Icon } from 'components/atoms'
import { Container } from './styles'

export interface HeaderProps {
   handleRefresh(): void
}

export const Header: React.FC<HeaderProps> = ({ handleRefresh }) => {
   return (
      <Container>
         <a href="https://openweathermap.org/api/one-call-3" target="_blank" rel="noreferrer">
            Open Weather API
         </a>

         <button type="button" onClick={handleRefresh}>
            <Icon source={refreshImg} size="small" alt="refresh" marginRight={5} />
            Refresh
         </button>
      </Container>
   )
}
