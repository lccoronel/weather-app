import styled from 'styled-components'

export const Container = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   margin-top: 5%;
`

const containerSize = 150
export const ContainerAnimation = styled.div`
   width: ${containerSize}px;
   height: ${containerSize}px;

   @media screen and (max-width: 600px) {
      width: ${containerSize - 70}px;
      height: ${containerSize - 70}px;
   }
`

export const ContainerDegrees = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   margin: 0 50px;

   .degrees {
      font-size: 100px;
   }

   @media screen and (max-width: 600px) {
      & {
         margin: 0 40px 0 30px;
      }

      .degrees {
         font-size: 60px;
      }
   }
`

export const ContainerTemperature = styled.div`
   display: flex;
   align-items: center;
`

export const ContainerMoreInfos = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: space-around;
   height: 100px;
`
