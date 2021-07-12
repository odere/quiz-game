import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Timer from './timer.view'

const Template: ComponentStory<typeof Timer> = (args: any) => (
	<Timer {...args} />
)

export const Default = Template.bind({})

Default.args = {
	remaining: 15,
	timer: 15,
}

export const IsInforming = Template.bind({})

IsInforming.args = {
	remaining: Math.trunc(15 * 0.3),
	timer: 15,
}

export const IsWarning = Template.bind({})

IsWarning.args = {
	remaining: Math.trunc(15 * 0.1),
	timer: 15,
}

export const IsFinished = Template.bind({})

IsFinished.args = {
	remaining: 0,
	timer: 15,
}

export default {
	title: 'Components/Timer',
	component: Timer,
} as ComponentMeta<typeof Timer>
