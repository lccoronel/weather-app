import React from 'react'
import Lottie from 'lottie-react'

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
}

export const CurrentTemp: React.FC<CurrentTempProps> = ({ temp, tempMax, tempMin, weather, temperatureType }) => {
   const unit = isMetricType(temperatureType) ? 'ºC' : 'ºF'

   return (
      <Container>
         <ContainerAnimation>
            <Lottie animationData={skyTypes[weather]} loop />
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
