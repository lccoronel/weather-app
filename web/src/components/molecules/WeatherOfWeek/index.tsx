import React from 'react'
import { useTheme } from 'styled-components'

import { Icon, TextSmall } from 'components/atoms'
import { TemperatureType, WeeklyWeather } from 'dtos'
import { TemperatureVariables } from '../TemperatureVariables'
import { Container } from './styles'

export interface WeatherOfWeekProps {
   dailyTemp: WeeklyWeather
   temperatureType: TemperatureType
}

export const WeatherOfWeek: React.FC<WeatherOfWeekProps> = ({ dailyTemp, temperatureType }) => {
   const { colors } = useTheme()

   return (
      <Container>
         <Icon
            source={`http://openweathermap.org/img/wn/${dailyTemp.iconId}@2x.png`}
            alt={dailyTemp.description}
            size="larger"
         />
         <TemperatureVariables
            tempMax={dailyTemp.tempMax}
            tempMin={dailyTemp.tempMin}
            temperatureType={temperatureType}
         />
         <TextSmall color={colors.fontColorGray} fontWeight="bold">
            {dailyTemp.date}
         </TextSmall>
      </Container>
   )
}
