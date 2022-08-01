import React from 'react'

import {
   WeatherOfWeekList,
   WeatherOfWeekListProps,
   CurrentTemp,
   CurrentTempProps,
   LocationAndWeatherInfo,
   LocationAndWeatherInfoProps,
   ChooseTemperatureType,
   ChooseTemperatureTypeProps,
   Header,
   HeaderProps,
} from 'components/organisms'
import { Container } from './styles'

interface HomeTemplateProps
   extends LocationAndWeatherInfoProps,
      CurrentTempProps,
      WeatherOfWeekListProps,
      HeaderProps,
      ChooseTemperatureTypeProps {}

export const HomeTemplate: React.FC<HomeTemplateProps> = ({
   timezone,
   weather,
   temp,
   tempMax,
   tempMin,
   weeklyWeather,
   temperatureType,
   handleRefresh,
   selectTemperatureType,
}) => {
   return (
      <Container>
         <Header handleRefresh={handleRefresh} />
         <LocationAndWeatherInfo timezone={timezone} weather={weather} />
         <CurrentTemp
            temp={temp}
            tempMax={tempMax}
            tempMin={tempMin}
            weather={weather}
            temperatureType={temperatureType}
         />
         <WeatherOfWeekList weeklyWeather={weeklyWeather} temperatureType={temperatureType} />
         <ChooseTemperatureType selectTemperatureType={selectTemperatureType} temperatureType={temperatureType} />
      </Container>
   )
}
