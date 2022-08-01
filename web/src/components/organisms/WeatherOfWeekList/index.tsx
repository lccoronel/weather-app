import React from 'react'

import { WeatherOfWeek } from 'components/molecules'
import { TemperatureType, WeeklyWeather } from 'dtos'
import { Container } from './styles'

export interface WeatherOfWeekListProps {
   weeklyWeather: WeeklyWeather[]
   temperatureType: TemperatureType
}

export const WeatherOfWeekList: React.FC<WeatherOfWeekListProps> = ({ weeklyWeather, temperatureType }) => {
   return (
      <Container>
         {weeklyWeather.map(dailyWeather => (
            <WeatherOfWeek key={dailyWeather.date} dailyTemp={dailyWeather} temperatureType={temperatureType} />
         ))}
      </Container>
   )
}
