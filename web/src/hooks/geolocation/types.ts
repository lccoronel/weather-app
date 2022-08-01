export type Location = {
   longitude: number
   latitude: number
}

export type GeolocationContextProps = {
   /**
    * Helper function to get current geolocation
    *
    * Call example: `getGeolocation()`
    *
    * @return {void} return void
    */
   getGeolocation(): void

   /**
    * Helper state that contains current `longitude` and `latitude`
    */
   location: Location | undefined
}
