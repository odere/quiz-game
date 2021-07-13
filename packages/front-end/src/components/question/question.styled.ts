import styled from 'styled-components'

export const StyledQuestion = styled.div`
	min-height: 400px;
	display: flex;
	flex-grow: 1;
	flex-direction: column;
	justify-content: space-between;
`
export const StyledQuestionContent = styled.div`
	display: flex;
	min-height: 200px;
    flex-grow: 2;
	justify-content: space-between;
`

export const StyledTimeWrapper = styled.div`
	position: fixed;
	top: 10%;
	left: 5%;
`

export const StyledTaskWrapper = styled.div`
	flex-grow: 2;
	padding: 1em;
	font-size: 2em;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;

	& > * {
		flex-basis: calc(calc(800px - 100%) * 99999);
		flex-grow: 1;
	}
`
