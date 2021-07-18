import styled from 'styled-components'
import { AnswerListStyled } from '../answer-list/answer-list.styled'

export const StyledQuestion = styled.div`
	min-height: 400px;
	display: flex;
	flex-grow: 1;
	flex-direction: column;
	justify-content: flex-start;
`

export const StyledTimeWrapper = styled.div`
	position: fixed;
	top: 8%;
	left: 5%;
`

export const StyledTaskWrapper = styled.div`
	align-items: flex-end;
	display: flex;
	flex-direction: column;
	flex-grow: 1;
	font-size: 2em;
	justify-content: flex-start;
	min-height: 400px;
	padding: 1em;

	& ${AnswerListStyled} > * {
	}

	& p {
		text-align: left;
		width: calc(100% - 7em);
	}
`
