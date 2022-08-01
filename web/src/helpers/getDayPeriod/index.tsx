import { convertTimeStampToDate } from 'helpers/convertTimestampToDate'

/**
 * Helper function to get day period
 *
 * Call example: `getDayPeriod(timestamp)`
 *
 * @param {number} timestamp
 * @returns {string} Return a converted day period
 */
export function getDayPeriod(timestamp: number): string {
   const convertedDate = convertTimeStampToDate(timestamp)
   const formattedDate = convertedDate.toLocaleString('en-us', { hour: 'numeric' })
   const [, dayPeriod] = formattedDate.split(' ')
   return dayPeriod
}
