import React, { createContext, ReactNode, useCallback, useEffect, useState } from 'react'

import { GeolocationContextProps, Location } from './types'

interface GeolocationProviderProps {
   children: ReactNode
}

export const GeolocationContext = createContext({} as GeolocationContextProps)

export const GeolocationProvider: React.FC<GeolocationProviderProps> = ({ children }) => {
   const [location, setLocation] = useState<Location>()

   const getGeolocation = useCallback(() => {
      navigator.geolocation.getCurrentPosition(position => {
         const { longitude, latitude } = position.coords

         setLocation({ longitude, latitude })
      })
   }, [])

   useEffect(() => {
      getGeolocation()
   }, [getGeolocation])

   return <GeolocationContext.Provider value={{ getGeolocation, location }}>{children}</GeolocationContext.Provider>
}
