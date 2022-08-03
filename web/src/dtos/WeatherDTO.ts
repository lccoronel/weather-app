import { DayPeriod, SkyTypes, WeeklyWeather } from 'dtos'

export interface Weather {
   timezone: string
   temperature: {
      weatherState: SkyTypes
      temp: number
      iconId: string
      tempMax: number
      tempMin: number
   }
   weeklyWeather: WeeklyWeather[]
   dayPeriod: {
      period: DayPeriod
      hour: number
   }
   sunset: {
      period: DayPeriod
      hour: number
   }
   sunrise: {
      period: DayPeriod
      hour: number
   }
}
