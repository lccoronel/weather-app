import React, { ReactNode } from 'react'

import { Container } from './styles'

interface TextSmallProps {
   children: ReactNode
   textAlign?: 'center' | 'left'
   color?: string
   fontWeight?: 'bold' | 'regular'
}

export const TextSmall: React.FC<TextSmallProps> = ({
   children,
   textAlign = 'left',
   color,
   fontWeight = 'regular',
}) => {
   return (
      <Container textAlign={textAlign} color={color} fontWeight={fontWeight}>
         {children}
      </Container>
   )
}
