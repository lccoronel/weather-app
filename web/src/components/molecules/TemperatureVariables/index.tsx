import React from 'react'

import upArrow from 'assets/temperatureVariables/up-arrow.png'
import downArrow from 'assets/temperatureVariables/down-arrow.png'
import { Icon, TextRegular } from 'components/atoms'
import { TemperatureType } from 'dtos'
import { isMetricType } from 'helpers'
import { Container } from './styles'

interface TemperatureVariablesProps {
   tempMax: number
   tempMin: number
   temperatureType: TemperatureType
}

export const TemperatureVariables: React.FC<TemperatureVariablesProps> = ({ tempMax, tempMin, temperatureType }) => {
   const unit = isMetricType(temperatureType) ? 'ºC' : 'ºF'

   return (
      <Container>
         <Icon source={upArrow} alt="max temperature" size="small" marginRight={5} />
         <TextRegular>
            {tempMax}
            {unit} /{tempMin}
            {unit}
         </TextRegular>
         <Icon source={downArrow} alt="min temperature" size="small" marginLeft={5} />
      </Container>
   )
}
