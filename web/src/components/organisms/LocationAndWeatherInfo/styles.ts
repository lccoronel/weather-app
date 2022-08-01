import styled from 'styled-components'

export const Container = styled.div`
   .textInfo {
      font-size: 25px;
      text-align: center;
      color: gray;

      span {
         color: black;
         font-weight: bold;
      }
   }

   @media screen and (max-width: 600px) {
      .textInfo {
         font-size: 20px;
         padding: 35px;
         text-align: center;
      }
   }
`
