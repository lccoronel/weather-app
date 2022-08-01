import React, { ReactNode } from 'react'

import { Container } from './styles'

interface TextRegularProps {
   children: ReactNode
   textAlign?: 'center' | 'left'
   color?: string
   fontWeight?: 'bold' | 'regular'
}

export const TextRegular: React.FC<TextRegularProps> = ({
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
