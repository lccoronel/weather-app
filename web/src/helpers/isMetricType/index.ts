import { TemperatureType } from 'dtos'

/**
 * Helper function to valid if temperature type is `Metric`
 *
 * Call example: `isMetric(temperatureType)`
 *
 * @param {TemperatureType} string - `metric` or `imperial`
 * @returns {boolean} Return a boolean when temperature type is `Metric` or not
 */
export function isMetricType(temperatureType: TemperatureType): boolean {
   return temperatureType === TemperatureType.metric
}
