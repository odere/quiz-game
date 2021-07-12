import React, { useState } from 'react'

import { StyledAnswer } from './answer.styled'
import { AnswerProps } from './answer.types'

const Answer: React.FC<AnswerProps> = props => {
	const { text, color, onChange, isDisabled } = props

	const [isSelected, setIsSelected] = useState(false)

	const onClickHandler = () => {
		setIsSelected(true)
		onChange()
	}

	return (
		<StyledAnswer
			onClick={onClickHandler}
			color={color}
			isDisabled={isDisabled}
			isSelected={isSelected}
		>
			{text}
		</StyledAnswer>
	)
}

export default Answer
