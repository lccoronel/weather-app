import React from 'react'
import Lottie from 'lottie-react'

import loadingAnimation from 'assets/animations/loading.json'
import errorAnimation from 'assets/animations/thunder.json'
import { TextRegular } from 'components/atoms'
import { DayPeriod } from 'dtos'
import { isMorning } from 'helpers'
import { Container, ContainerAnimation } from './styles'

export interface AlternativeScreenProps {
   screenType: 'error' | 'loading'
   dayPeriod: DayPeriod
}

export const AlternativeScreen: React.FC<AlternativeScreenProps> = ({ screenType, dayPeriod }) => {
   const animationType = screenType === 'error' ? errorAnimation : loadingAnimation
   const message = screenType === 'error' ? 'Something wrong' : 'Loading...'

   return (
      <Container isMorning={isMorning(dayPeriod)}>
         <ContainerAnimation>
            <Lottie animationData={animationType} />
         </ContainerAnimation>
         <TextRegular>{message}</TextRegular>
      </Container>
   )
}
