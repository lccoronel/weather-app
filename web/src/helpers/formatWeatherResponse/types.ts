import { DailyWeather } from 'dtos'

export interface FormatWeatherResponseProps {
   current: {
      dt: number
      temp: number
      weather: {
         icon: string
         main: string
      }[]
   }
   timezone: string
   daily: DailyWeather[]
}
