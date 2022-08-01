import { SkyTypes, WeeklyWeather } from 'dtos'
import { Location } from 'hooks/geolocation/types'

export type WeatherContextProps = {
   /**
    * A function to get weather information in "OpenWeather API",
    * this function format the both Units of measurement
    * @see {@link https://openweathermap.org/api/one-call-3#data} for more about Units of measurement
    *
    * Call example: `await getWeather({ longitude: 0.00, latitude: -0.00 })`
    *
    * @param {Number} longitude - Current longitude
    * @param {Number} latitude - Current latitude
    *
    * @return {void} Return the promise void
    */
   getWeather(data: GetWeatherProps): Promise<void>

   /**
    * @type {WeatherResponse}
    * An object with metric weather content, this object contains `timezone`, `weather` and `weeklyWeather`
    */
   metric: WeatherResponse | undefined

   /**
    * @type {WeatherResponse}
    * An object with imperial weather content, this object contains `timezone`, `weather` and `weeklyWeather`
    */
   imperial: WeatherResponse | undefined
}

export type GetWeatherProps = Location

export interface WeatherResponse {
   timezone: string
   weather: {
      weatherState: SkyTypes
      temp: number
      iconId: string
      tempMax: number
      tempMin: number
   }
   weeklyWeather: WeeklyWeather[]
}
