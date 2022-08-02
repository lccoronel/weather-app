import styled from 'styled-components'

interface ContainerProps {
   isMorning: boolean
}

export const Container = styled.div<ContainerProps>`
   background-color: ${({ isMorning, theme }) =>
      isMorning ? theme.colors.backgroundApp : theme.colors.backgroundAppNight};
   width: 100vw;
   height: 100vh;
`
