import styled from 'styled-components'

export const Container = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-around;
   width: 60px;
   margin: 18% auto 0;

   button {
      border: none;
      background-color: transparent;
   }

   @media screen and (max-width: 720px) {
      & {
         margin: 60% auto 0;
      }
   }
`
