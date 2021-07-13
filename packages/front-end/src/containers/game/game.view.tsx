import React, { useEffect, useState, useCallback, useRef } from 'react'
import { ActiveQuestion, GameStatus, Statistic } from '../../types'

import Button from '../../components/button'
import GameProps from './game.types'
import Input from '../../components/input'
import LifeLine from '../../components/life-line'
import Question from '../../components/question'
import Score from '../../components/score'
import shuffleArray from '../../utils/shuffle-array'
import { DEFAULT_STATISTIC, MAX_QUESTIONS } from './game.constants'
import {
	GameStyledContainer,
	LobbyStyledContainer,
	ScoreStyledContainer,
	QuestionStyledContainer,
} from './game.styled'

const Game: React.FC<GameProps> = props => {
	const { questionsPool } = props

	const [questionNumber, setQuestionNumber] = useState(0)
	const [questions, setQuestions] = useState<ActiveQuestion[]>([])
	const [gameStatus, setGameStatus] = useState<GameStatus>(GameStatus.pending)
	const [statistic, setStatistic] = useState<Statistic>(DEFAULT_STATISTIC)
	const [playerName, setPlayerName] = useState('')
	const [fiftyFifty, setFiftyFifty] = useState(true)
	const [plusTenSec, setPlusTenSec] = useState(true)

	useEffect(() => {
		const randomTenQuestions = questionsPool.slice(0, 10)
		setQuestions(shuffleArray(randomTenQuestions))
	}, [])

	const onNameChangeHandler = (name?: String) => {
		if (typeof name === 'string') {
			setPlayerName(name)
		}
	}

	const onStartClickHandler = () => {
		setGameStatus(GameStatus.inProgress)
	}

	const onEndClickHandler = () => {
		setGameStatus(GameStatus.pending)
	}

	const calculateStatistic = (): Statistic => {
		return DEFAULT_STATISTIC
	}

	const onFinishQuestionHandler = () => {
		if (questionNumber <= MAX_QUESTIONS) {
			setGameStatus(GameStatus.finished)
			setStatistic(calculateStatistic());
		}

		setQuestionNumber(questionNumber + 1)
		setGameStatus(GameStatus.pending)
	}

	// const renderGame = () => {
	// 	return (
	// 		<QuestionStyledContainer>
	// 			<LifeLine fiftyFifty={fiftyFifty} plusTenSec={plusTenSec} />
	// 			<Question question={questions[questionNumber]} onFinishQuestion={} />
	// 		</QuestionStyledContainer>
	// 	)
	// }

	return (
		<GameStyledContainer>
			<LobbyStyledContainer isHidden={gameStatus !== GameStatus.pending}>
				<Input label='User name' onChange={onNameChangeHandler} />
				<Button
					label='Start'
					primary={false}
					isDisable={Boolean(playerName) === false}
					onClick={onStartClickHandler}
				/>
			</LobbyStyledContainer>

			<QuestionStyledContainer isHidden={gameStatus !== GameStatus.inProgress}>
				<LifeLine fiftyFifty={fiftyFifty} plusTenSec={plusTenSec} />
				<Question question={questions[questionNumber]} onFinishQuestion={onFinishQuestionHandler} />
			</QuestionStyledContainer>

			<ScoreStyledContainer isHidden={gameStatus !== GameStatus.finished}>
				<Score
					{...statistic}
					title={`${playerName} Results:`}
					onClose={onEndClickHandler}
				/>
			</ScoreStyledContainer>
		</GameStyledContainer>
	)
}

export default Game
