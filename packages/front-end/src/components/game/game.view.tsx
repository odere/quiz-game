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
		fiftyFifty,
		gameStatus,
		playerName,
		plusTenSec,
		remainingTime,
		statistic,
	} = gameState
	const {
		onFiftyFifty,
		onInitGame,
		onNextQuestion,
		onPlusTenSeconds,
		onSetPlayerName,
		onStartGame,
		onTickTimer,
	} = useDispatchedActions()

	useEffect(() => {
		onInitGame()
	}, [])

	const onStartHandler = () => {
		if (gameStatus !== GameStatus.inProgress) {
			onStartGame()
		}
	}

	return (
		<GameStyledContainer>
			<LobbyStyledContainer isHidden={gameStatus !== GameStatus.pending}>
				<Input label='User name' onChange={onSetPlayerName} />
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
						onFiftyFifty={onFiftyFifty}
						onPlusTenSeconds={onPlusTenSeconds}
						plusTenSec={plusTenSec}
					/>
					<Question
						question={currentQuestion}
						onFinish={onNextQuestion}
						onTick={onTickTimer}
						remainingTime={remainingTime}
					/>
				</QuestionStyledContainer>
			)}

			<ScoreStyledContainer isHidden={gameStatus !== GameStatus.finished}>
				<Score
					{...statistic}
					title={`${playerName} Results:`}
					onClose={onInitGame}
				/>
			</ScoreStyledContainer>
		</GameStyledContainer>
	)
}

export default Game
