/**
 * Helper function to convert timestamp to Date type
 *
 * Call example: `convertTimeStampToDate(timestamp)`
 *
 * @param {number} timestamp
 * @returns {Date} Return a converted date
 */

export function convertTimeStampToDate(timestamp: number): Date {
   return new Date(timestamp * 1000)
}
