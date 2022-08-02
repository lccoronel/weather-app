import { DayPeriod } from 'dtos'
import { convertTimeStampToDate } from 'helpers'

/**
 * Helper function to get day period
 *
 * Call example: `getDayPeriod(timestamp)`
 *
 * @param {number} timestamp
 * @returns {string} Return a converted day period
 */
export function getDayPeriod(timestamp: number): DayPeriod {
   const convertedDate = convertTimeStampToDate(timestamp)
   const formattedDate = convertedDate.toLocaleString('en-us', { hour: 'numeric' })
   const [, dayPeriod] = formattedDate.split(' ')

   return dayPeriod as DayPeriod
}
