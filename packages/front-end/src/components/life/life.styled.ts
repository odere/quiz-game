import styled from 'styled-components'

import { LifeStyledProps } from './life.types'

import { green, red } from '../../constants/colors'

export const StyledLife = styled.div`
	background: ${(props: LifeStyledProps) => (props.hasLife ? green : red)};
	height: 3em;
	transition: 200ms;
	width: 50%;
`
