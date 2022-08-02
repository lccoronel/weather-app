import styled from 'styled-components'

export const Container = styled.div`
   width: 100vw;
   height: 100vh;
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;
   background-color: var(--background-app);
`

const animationSize = 100
export const ContainerAnimation = styled.div`
   width: ${animationSize}px;
   height: ${animationSize}px;
`