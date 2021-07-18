import styled from 'styled-components'

export const AnswerListStyled = styled.div`
	display: flex;
	flex-grow: 1;
	flex-wrap: wrap;

	& > * {
		flex-basis: calc(calc(1000px - 100%) * 99999);
		flex-grow: 1;
	}
`
