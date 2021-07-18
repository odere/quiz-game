import styled from 'styled-components'

import { ButtonStyledProps, ButtonSize } from './button.types'

import {
	primary,
	primaryDark,
	secondary,
	secondaryDark,
} from '../../constants/colors.constants'

export const StyledButton = styled.button`
	background: transparent;
	border: none;
	color: inherit;
	font-size: 1.25rem;
	padding: 0.5rem;
	min-width: 5rem;
`

export const StyledButtonContainer = styled.div`
	background: ${(props: ButtonStyledProps) =>
		props.primary ? primaryDark : secondary};
	border-radius: 0.15rem;
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
