export interface DailyWeather {
   weather: {
      icon: string
      description: string
   }[]
   temp: {
      day: number
      max: number
      min: number
   }
   dt: number
}
