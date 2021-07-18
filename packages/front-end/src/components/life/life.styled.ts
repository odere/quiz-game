import styled from 'styled-components'

import { LifeStyledProps } from './life.types'

import { green, primary, red } from '../../constants/colors.constants'

export const StyledLife = styled.div`
	background: ${(props: LifeStyledProps) => (props.hasLife ? green : red)};
	color: ${primary};
	font-weight: 600;
	line-height: 1.5em;
	padding: 0.25em;
	text-align: center;
	transition: 200ms;
	width: 50%;

	&:hover {
		filter: brightness(1.25);
	}
`
