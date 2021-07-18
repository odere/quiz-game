import React, { useEffect } from 'react'

import Button from '../button'
import Input from '../input'
import LifeLine from '../life-line'
import Question from '../question'
import { GameStatus, Game as GameProps } from '../../types/game.types'
import { useDispatchedActions, useGameState } from './game.slice'
import Score from '../score'

import {
	GameStyledContainer,
	LobbyStyledContainer,
	ScoreStyledContainer,
	QuestionStyledContainer,
} from './game.styled'

const Game: React.FC<GameProps> = () => {
	const gameState = useGameState()
	const {
		currentQuestion,
		currentQuestionNumber,
		fiftyFifty,
		gameStatus,
		playerName,
		plusTenSec,
		questionsCount,
		remainingTime,
		statistic,
	} = gameState
	const {
		onEndGame,
		onFiftyFifty,
		onFetchQuestion,
		onNextQuestion,
		onPlusTenSeconds,
		onResetGame,
		onSetPlayerName,
		onStartGame,
		onTickTimer,
	} = useDispatchedActions()

	useEffect(() => {
		onInitGameHandler()
	}, [])

	const onStartHandler = () => {
		if (gameStatus !== GameStatus.inProgress) {
			onStartGame()
		}
	}

	const onInitGameHandler = () => {
		onResetGame()
		onFetchQuestion()
	}

	const onNextQuestionHandler = (selectedId: string = '') => {
		const isGameFinished =
			currentQuestionNumber === questionsCount &&
			gameStatus !== GameStatus.finished

		if (isGameFinished) {
			onEndGame()

			return
		}

		if (gameStatus !== GameStatus.pending) {
			onNextQuestion(selectedId)
		}
	}

	const onPlusTenSecondsHandler = () => {
		if (plusTenSec) {
			onPlusTenSeconds()
		}
	}

	const onFiftyFiftyHandler = () => {
		if (fiftyFifty) {
			onFiftyFifty()
		}
	}

	return (
		<GameStyledContainer>
			<LobbyStyledContainer isHidden={gameStatus !== GameStatus.pending}>
				<Input
					label='User name'
					onChange={onSetPlayerName}
					initValue={playerName}
				/>
				<Button
					label='Start'
					primary={false}
					isDisable={playerName === ''}
					onClick={onStartHandler}
				/>
			</LobbyStyledContainer>

			{currentQuestion && (
				<QuestionStyledContainer isHidden={gameStatus !== GameStatus.inProgress}>
					<LifeLine
						fiftyFifty={fiftyFifty}
						onFiftyFifty={onFiftyFiftyHandler}
						onPlusTenSeconds={onPlusTenSecondsHandler}
						plusTenSec={plusTenSec}
					/>
					<Question
						gameStatus={gameStatus}
						onAnswerQuestion={onNextQuestionHandler}
						onTick={onTickTimer}
						question={currentQuestion}
						remainingTime={remainingTime}
					/>
				</QuestionStyledContainer>
			)}

			<ScoreStyledContainer isHidden={gameStatus !== GameStatus.finished}>
				<Score
					{...statistic}
					title={`${playerName} Results:`}
					onClose={onInitGameHandler}
				/>
			</ScoreStyledContainer>
		</GameStyledContainer>
	)
}

export default Game
