import React from 'react'

import { Container } from './styles'

interface IconProps {
   size?: 'small' | 'medium' | 'larger'
   source: string
   alt: string
   marginRight?: number
   marginLeft?: number
}

export const Icon: React.FC<IconProps> = ({ size = 'medium', source, alt, marginRight = 0, marginLeft = 0 }) => {
   return <Container src={source} alt={alt} size={size} marginRight={marginRight} marginLeft={marginLeft} />
}
