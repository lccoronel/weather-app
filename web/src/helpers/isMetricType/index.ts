import { TemperatureType } from 'dtos'

export function isMetricType(temperatureType: TemperatureType) {
   return temperatureType === TemperatureType.metric
}
