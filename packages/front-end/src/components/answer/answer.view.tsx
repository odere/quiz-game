import React, { useEffect, useRef, useState } from 'react'
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators'

import { StyledAnswer } from './answer.styled'
import { AnswerProps } from './answer.types'

const Answer: React.FC<AnswerProps> = props => {
	const { text, color, onChange, isDisabled } = props

	const { current: subject$ } = useRef(new Subject())
	const [isSelected, setIsSelected] = useState(false)

	useEffect(() => {
		subject$
			.pipe(debounceTime(300))
			.subscribe(() => (onChange()));

		return () => {
			subject$.unsubscribe();
		}
	}, [])

	const onClickHandler = () => {
		setIsSelected(true)
		subject$.next()
	}

	return (
		<StyledAnswer onClick={onClickHandler} color={color} isDisabled={isDisabled} isSelected={isSelected} >
			{ text }
		</StyledAnswer>
	)
}

export default Answer
