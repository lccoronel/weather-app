import styled from 'styled-components'

export const Container = styled.div`
   margin-top: 2%;

   .textInfo {
      font-size: 25px;
      text-align: center;
      color: var(--font-color-gray);

      span {
         color: var(--font-color-black);
         font-weight: bold;
      }
   }

   @media screen and (max-width: 720px) {
      .textInfo {
         font-size: 20px;
         padding: 35px;
         text-align: center;
      }
   }
`
