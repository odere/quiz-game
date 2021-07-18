import styled from 'styled-components'

import { primary50 } from '../../constants/colors.constants'

export const CloseScoreStyled = styled.div`
	position: absolute;
	top: 2em;
	right: 2em;
	cursor: pointer;
	transition: 200ms;
	border-radius: 50%;
	transform: scale(110%);

	&:hover {
		background: rgba(0, 0, 0, 0.5);
		box-shadow: 0 0 1em 0.5em rgba(0, 0, 0, 0.5);
	}
`

export const GridStyled = styled.div`
	display: flex;
	flex-flow: wrap;
	user-select: none;
`

export const HeaderRowStyled = styled.h2`
	font-weight: 400;
	font-size: 2em;
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
	flex-grow: 1;
	position: relative;
	background: ${primary50};
	border-radius: 0.5em;
	padding: 2em;
	color: white;
`
