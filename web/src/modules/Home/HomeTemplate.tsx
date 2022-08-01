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
} from 'components/organisms'
import { Container } from './styles'

interface HomeTemplateProps
   extends LocationAndWeatherInfoProps,
      CurrentTempProps,
      WeatherOfWeekListProps,
      ChooseTemperatureTypeProps {}

export const HomeTemplate: React.FC<HomeTemplateProps> = ({
   timezone,
   weather,
   temp,
   tempMax,
   tempMin,
   weeklyWeather,
   temperatureType,
   selectTemperatureType,
}) => {
   return (
      <Container>
         <Header />
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
