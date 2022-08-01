import styled, { css } from 'styled-components'

interface ContainerProps {
   textAlign: 'center' | 'left'
   color?: string
   fontWeight: 'bold' | 'regular'
}

export const Container = styled.h2<ContainerProps>`
   font-size: 13px;
   ${({ textAlign }) =>
      textAlign === 'center' &&
      css`
         text-align: ${textAlign};
      `}
   ${({ color }) =>
      color &&
      css`
         color: ${color};
      `}
   ${({ fontWeight }) =>
      fontWeight === 'bold' &&
      css`
         font-weight: ${fontWeight};
      `}
`
