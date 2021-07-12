import React, { useEffect, useState } from 'react'

import { StyledTimer, StyledTimerContainer } from './timer.styled'
import { TimerProps } from './timer.types'

const Timer: React.FC<TimerProps> = props => {
	const { remaining, timer } = props

	const [isInfo, setIsInfo] = useState(false)
	const [isWarning, setIsWarning] = useState(false)
	const [isFinished, setIsFinished] = useState(false)

	useEffect(() => {
		if (remaining <= timer * 0.3) {
			setIsInfo(true)
			setIsWarning(false)
			setIsFinished(false)
		}

		if (remaining <= timer * 0.1) {
			setIsInfo(false)
			setIsWarning(true)
			setIsFinished(false)
		}

		if (remaining === 0) {
			setIsInfo(false)
			setIsWarning(false)
			setIsFinished(true)
		}
	}, [remaining])

	return (
		<StyledTimerContainer>
			<StyledTimer isInfo={isInfo} isWarning={isWarning} isFinished={isFinished}>
				{remaining}
			</StyledTimer>
		</StyledTimerContainer>
	)
}

export default Timer
