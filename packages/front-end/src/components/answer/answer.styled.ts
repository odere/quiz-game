import styled from 'styled-components'

import { AnswerStyledProps } from './answer.types'

export const StyledAnswer = styled.div`
	background: ${(props: AnswerStyledProps) => props.color};
	box-sizing: content-box;
	pointer-events: ${(props: AnswerStyledProps) =>
		props.isDisabled ? 'none' : 'inherit'};
	filter: ${(props: AnswerStyledProps) =>
		props.isDisabled
			? 'grayscale(150%)'
			: props.isSelected
			? 'saturate(500%)'
			: 'none'};
	font-size: 1.25rem;
	padding: 0.75rem;
	transition: 200ms;
	text-align: center;
	display: flex;
	align-items: center;
	justify-content: center;
	transition: 200ms;

	&:hover {
		transform: scale(110%);
	}
`
