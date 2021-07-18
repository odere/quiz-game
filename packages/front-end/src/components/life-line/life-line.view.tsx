import React from 'react'

import Life from '../life'
import { LifeLineProps } from './life-line.types'
import { StyledLifeLine } from './life-line.styled'

const LifeLine: React.FC<LifeLineProps> = props => {
	const { fiftyFifty, plusTenSec, onFiftyFifty, onPlusTenSeconds } = props

	return (
		<StyledLifeLine>
			<Life hasLife={fiftyFifty} onClick={onFiftyFifty} label='50/50' />
			<Life hasLife={plusTenSec} onClick={onPlusTenSeconds} label='+10s' />
		</StyledLifeLine>
	)
}

export default LifeLine
