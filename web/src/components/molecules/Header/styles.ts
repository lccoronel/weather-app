import styled from 'styled-components'

export const Container = styled.header`
   height: 10%;
   padding: 0 15px;
   display: flex;
   align-items: center;
   justify-content: space-between;

   a {
      background-color: var(--background-button);
      padding: 5px 10px;
      border-radius: 7px;
      font-size: 15px;
      text-decoration: none;
   }

   button {
      border: none;
      background-color: var(--background-button);
      font-size: 15px;
      padding: 5px 10px;
      border-radius: 7px;
   }

   @media screen and (max-width: 720px) {
      & {
         height: 7%;
      }
   }
`
