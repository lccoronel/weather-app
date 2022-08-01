import { useContext } from 'react'

import { WeatherContext } from './context'
import { WeatherContextProps } from './types'

export function useWeather(): WeatherContextProps {
   const context = useContext(WeatherContext)

   if (!context) {
      throw new Error('useWeather must be used within an WeatherProvider')
   }

   return context
}
