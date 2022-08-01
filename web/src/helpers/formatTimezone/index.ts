/**
 * Helper function to format timezones that contains region and city only
 *
 * @param {String} timezone - "region/city" example `America/Sao_Paulo`
 * @returns {String} Return a formatted timezone(city, region) like `Sao Paulo, America`
 */

export function formatTimezone(timezone: string): string {
   const replacedTimezone = timezone.replaceAll('_', ' ')
   const [region, city] = replacedTimezone.split('/')

   return `${city}, ${region}`
}
