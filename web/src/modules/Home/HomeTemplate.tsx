import React from 'react'

import {
   ChooseTemperatureType,
   ChooseTemperatureTypeProps,
   Header,
   HeaderProps,
   LocationAndWeatherInfo,
   LocationAndWeatherInfoProps,
} from 'components/molecules'
import { WeatherOfWeekList, WeatherOfWeekListProps, CurrentTemp, CurrentTempProps } from 'components/organisms'
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
   isMorning,
   handleRefresh,
   selectTemperatureType,
}) => {
   return (
      <Container isMorning={isMorning}>
         <Header handleRefresh={handleRefresh} />
         <LocationAndWeatherInfo timezone={timezone} weather={weather} />
         <CurrentTemp
            temp={temp}
            tempMax={tempMax}
            tempMin={tempMin}
            weather={weather}
            temperatureType={temperatureType}
            isMorning={isMorning}
         />
         <WeatherOfWeekList weeklyWeather={weeklyWeather} temperatureType={temperatureType} />
         <ChooseTemperatureType selectTemperatureType={selectTemperatureType} temperatureType={temperatureType} />
      </Container>
   )
}
