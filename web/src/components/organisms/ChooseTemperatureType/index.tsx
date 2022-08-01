import React from 'react'

import { TextSmall } from 'components/atoms'
import { TemperatureType } from 'dtos/TemperatureTypeDTO'
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
               <TextSmall fontWeight={temperatureType === TemperatureType.metric ? 'bold' : 'regular'}>ºC</TextSmall>
            </button>

            <TextSmall fontWeight="bold">|</TextSmall>

            <button type="button" onClick={() => selectTemperatureType(TemperatureType.imperial)}>
               <TextSmall fontWeight={temperatureType === TemperatureType.imperial ? 'bold' : 'regular'}>ºF</TextSmall>
            </button>
         </Container>
      )
   },
)
