/* eslint-disable no-console */
import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import AnswerList from './answer-list.view'

const Template: ComponentStory<typeof AnswerList> = (args: any) => (
	<AnswerList {...args} />
)

export const Default = Template.bind({})

Default.args = {
	answers: [
		{
			id: '0',
			text: 'Stockholm',
			isDisabled: false,
		},
		{
			id: '1',
			text: 'Paris',
			isDisabled: false,
		},
		{
			id: '2',
			text: 'Berlin',
			isDisabled: false,
		},
		{
			id: '3',
			text: 'Tbilisi',
			isDisabled: false,
		},
	],
	onChange() {
		console.log('onChange')
	},
}

export default {
	title: 'Components/AnswerList',
	component: AnswerList,
} as ComponentMeta<typeof AnswerList>
