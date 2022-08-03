import { DayPeriod, Weather } from 'dtos'

interface IsDayProps {
   dayPeriod: Weather['dayPeriod']
   sunset: Weather['sunset']
   sunrise: Weather['sunrise']
}

/**
 * Helper function to valid day period it's morning
 *
 * Call example: `isMorning({ dayPeriod, sunset, sunrise })`
 *
 * @param {IsDayProps} object - `dayPeriod`, `sunset` and `sunrise`
 * @returns {boolean} Return a boolean when day period it's morning
 */
export function isMorning({ dayPeriod, sunset, sunrise }: IsDayProps): boolean {
   const isAMPeriod = dayPeriod.period === DayPeriod.AM

   if (isAMPeriod && dayPeriod.hour > sunset.hour && dayPeriod.hour > sunrise.hour) {
      return true
   }

   if (!isAMPeriod && dayPeriod.hour < sunset.hour && dayPeriod.hour < sunrise.hour) {
      return true
   }

   return false
}
