import styled from 'styled-components'

export const Container = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   margin: 0 15px;
   min-width: 150px;

   @media screen and (max-width: 720px) {
      & {
         margin: 0;
      }
   }
`
