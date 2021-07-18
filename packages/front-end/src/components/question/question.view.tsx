import React, { useState, useEffect } from 'react'

import {
	StyledQuestion,
	StyledTaskWrapper,
	StyledTimeWrapper,
} from './question.styled'
import AnswerList from '../answer-list'
import Timer from '../timer'
import shuffleArray from '../../utils/shuffle-array'
import useTimer from '../../hooks/use-timer.hook'
import { Answer } from '../../types/answer.types'
import { GameStatus } from '../../types/game.types'
import { QuestionProps } from './question.types'
import { REMAINING_TIME } from '../../constants/defaults.constants'
import { useGameState } from '../game/game.slice'

const Question: React.FC<QuestionProps> = props => {
	const gameState = useGameState()
	const { gameStatus } = gameState
	const { remainingTime, onFinish, onTick, question } = props
	const { answers, answersIds, text, imageUrl } = question
	const [answersState, setAnswersState] = useState<Answer[]>([])
	const remaining = useTimer({
		deps: [gameStatus, question],
		onFinish: () => {
			onFinish('INVALID')
		},
		onTick,
		remainingTime,
		start: gameStatus === GameStatus.inProgress,
	})

	useEffect(() => {
		const shuffledAnswers = shuffleArray(answersIds).map(id => answers[id])

		setAnswersState(shuffledAnswers)
	}, [answers])

	const onChangeHandler = (id: string) => {
		onFinish(id)
	}

	return (
		<StyledQuestion>
			<StyledTimeWrapper>
				<Timer remaining={remaining} timer={REMAINING_TIME} />
			</StyledTimeWrapper>

			<StyledTaskWrapper>
				<p>{text}</p>
				{imageUrl && <img src={''} alt={text} />}
			</StyledTaskWrapper>

			<AnswerList answers={answersState} onChange={onChangeHandler} />
		</StyledQuestion>
	)
}

export default Question
