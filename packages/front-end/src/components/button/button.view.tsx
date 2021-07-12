import React from 'react'

import { StyledButton, StyledButtonContainer } from './button.styled'
import { ButtonProps, ButtonSize } from './button.types'

const Button: React.FC<ButtonProps> = props => {
	const { label, onClick, primary = true, size = ButtonSize.small } = props
	return (
		<StyledButtonContainer size={size} primary={primary}>
			<StyledButton onClick={onClick}>{label}</StyledButton>
		</StyledButtonContainer>
	)
}

export default Button
