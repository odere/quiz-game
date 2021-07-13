import styled from 'styled-components'

import { AnswerListStyedProps } from './answer-list.types'

export const AnswerListStyled = styled.div`
	display: flex;
	flex-wrap: wrap;
    flex-grow: 1;
	pointer-events: ${(props: AnswerListStyedProps) =>
		props.isDisabled ? 'none' : 'inherit'};

	& > * {
		flex-basis: calc(calc(1000px - 100%) * 99999);
		flex-grow: 1;
	}
`
