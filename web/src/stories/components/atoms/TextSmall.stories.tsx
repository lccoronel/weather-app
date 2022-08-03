import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { TextSmall } from 'components/atoms'

export default {
   title: 'Atoms/TextSmall',
   component: TextSmall,
   parameters: {
      // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
      layout: 'fullscreen',
   },
   args: {
      children: 'Small Text',
   },
} as ComponentMeta<typeof TextSmall>

const Template: ComponentStory<typeof TextSmall> = args => <TextSmall {...args} />

export const TextSmallProps = Template.bind({})
