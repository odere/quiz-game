import React, { useEffect, useState } from 'react'

import Answer from '../answer'
import { AnswerListProps, AnswerComponentsProps } from './answer-list.types'
import { AnswerListStyled } from './answer-list.styled'
import { COLOR_ARRAY } from './answer-list.constants'

const AnswerList: React.FC<AnswerListProps> = props => {
	const { answers, onChange, isDisabled } = props

	const [extendedAnswers, setExtendedAnswers] = useState<
		AnswerComponentsProps[]
	>([])

	const onChangeHandler = (id: string) => {
		if (onChange) {
			onChange(id)
		}
	}

	useEffect(() => {
		const array: AnswerComponentsProps[] = answers.map(answerItem => ({
			...answerItem,
			color: COLOR_ARRAY[parseInt(answerItem.id, 10)],
			onChange: () => onChangeHandler(answerItem.id),
		}))

		setExtendedAnswers(array)
	}, [answers])

	return (
		<AnswerListStyled isDisabled={isDisabled}>
			{extendedAnswers.map(answerItem => (
				<Answer key={answerItem.id} {...answerItem} />
			))}
		</AnswerListStyled>
	)
}

export default AnswerList
