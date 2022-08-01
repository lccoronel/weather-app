import React, { ReactNode } from 'react'

import { GeolocationProvider } from './geolocation/context'
import { WeatherProvider } from './weather/context'

export * from './geolocation'
export * from './weather'

interface AppProviderProps {
   children: ReactNode
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
   return (
      <WeatherProvider>
         <GeolocationProvider>{children}</GeolocationProvider>
      </WeatherProvider>
   )
}
