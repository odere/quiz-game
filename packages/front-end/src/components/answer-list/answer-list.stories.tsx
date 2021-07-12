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
		},
		{
			id: '1',
			text: 'Paris',
		},
		{
			id: '2',
			text: 'Berlin',
		},
		{
			id: '3',
			text: 'Tbilisi',
		},
	],
}

export default {
	title: 'Components/AnswerList',
	component: AnswerList,
} as ComponentMeta<typeof AnswerList>
