import styled, { keyframes } from 'styled-components'

import { TimerStyledProps } from './timer.types'
import {
	primary,
	primary50,
	red,
	red50,
	yellow,
	yellow50,
} from '../../constants/colors'

const breatheAnimation = keyframes`
	0% { transform: translate(-50%, -50%) scale(100%); }
	15% { transform: translate(-50%, -50%) scale(120%); }
	30% { transform: translate(-50%, -50%) scale(100%); }
	50% { transform: translate(-50%, -50%) scale(120%); }
	65% { transform: translate(-50%, -50%) scale(100%); }
	80% { transform: translate(-50%, -50%) scale(120%); }
	100% { transform: translate(-50%, -50%) scale(100%); }
`

export const StyledTimer = styled.div`

	animation-duration: ${(props: TimerStyledProps) => 
		(props.isInfo || props.isWarning) && !props.isFinished
			? '2s'
			: '0s'
	};
	/* animation-duration: 2s; */
	animation-iteration-count: infinite;
	animation-name: ${breatheAnimation};
	background: ${(props: TimerStyledProps) => 
		props.isInfo
			? yellow50
			: props.isWarning || props.isFinished
				? red50
				: primary50
	};
	border-radius: 50%;
	border: .1em solid ${(props: TimerStyledProps) => 
		props.isInfo
			? yellow
			: props.isWarning || props.isFinished
				? red
				: primary
	};;
	color: white;
	display: inline-block;
	font-size: 2em;
	height: 75%;
	left: 50%;
	line-height: 2.2em;
	position: absolute;
	text-align: center;
	top: 50%;
	transform: translate(-50%, -50%);
	transition: 200ms;
	width: 75%;
`

export const StyledTimerContainer = styled.div`
	position: relative;
	width: 6em;
	height: 6em;
`
