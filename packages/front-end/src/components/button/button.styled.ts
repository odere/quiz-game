import styled from 'styled-components'

import { ButtonStyledProps, ButtonSize } from './button.types'

import {
	primary,
	primaryDark,
	secondary,
	secondaryDark,
} from '../../constants/colors'

export const StyledButton = styled.button`
	background: transparent;
	border: none;
	color: inherit;
	font-size: 1.5em;
	padding: 0.5em;
	min-width: 5em;
`

export const StyledButtonContainer = styled.div`
	background: ${(props: ButtonStyledProps) =>
		props.primary ? primaryDark : secondary};
	border-radius: 0.15em;
	color: white;
	display: inline-block;
	text-align: center;
	font-size: ${(props: ButtonStyledProps) =>
		props.size === ButtonSize.small ? '1em' : '3em'};
	transition: 200ms;
	pointer-events: ${(props: ButtonStyledProps) =>
		props.isDisable ? 'none' : 'inherite'};
	filter: ${(props: ButtonStyledProps) =>
		props.isDisable ? 'grayscale(75%)' : 'none'};

	&:hover {
		background: ${(props: ButtonStyledProps) =>
			props.primary ? primary : secondaryDark};
	}
`
