import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { ChooseTemperatureType } from 'components/molecules'
import { TemperatureType } from 'dtos'

export default {
   title: 'Molecules/ChooseTemperatureType',
   component: ChooseTemperatureType,
   parameters: {
      layout: 'fullscreen',
   },
   args: {
      temperatureType: TemperatureType.metric,
      selectTemperatureType: () => TemperatureType.metric,
   },
} as ComponentMeta<typeof ChooseTemperatureType>

const Template: ComponentStory<typeof ChooseTemperatureType> = args => <ChooseTemperatureType {...args} />

export const ChooseTemperatureTypeProps = Template.bind({})
