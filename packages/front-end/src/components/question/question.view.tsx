import React, { useState, useEffect } from 'react'

import {
	StyledQuestion,
	StyledTaskWrapper,
	StyledTimeWrapper,
} from './question.styled'
import AnswerList from '../answer-list'
import Timer from '../timer'
import useTimer from '../../hooks/use-timer.hook'
import { Answer } from '../../types/answer.types'
import { QuestionProps } from './question.types'
import { REMAINING_TIME } from '../../constants/defaults.constants'
import { GameStatus } from '../../types/game.types'

const Question: React.FC<QuestionProps> = props => {
	const { gameStatus, onAnswerQuestion, onTick, question, remainingTime } = props
	const { answers, answersIds, text, imageUrl } = question
	const [answersState, setAnswersState] = useState<Answer[]>([])
	const isRunning = gameStatus === GameStatus.inProgress && remainingTime > 0

	useTimer({
		delay: 1000,
		isRunning,
		onFinish: onAnswerQuestion,
		onTick,
		timeOut: REMAINING_TIME,
	})

	useEffect(() => {
		const shuffledAnswers = answersIds.map(id => answers[id])

		setAnswersState(shuffledAnswers)
	}, [answers])

	const onChangeHandler = (id: string) => {
		onAnswerQuestion(id)
	}

	return (
		<StyledQuestion>
			<StyledTimeWrapper>
				<Timer remaining={remainingTime} timer={REMAINING_TIME} />
			</StyledTimeWrapper>

			<StyledTaskWrapper>{text}</StyledTaskWrapper>
			{imageUrl && <img src={''} alt={text} />}

			<AnswerList answers={answersState} onChange={onChangeHandler} />
		</StyledQuestion>
	)
}

export default Question
