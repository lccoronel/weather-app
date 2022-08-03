import React, { useMemo } from 'react'
import Lottie from 'lottie-react'

import moonAnimation from 'assets/animations/moon.json'
import { MoreWeatherInfo, TemperatureVariables } from 'components/molecules'
import { SkyTypes, TemperatureType } from 'dtos'
import { isMetricType } from 'helpers'
import { skyTypes } from './data'
import { Container, ContainerDegrees, ContainerAnimation, ContainerMoreInfos, ContainerTemperature } from './styles'

export interface CurrentTempProps {
   temp: number
   tempMax: number
   tempMin: number
   weather: SkyTypes
   temperatureType: TemperatureType
   isMorning: boolean
}

export const CurrentTemp: React.FC<CurrentTempProps> = ({
   temp,
   tempMax,
   tempMin,
   weather,
   temperatureType,
   isMorning,
}) => {
   const unit = isMetricType(temperatureType) ? 'ºC' : 'ºF'

   const animationData = useMemo(() => {
      if (weather === SkyTypes.Clear) {
         return isMorning ? skyTypes.Clear : moonAnimation
      }

      return skyTypes[weather]
   }, [weather, isMorning])

   return (
      <Container>
         <ContainerAnimation>
            <Lottie animationData={animationData} loop />
         </ContainerAnimation>

         <ContainerDegrees>
            <ContainerTemperature>
               <p className="degrees">
                  {temp}
                  {unit}
               </p>
            </ContainerTemperature>

            <TemperatureVariables tempMax={tempMax} tempMin={tempMin} temperatureType={temperatureType} />
         </ContainerDegrees>

         <ContainerMoreInfos>
            <MoreWeatherInfo infoType="wind" value={20} />
            <MoreWeatherInfo infoType="rain" value={20} />
            <MoreWeatherInfo infoType="humidity" value={20} />
         </ContainerMoreInfos>
      </Container>
   )
}
