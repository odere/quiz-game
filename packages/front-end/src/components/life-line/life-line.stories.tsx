/* eslint-disable no-console */
import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import LifeLine from './life-line.view'

const Template: ComponentStory<typeof LifeLine> = (args: any) => (
	<LifeLine {...args} />
)

export const Default = Template.bind({})

export const HalfLife = Template.bind({})

HalfLife.args = {
	fiftyFifty: false,
	plusTenSec: true,
	onFiftyFifty() { console.log('onFiftyFifty') },
	onPlusTenSeconds() { console.log('onFiftyFifty') },
}

export const NoLife = Template.bind({})

NoLife.args = {
	fiftyFifty: false,
	plusTenSec: false,
	onFiftyFifty() { console.log('onFiftyFifty') },
	onPlusTenSeconds() { console.log('onFiftyFifty') },
}

export default {
	title: 'Components/LifeLine',
	component: LifeLine,
} as ComponentMeta<typeof LifeLine>
