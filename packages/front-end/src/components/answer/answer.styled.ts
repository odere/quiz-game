import styled from 'styled-components'

import { AnswerStyledProps } from './answer.types'

export const StyledAnswer = styled.div`
	background: ${(props: AnswerStyledProps) => props.color};
	box-sizing: border-box;
	filter: ${(props: AnswerStyledProps) =>
		props.isDisabled
			? 'grayscale(75%)'
			: props.isSelected
				? 'saturate(200%)'
				:'none'
	};
	font-size: 1.5em;
	padding: 1em;
	transition: 200ms;
	user-select: ${(props: AnswerStyledProps) => props.isDisabled ? 'none' : 'inherit'};
`
