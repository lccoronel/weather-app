import React from 'react'

import { SkyTypes } from 'dtos/SkyTypesDTO'
import { Container } from './styles'

export interface LocationAndWeatherInfoProps {
   timezone: string
   weather: SkyTypes
}

export const LocationAndWeatherInfo = React.memo(({ timezone, weather }: LocationAndWeatherInfoProps) => {
   return (
      <Container>
         <p className="textInfo">
            Right now in <span>{timezone}</span>, it`s {weather}
         </p>
      </Container>
   )
})
