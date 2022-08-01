import { useContext } from 'react'

import { GeolocationContext } from './context'
import { GeolocationContextProps } from './types'

export function useGeolocation(): GeolocationContextProps {
   const context = useContext(GeolocationContext)

   if (!context) {
      throw new Error('useGeolocation must be used within an GeolocationProvider')
   }

   return context
}
