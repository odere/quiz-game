import React, { useEffect, useState } from 'react'

import { StyledTimer, StyledTimerContainer } from './timer.styled'
import { TimerProps } from './timer.types'

const Timer: React.FC<TimerProps> = props => {
	const { remaining, timer } = props

	const [isInfo, setIsInfo] = useState(false)
	const [isWarning, setIsWarning] = useState(false)
	const [isFinished, setIsFinished] = useState(false)

	useEffect(() => {
		switch (true) {
			case remaining <= timer * 0.3: {
				setIsInfo(false)
				setIsWarning(true)
				setIsFinished(false)
				break
			}
			case remaining <= timer * 0.75: {
				setIsInfo(true)
				setIsWarning(false)
				setIsFinished(false)
				break
			}
			case remaining === 0: {
				setIsInfo(false)
				setIsWarning(false)
				setIsFinished(true)
				break
			}
			default: {
				setIsInfo(false)
				setIsWarning(false)
				setIsFinished(false)
			}
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
