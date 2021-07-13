import React, { useEffect, useState } from 'react'

import Answer from '../answer'
import { Answer as AnswerType } from '@quiz-game/types'
import { AnswerListProps, ExtendedAnswer } from './answer-list.types'
import { AnswerListStyled } from './answer-list.styled'
import { green, red, blue, yellow } from '../../constants/colors'
import shuffleArray from '../../utils/shuffle-array'

const COLOR_ARRAY = [green, red, blue, yellow]

const AnswerList: React.FC<AnswerListProps> = props => {
	const { answers, onChange } = props

	const [extendedAnswers, setExtendedAnswers] = useState<ExtendedAnswer[]>([])
	const [isDisabled, setIsDisabled] = useState(false)

	const onChangeHandler = (id: string) => {
		const array = answers.map((answerItem: AnswerType) => ({
			...answerItem,
			color: shuffleArray(COLOR_ARRAY)[parseInt(answerItem.id, 10)],
			isDisabled: answerItem.id !== id,
			onChange: () => onChangeHandler(answerItem.id),
		}))

		setExtendedAnswers(array)
		setIsDisabled(true)

		if (onChange) {
			onChange(id)
		}
	}

	useEffect(() => {
		const array = answers.map((answerItem: AnswerType) => ({
			...answerItem,
			color: COLOR_ARRAY[parseInt(answerItem.id, 10)],
			isDisabled: false,
			onChange: () => onChangeHandler(answerItem.id),
		}))

		setExtendedAnswers(array)
	}, [])

	return (
		<AnswerListStyled isDisabled={isDisabled}>
			{extendedAnswers.map((answerItem: ExtendedAnswer) => (
				<Answer key={answerItem.id} {...answerItem} />
			))}
		</AnswerListStyled>
	)
}

export default AnswerList
