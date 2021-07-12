import styled from 'styled-components'

import { primaryDark, white50 } from '../../constants/colors'

export const StyledInput = styled.input`
	background: ${white50};
	border-radius: 0.15em;
	border: none;
	color: ${primaryDark};
	font-size: 1.75em;
	padding: .25em .5em;
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
	width: 1em;
	height: 1em;
	left: calc(100% - 2em);
	top: calc(50% - .7em);
	content: '✖️';
	opacity: .25;
	transition: 200ms;

	&:hover {
		opacity: 1;
	}
`
