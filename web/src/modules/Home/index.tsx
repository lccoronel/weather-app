import React, { useCallback, useEffect, useState } from 'react'

import { DayPeriod, TemperatureType, Weather } from 'dtos'
import { useWeather, useGeolocation } from 'hooks'
import { isMetricType, isMorning } from 'helpers'
import { AlternativeScreen } from 'components/molecules'
import { HomeTemplate } from './HomeTemplate'

export const Home: React.FC = () => {
   const { getWeather, metric, imperial } = useWeather()
   const { location } = useGeolocation()

   const [weather, setWeather] = useState<Weather>()
   const [hasError, setHasError] = useState(false)
   const [temperatureType, setTemperatureType] = useState<TemperatureType>(TemperatureType.metric)

   const handleGetWeather = useCallback(async () => {
      if (location) {
         setWeather(undefined)
         setHasError(false)
         const { longitude, latitude } = location

         await getWeather({ longitude, latitude }).catch(() => setHasError(true))
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
      return <AlternativeScreen screenType="loading" dayPeriod={DayPeriod.AM} />
   }

   if (hasError) {
      return <AlternativeScreen screenType="error" dayPeriod={weather.dayPeriod || DayPeriod.AM} />
   }

   return (
      <HomeTemplate
         dayPeriod={weather.dayPeriod}
         timezone={weather.timezone}
         weather={weather.temperature.weatherState}
         temp={weather.temperature.temp}
         tempMax={weather.temperature.tempMax}
         tempMin={weather.temperature.tempMin}
         weeklyWeather={weather.weeklyWeather}
         temperatureType={temperatureType}
         selectTemperatureType={selectTemperatureType}
         handleRefresh={handleGetWeather}
      />
   )
}
