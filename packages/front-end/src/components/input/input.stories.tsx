import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Input from './input.view'

const Template: ComponentStory<typeof Input> = (args: any) => (
	<Input {...args} />
)

export const Default = Template.bind({})

Default.args = {
	label: 'Player name',
}

export default {
	title: 'Components/Input',
	component: Input,
} as ComponentMeta<typeof Input>
