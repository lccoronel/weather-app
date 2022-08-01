import styled from 'styled-components'

export const Container = styled.header`
   height: 10%;
   padding: 15px;

   a {
      background-color: var(--background-button);
      padding: 5px 10px;
      border-radius: 7px;
      font-size: 15px;
      text-decoration: none;
   }

   @media screen and (max-width: 720px) {
      & {
         height: 7%;
      }
   }
`
