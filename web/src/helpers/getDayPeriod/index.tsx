import { DayPeriod } from 'dtos'
import { convertTimeStampToDate } from 'helpers'

interface GetDayPeriodResponse {
   dayPeriod: DayPeriod
   hour: number
}

/**
 * Helper function to get day period and a current  hour
 *
 * Call example: `getDayPeriod(timestamp)`
 *
 * @param {number} timestamp
 * @returns {GetDayPeriodResponse} Return a converted day period and a current hour
 */
export function getDayPeriod(timestamp: number): GetDayPeriodResponse {
   const convertedDate = convertTimeStampToDate(timestamp)
   const formattedDate = convertedDate.toLocaleString('en-us', { hour: 'numeric' })
   const [hour, dayPeriod] = formattedDate.split(' ')

   return {
      dayPeriod: dayPeriod as DayPeriod,
      hour: Number(hour),
   }
}
