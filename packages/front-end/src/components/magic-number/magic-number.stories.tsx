import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import MagicNumber from './magic-number.view'

const Template: ComponentStory<typeof MagicNumber> = (args: any) => (
	<MagicNumber {...args} />
)

export const Default = Template.bind({})

Default.args = {
	value: 100,
}

export default {
	title: 'Components/MagicNumber',
	component: MagicNumber,
} as ComponentMeta<typeof MagicNumber>
