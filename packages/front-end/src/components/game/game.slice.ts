import { useSelector, useDispatch } from 'react-redux'
import {
	PayloadAction,
	// createAsyncThunk,
	createEntityAdapter,
	createSlice,
} from '@reduxjs/toolkit'

// FIXME: replace by fetching data
import { questions } from './quiz-questions-example'

import { Question } from '../../types/question.types'
import { Game, GameStatus } from '../../types/game.types'
import { RootState } from '../../store'
import shuffleArray from '../../utils/shuffle-array'
import { EMPTY_QUESTIONS_ENTITY, EMPTY_STATISTIC } from './game.constants'
import {
	REMAINING_TIME,
	QUESTIONS_COUNT,
} from '../../constants/defaults.constants'
import getStatistic from './helpers/get-statistic.helper'
import getNextQuestion from './helpers/get-next-question.helper'
import getAnsweredQuestion from './helpers/get-answered-question-helper'

const questionsAdapter = createEntityAdapter<Question>({
	selectId: (answer: Question) => answer.id,
})

export const { selectAll, selectIds, selectById } =
	questionsAdapter.getSelectors((state: GameState) => state.questionsPool)

export interface GameState extends Game {}

export const initialGameState: GameState = {
	currentQuestion: null,
	currentQuestionNumber: null,
	fiftyFifty: true,
	gameStatus: GameStatus.pending,
	playerName: '',
	plusTenSec: true,
	questions: [],
	questionsCount: QUESTIONS_COUNT,
	questionsPool: EMPTY_QUESTIONS_ENTITY,
	remainingTime: REMAINING_TIME,
	statistic: EMPTY_STATISTIC,
}

// TODO: Add test for reducer
export const gameSlice = createSlice({
	name: 'game',
	initialState: initialGameState,
	reducers: {
		onEndGame(state: GameState) {
			state.gameStatus = GameStatus.finished
			state.statistic = getStatistic({ state })
		},
		onFiftyFifty(state: GameState) {
			state.fiftyFifty = false

			if (state.currentQuestion) {
				// It is always 4 answers
				const correctAnswerId = state.currentQuestion.correctAnswerId

				state.currentQuestion.answersIds
					.filter(id => id !== correctAnswerId)
					.slice(0, 2)
					.forEach(id => {
						;(state.currentQuestion as Question).answers[id].isDisabled = true
					})
			}
		},
		onResetGame(state: GameState) {
			return {
				...initialGameState,
				playerName: state.playerName,
			}
		},
		onFetchQuestion(state: GameState) {
			// TODO: redux-thunk
			// TODO: encrypt data
			// FIXME: replace by fetching data
			const questionsPoolItems: Question[] = shuffleArray(questions)

			if (questionsPoolItems.length > 0) {
				state.questionsPool = questionsAdapter.setAll(
					state.questionsPool,
					questionsPoolItems
				)
			}
		},
		onNextQuestion(
			state: GameState,
			action: PayloadAction<{ selectedId: string }>
		) {
			const { selectedId } = action.payload
			const isNotLastQuestion = state.questions.length < state.questionsCount
			const answeredQuestion = getAnsweredQuestion({ state, selectedId })

			if (isNotLastQuestion) {
				state.currentQuestionNumber = (state.currentQuestionNumber as number) + 1
				state.currentQuestion = getNextQuestion({
					state,
					questionCount: state.questions.length,
					selectIds,
					selectById,
				})
				state.remainingTime = REMAINING_TIME

				if (answeredQuestion) {
					state.questions.push(answeredQuestion)
				}
			}
		},
		onPlusTenSeconds(state: GameState) {
			if (state.plusTenSec) {
				state.remainingTime = state.remainingTime + 10
				state.plusTenSec = false
			}
		},
		onSetPlayerName(state: GameState, action: PayloadAction<{ name: string }>) {
			state.playerName = action.payload.name
		},
		onStartGame(state: GameState) {
			state.gameStatus = GameStatus.inProgress
			state.currentQuestionNumber = 0
			state.currentQuestion = getNextQuestion({
				state,
				questionCount: state.questions.length,
				selectIds,
				selectById,
			})
			state.questionsPool.ids = shuffleArray(state.questionsPool.ids)
		},
		onTickTimer(state: GameState) {
			if (state.remainingTime > 0) {
				state.remainingTime = state.remainingTime - 1
			}
		},
	},
})

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
} = gameSlice.actions

export const useDispatchedActions = () => {
	const dispatch = useDispatch()

	return {
		onEndGame: () => dispatch(onEndGame()),
		onFiftyFifty: () => dispatch(onFiftyFifty()),
		onFetchQuestion: () => dispatch(onFetchQuestion()),
		onNextQuestion: (selectedId: string) =>
			dispatch(onNextQuestion({ selectedId })),
		onPlusTenSeconds: () => dispatch(onPlusTenSeconds()),
		onSetPlayerName: (name: string) => dispatch(onSetPlayerName({ name })),
		onResetGame: () => dispatch(onResetGame()),
		onStartGame: () => dispatch(onStartGame()),
		onTickTimer: () => dispatch(onTickTimer()),
	}
}

export const useGameState = (): GameState =>
	useSelector((state: RootState): GameState => state.game)

export default gameSlice.reducer
