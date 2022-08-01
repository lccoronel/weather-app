import styled from 'styled-components'

export const Container = styled.div`
   display: flex;
   align-items: center;
   padding: 10px 0;

   @media screen and (max-width: 720px) {
      & {
         font-size: 13px;
      }
   }
`
