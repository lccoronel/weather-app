import { DailyWeather, SkyTypes } from 'dtos'
import { formatTimezone } from 'helpers/formatTimezone'
import { WeatherResponse } from 'hooks/weather/types'
import { FormatWeatherResponseProps } from './types'

/**
 * Helper function to format weather API response to use in useWeather hook
 *
 * Call example: `formatWeatherResponse({ daily, current, timezone })`
 *
 * @param {FormatWeatherResponseProps} object - `daily` object, `current` object and `timezone` string
 * @returns {WeatherResponse} Return a formatted object with timezone, weather and weeklyTemp
 */
export function formatWeatherResponse({ daily, current, timezone }: FormatWeatherResponseProps): WeatherResponse {
   const weeklyWeather = daily
      .filter((_: DailyWeather, index: number) => index !== 0)
      .map((day: DailyWeather) => {
         const formattedDate = new Date(day.dt * 1000)
         const weekDayInFull = formattedDate.toLocaleString('en-us', { weekday: 'long' })

         return {
            iconId: day.weather[0].icon,
            description: day.weather[0].description,
            temp: Math.round(day.temp.day),
            tempMax: Math.round(day.temp.max),
            tempMin: Math.round(day.temp.min),
            date: weekDayInFull,
         }
      })

   return {
      timezone: formatTimezone(timezone),
      weather: {
         iconId: current.weather[0].icon,
         temp: Math.round(current.temp),
         weatherState: current.weather[0].main as SkyTypes,
         tempMax: Math.round(daily[0].temp.max),
         tempMin: Math.round(daily[0].temp.min),
      },
      weeklyWeather,
   }
}