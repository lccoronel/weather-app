import React from 'react'

import { Icon, TextRegular, TextSmall } from 'components/atoms'
import { useTheme } from 'styled-components'
import { weatherInfo } from './data'
import { Container } from './styles'

interface MoreWeatherInfoProps {
   infoType: 'wind' | 'rain' | 'humidity'
   value: number
}

export const MoreWeatherInfo: React.FC<MoreWeatherInfoProps> = ({ infoType, value }) => {
   const { colors } = useTheme()

   return (
      <Container>
         <Icon source={weatherInfo[infoType].icon} alt={infoType} size="small" marginRight={15} />
         <TextRegular color={colors.fontColorGray}>{value}</TextRegular>
         <TextSmall color={colors.fontColorGray}>{weatherInfo[infoType].label}</TextSmall>
      </Container>
   )
}
