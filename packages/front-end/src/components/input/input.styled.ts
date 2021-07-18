import styled from 'styled-components'

import { primaryDark, white50 } from '../../constants/colors.constants'

export const StyledInput = styled.input`
	background: ${white50};
	border-radius: 0.15rem;
	border: none;
	color: ${primaryDark};
	font-size: 1.75rem;
	padding: 0.3rem 0.5rem;
	min-width: 300px;
	transition: 200ms;
	width: 25vw;

	&:focus {
		background: white;
	}
`

export const StyledInputContainer = styled.div`
	display: inline-block;
	position: relative;
`

export const StyledInputClear = styled.div`
	position: absolute;
	width: 1rem;
	height: 1rem;
	left: calc(100% - 2rem);
	top: calc(50% - 0.7rem);
	content: '✖️';
	opacity: 0.25;
	transition: 200ms;
	cursor: pointer;

	&:hover {
		opacity: 1;
	}
`
