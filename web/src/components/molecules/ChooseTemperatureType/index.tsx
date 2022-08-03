import React from 'react'

import { TextSmall } from 'components/atoms'
import { TemperatureType } from 'dtos/TemperatureTypeDTO'
import { isMetricType } from 'helpers'
import { Container } from './styles'

export interface ChooseTemperatureTypeProps {
   selectTemperatureType(temperatureType: TemperatureType): void
   temperatureType: TemperatureType
}

export const ChooseTemperatureType = React.memo(
   ({ selectTemperatureType, temperatureType }: ChooseTemperatureTypeProps) => {
      return (
         <Container>
            <button type="button" onClick={() => selectTemperatureType(TemperatureType.metric)}>
               <TextSmall fontWeight={isMetricType(temperatureType) ? 'bold' : 'regular'}>ºC</TextSmall>
            </button>

            <TextSmall fontWeight="bold">|</TextSmall>

            <button type="button" onClick={() => selectTemperatureType(TemperatureType.imperial)}>
               <TextSmall fontWeight={!isMetricType(temperatureType) ? 'bold' : 'regular'}>ºF</TextSmall>
            </button>
         </Container>
      )
   },
)
