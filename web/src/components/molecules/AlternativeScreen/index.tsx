import React from 'react'
import Lottie from 'lottie-react'

import loadingAnimation from 'assets/animations/loading.json'
import errorAnimation from 'assets/animations/thunder.json'
import { TextRegular } from 'components/atoms'
import { Container, ContainerAnimation } from './styles'

export interface AlternativeScreenProps {
   screenType: 'error' | 'loading'
   isMorning: boolean
}

export const AlternativeScreen: React.FC<AlternativeScreenProps> = ({ screenType, isMorning }) => {
   const animationType = screenType === 'error' ? errorAnimation : loadingAnimation
   const message = screenType === 'error' ? 'Something wrong' : 'Loading...'

   return (
      <Container isMorning={isMorning}>
         <ContainerAnimation>
            <Lottie animationData={animationType} />
         </ContainerAnimation>
         <TextRegular>{message}</TextRegular>
      </Container>
   )
}
