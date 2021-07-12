import styled from 'styled-components'

import { primary50 } from '../../constants/colors'

export const CloseScoreStyled = styled.div`
	position: absolute;
	right: 1em;
	cursor: pointer;
	transition: 200ms;
	border-radius: 50%;

	&:hover {
		background: rgba(0, 0, 0, 0.25);
		box-shadow: 0 0 1em 0.5em rgba(0, 0, 0, 0.25);
	}
`

export const GridStyled = styled.div`
	display: flex;
	flex-flow: wrap;
`

export const HeaderRowStyled = styled.h2`
	text-align: center;
	margin-top: 0;
`

export const RowStyled = styled.section`
	align-items: center;
	display: flex;
	flex-basis: 200px;
	justify-content: space-between;
	padding-bottom: 1em;

	& > * {
		margin: 0;
		margin-right: 1em;
	}

	& > p {
		font-size: 2.5em;
	}
`

export const ScoreContainerStyled = styled.div`
	position: relative;
	background: ${primary50};
	border-radius: 0.5em;
	padding: 2em 5em;
	color: white;
`
