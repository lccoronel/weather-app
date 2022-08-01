import React from 'react'

import { Icon, TextRegular, TextSmall } from 'components/atoms'
import { weatherInfo } from './data'
import { Container } from './styles'

interface MoreWeatherInfoProps {
   infoType: 'wind' | 'rain' | 'humidity'
   value: number
}

export const MoreWeatherInfo: React.FC<MoreWeatherInfoProps> = ({ infoType, value }) => {
   return (
      <Container>
         <Icon source={weatherInfo[infoType].icon} alt={infoType} size="small" marginRight={15} />
         <TextRegular color="gray">{value}</TextRegular>
         <TextSmall color="gray">{weatherInfo[infoType].label}</TextSmall>
      </Container>
   )
}
