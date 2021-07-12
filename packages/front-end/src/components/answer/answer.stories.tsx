/* eslint-disable no-console */
import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Answer from './answer.view'

const Template: ComponentStory<typeof Answer> = (args: any) => (
	<Answer {...args} />
)

export const Default = Template.bind({})

Default.args = {
	color: '#45a2e5',
	isDisabled: false,
	onChange: () => console.log('Debounced Click'),
	text: 'Answer Answer Answer Answer Answer Answer Answer Answer Answer',
}

export const Disabled = Template.bind({})

Disabled.args = {
	color: '#45a2e5',
	isDisabled: true,
	onChange: () => console.log('Debounced Click'),
	text: 'Answer Answer Answer Answer Answer Answer Answer Answer Answer',
}

export default {
	title: 'Components/Answer',
	component: Answer,
} as ComponentMeta<typeof Answer>
