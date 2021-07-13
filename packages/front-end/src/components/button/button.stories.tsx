import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Button from './button.view'
import { ButtonSize } from './button.types'

const Template: ComponentStory<typeof Button> = (args: any) => (
	<Button {...args} />
)

export const Default = Template.bind({})

Default.args = {
	label: 'Button',
}

export const Primary = Template.bind({})

Primary.args = {
	label: 'Button',
	primary: true,
	isDisable: false,
}

export const Secondary = Template.bind({})

Secondary.args = {
	label: 'Button',
	primary: false,
	isDisable: false,
}

export const Small = Template.bind({})

Small.args = {
	label: 'Button',
	size: ButtonSize.small,
	isDisable: false,
}

export const Large = Template.bind({})

Large.args = {
	label: 'Button',
	size: ButtonSize.large,
	isDisable: false,
}

export const Disable = Template.bind({})

Disable.args = {
	label: 'Button',
	size: ButtonSize.small,
	isDisable: true,
}

export default {
	title: 'Components/Button',
	component: Button,
	argTypes: {
		size: {
			options: [ButtonSize.small, ButtonSize.large],
			control: { type: 'radio' },
		},
	},
} as ComponentMeta<typeof Button>
