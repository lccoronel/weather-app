import { DayPeriod } from 'dtos'

/**
 * Helper function to valid day period it's morning
 *
 * Call example: `isMorning(dayPeriod)`
 *
 * @param {DayPeriod} dayPeriod - `AM` or `PM`
 * @returns {boolean} Return a boolean when day period it's morning
 */
export function isMorning(dayPeriod: DayPeriod): boolean {
   return dayPeriod === DayPeriod.AM
}
