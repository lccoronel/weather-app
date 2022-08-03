import { DailyWeather } from 'dtos'

export interface FormatWeatherResponseProps {
   current: {
      dt: number
      sunset: number
      sunrise: number
      temp: number
      weather: {
         icon: string
         main: string
      }[]
   }
   timezone: string
   daily: DailyWeather[]
}
