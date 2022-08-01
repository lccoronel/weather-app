import React, { createContext, ReactNode, useCallback, useState } from 'react'
import axios from 'axios'

import { api } from 'services/api'
import { TemperatureType } from 'dtos'
import { formatWeatherResponse } from 'helpers/formatWeatherResponse'
import { GetWeatherProps, WeatherResponse, WeatherContextProps } from './types'

interface WeatherProviderProps {
   children: ReactNode
}

export const WeatherContext = createContext({} as WeatherContextProps)

export const WeatherProvider: React.FC<WeatherProviderProps> = ({ children }) => {
   const [metric, setMetric] = useState<WeatherResponse>()
   const [imperial, setImperial] = useState<WeatherResponse>()

   const getWeather = useCallback(async ({ latitude, longitude }: GetWeatherProps) => {
      const appId = '4f0302c8e731a3a878e7033adf44457b'

      try {
         const [metricResponse, imperialResponse] = await axios.all([
            api.get(`onecall?lat=${latitude}&lon=${longitude}&appid=${appId}&units=${TemperatureType.metric}`),
            api.get(`onecall?lat=${latitude}&lon=${longitude}&appid=${appId}&units=${TemperatureType.imperial}`),
         ])

         const metricData = formatWeatherResponse({
            current: metricResponse.data.current,
            daily: metricResponse.data.daily,
            timezone: metricResponse.data.timezone,
         })

         setMetric(metricData)

         const imperialData = formatWeatherResponse({
            current: imperialResponse.data.current,
            daily: imperialResponse.data.daily,
            timezone: imperialResponse.data.timezone,
         })

         setImperial(imperialData)
      } catch (error) {
         throw new Error(String(error))
      }
   }, [])

   return <WeatherContext.Provider value={{ getWeather, metric, imperial }}>{children}</WeatherContext.Provider>
}
