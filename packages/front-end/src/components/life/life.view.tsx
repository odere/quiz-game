import React from 'react'

import { StyledLife } from './life.styled'
import { LifeProps } from './life.types'

const Life: React.FC<LifeProps> = props => {
	const { hasLife = true, onClick, label } = props

	return (
		<StyledLife hasLife={hasLife}>
			<div onClick={onClick}>{label}</div>
		</StyledLife>
	)
}

export default Life
