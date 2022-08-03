import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import umbrellaImg from 'assets/moreWeatherInfo/umbrella.png'
import { Icon } from 'components/atoms/Icon'

export default {
   title: 'Atoms/Icon',
   component: Icon,
   parameters: {
      layout: 'fullscreen',
   },
   args: {
      source: umbrellaImg,
      size: 'larger',
   },
} as ComponentMeta<typeof Icon>

const Template: ComponentStory<typeof Icon> = args => <Icon {...args} />

export const IconProps = Template.bind({})
