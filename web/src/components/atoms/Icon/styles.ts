import styled, { css } from 'styled-components'

interface ContainerProps {
   size: 'small' | 'medium' | 'larger'
   marginRight: number
   marginLeft: number
}

const ICON_SIZE = {
   small: 12,
   medium: 16,
   larger: 45,
}

export const Container = styled.img<ContainerProps>`
   ${({ size }) => css`
      width: ${ICON_SIZE[size]}px;
      height: ${ICON_SIZE[size]}px;

      @media screen and (max-width: 720px) {
         width: ${ICON_SIZE[size] - 2}px;
         height: ${ICON_SIZE[size] - 2}px;
      }
   `}
   margin-right: ${({ marginRight }) => marginRight}px;
   margin-left: ${({ marginLeft }) => marginLeft}px;
`
