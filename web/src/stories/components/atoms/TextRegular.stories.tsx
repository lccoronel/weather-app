import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { TextRegular } from 'components/atoms'

export default {
   title: 'Atoms/TextRegular',
   component: TextRegular,
   parameters: {
      // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
      layout: 'fullscreen',
   },
   args: {
      children: 'Regular Text',
   },
} as ComponentMeta<typeof TextRegular>

const Template: ComponentStory<typeof TextRegular> = args => <TextRegular {...args} />

export const TextRegularProps = Template.bind({})
