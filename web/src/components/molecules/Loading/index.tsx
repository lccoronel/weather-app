import React from 'react'
import Lottie from 'lottie-react'

import loadingAnimation from 'assets/animations/loading.json'
import { Container, ContainerAnimation } from './styles'

export const Loading: React.FC = () => {
   return (
      <Container>
         <ContainerAnimation>
            <Lottie animationData={loadingAnimation} />
         </ContainerAnimation>
         <h3>loading...</h3>
      </Container>
   )
}
