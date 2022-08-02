import styled from 'styled-components'

interface ContainerProps {
   isMorning: boolean
}

export const Container = styled.div<ContainerProps>`
   width: 100vw;
   height: 100vh;
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;
   background-color: ${({ isMorning, theme }) =>
      isMorning ? theme.colors.backgroundApp : theme.colors.backgroundAppNight};
`

const animationSize = 100
export const ContainerAnimation = styled.div`
   width: ${animationSize}px;
   height: ${animationSize}px;
`
