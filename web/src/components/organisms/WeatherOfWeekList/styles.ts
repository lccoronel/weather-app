import styled from 'styled-components'

export const Container = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   margin-top: 5%;

   @media screen and (max-width: 720px) {
      & {
         margin-top: 20%;
         overflow: scroll;
      }
   }
`
