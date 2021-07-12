import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Score from './score.view'
import STATISTICS_MOCK from './__mock__/statistics.mock'

const Template: ComponentStory<typeof Score> = (args: any) => (
	<Score {...args} />
)

export const Default = Template.bind({})

Default.args = {
	...STATISTICS_MOCK,
	title: 'Score',
}

export default {
	title: 'Components/Score',
	component: Score,
} as ComponentMeta<typeof Score>
