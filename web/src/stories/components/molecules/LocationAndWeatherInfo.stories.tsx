import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { LocationAndWeatherInfo } from 'components/molecules'
import { SkyTypes } from 'dtos'

export default {
   title: 'Molecules/LocationAndWeatherInfo',
   component: LocationAndWeatherInfo,
   parameters: {
      layout: 'fullscreen',
   },
   args: {
      timezone: 'America, Sao Paulo',
      weather: SkyTypes.Clear,
   },
} as ComponentMeta<typeof LocationAndWeatherInfo>

const Template: ComponentStory<typeof LocationAndWeatherInfo> = args => <LocationAndWeatherInfo {...args} />

export const LocationAndWeatherInfoProps = Template.bind({})
