import styled from 'styled-components'

export const Container = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   margin-top: 15%;

   @media screen and (max-width: 600px) {
      & {
         margin-left: 10px;
         overflow: scroll;
      }
   }
`
