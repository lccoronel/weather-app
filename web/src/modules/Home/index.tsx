import React, { useCallback, useEffect, useState } from 'react'

import { TemperatureType } from 'dtos'
import { useWeather, useGeolocation } from 'hooks'
import { WeatherResponse } from 'hooks/weather/types'
import { isMetricType } from 'helpers'
import { Loading } from 'components/molecules'
import { HomeTemplate } from './HomeTemplate'

export const Home: React.FC = () => {
   const { getWeather, metric, imperial } = useWeather()
   const { location } = useGeolocation()

   const [weather, setWeather] = useState<WeatherResponse>()
   const [temperatureType, setTemperatureType] = useState<TemperatureType>(TemperatureType.metric)

   const handleGetWeather = useCallback(async () => {
      if (location) {
         setWeather(undefined)
         const { longitude, latitude } = location

         await getWeather({ longitude, latitude }).catch(() => console.log('error'))
      }
   }, [getWeather, location])

   useEffect(() => {
      handleGetWeather()
   }, [handleGetWeather])

   useEffect(() => {
      if (metric) setWeather(metric)
   }, [metric])

   function selectTemperatureType(type: TemperatureType) {
      setTemperatureType(type)
      setWeather(isMetricType(type) ? metric : imperial)
   }

   if (!weather) {
      return <Loading />
   }

   return (
      <HomeTemplate
         timezone={weather.timezone}
         weather={weather.weather.weatherState}
         temp={weather.weather.temp}
         tempMax={weather.weather.tempMax}
         tempMin={weather.weather.tempMin}
         weeklyWeather={weather.weeklyWeather}
         temperatureType={temperatureType}
         selectTemperatureType={selectTemperatureType}
         handleRefresh={handleGetWeather}
      />
   )
}
