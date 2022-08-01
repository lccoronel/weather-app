import styled from 'styled-components'

export const Container = styled.div`
   /* background-color: aqua; */
   display: flex;
   flex-direction: column;
   align-items: center;
   margin: 0 15px;
   min-width: 150px;

   @media screen and (max-width: 600px) {
      & {
         margin: 0;
      }
   }
`
