import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Header } from 'components/molecules'

export default {
   title: 'Molecules/Header',
   component: Header,
   parameters: {
      layout: 'fullscreen',
   },
   args: {},
} as ComponentMeta<typeof Header>

const Template: ComponentStory<typeof Header> = args => <Header {...args} />

export const HeaderProps = Template.bind({})
