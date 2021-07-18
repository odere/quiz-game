import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Question from './question.view'
// import QUESTION_MOCK from './__mock__/question.mock'

const Template: ComponentStory<typeof Question> = (args: any) => (
	<Question {...args} />
)

export const Default = Template.bind({})

Default.args = {
	// question: QUESTION_MOCK,
}

export default {
	title: 'Components/Question',
	component: Question,
} as ComponentMeta<typeof Question>
