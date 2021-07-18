import { useSelector, useDispatch } from 'react-redux'
import {
	PayloadAction,
	// createAsyncThunk,
	createEntityAdapter,
	createSlice,
} from '@reduxjs/toolkit'

// FIXME: replace by fetching data
import { questions } from './quiz-questions-example'

import { Question, AnsweredQuestion } from '../../types/question.types'
import { Game, GameStatus } from '../../types/game.types'
import { RootState } from '../../store'
import shuffleArray from '../../utils/shuffle-array'
import { EMPTY_QUESTIONS_ENTITY, EMPTY_STATISTIC } from './game.constants'
import {
	REMAINING_TIME,
	QUESTIONS_COUNT,
} from '../../constants/defaults.constants'

const questionsAdapter = createEntityAdapter<Question>({
	selectId: (answer: Question) => answer.id,
})

export const { selectAll, selectIds, selectById } =
	questionsAdapter.getSelectors((state: GameState) => state.questionsPool)

export interface GameState extends Game {}

export const initialGameState: GameState = {
	currentQuestion: null,
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
		},
		onFiftyFifty(state: GameState) {
			state.fiftyFifty = false

			if (state.currentQuestion) {
				// It is always 4 answers
				const correctAnswerId = state.currentQuestion.correctAnswerId

				shuffleArray(state.currentQuestion.answersIds)
					.filter(id => id !== correctAnswerId)
					.slice(0, 2)
					.forEach(id => {
						;(state.currentQuestion as Question).answers[id].isDisabled = true
					})
			}
		},
		onInitGame(state: GameState) {
			// TODO: redux-thunk
			// TODO: encrypt data
			// FIXME: replace by fetching data
			const questionsPoolItems: Question[] = questions

			if (questionsPoolItems.length > 0) {
				state.currentQuestion = questionsPoolItems[0]
				state.questionsPool = questionsAdapter.setAll(
					state.questionsPool,
					questionsPoolItems
				)
			}

			state.gameStatus = GameStatus.pending
			state.questions = []
			state.statistic = EMPTY_STATISTIC
			state.fiftyFifty = true
			state.plusTenSec = true
		},
		onNextQuestion(
			state: GameState,
			action: PayloadAction<{ selectedId: string }>
		) {
			const { selectedId } = action.payload
			const questionCount = state.questions.length - 1
			const isNotLastQuestion = questionCount < state.questionsCount

			if (isNotLastQuestion && state.currentQuestion) {
				const answeredQuestion: AnsweredQuestion = {
					...state.currentQuestion,
					answered: selectedId === state.currentQuestion.correctAnswerId,
					answeredTime: state.remainingTime,
				}

				const nextId = selectIds(state)[questionCount + 1]
				const nextQuestion = selectById(state, nextId)

				if (nextQuestion) {
					state.currentQuestion = nextQuestion
				}

				state.questions.push(answeredQuestion)
			} else {
				state.gameStatus = GameStatus.finished
				state.statistic = {
					averageTimePerQuestion:
						state.questions.reduce((acc, next) => acc + next.answeredTime, 0) /
						questionCount,
					correctAnswers: state.questions.reduce(
						(acc, next) => (next.answered ? acc + 1 : acc),
						0
					),
					quickestTimePerQuestion: Math.min(
						...state.questions.map(item => item.answeredTime)
					),
					slowestTimePerQuestion: Math.max(
						...state.questions.map(item => item.answeredTime)
					),
					unansweredAnswers: state.questions.reduce(
						(acc, next) => (!next.answered ? acc + 1 : acc),
						0
					),
				}
			}

			state.remainingTime = REMAINING_TIME
		},
		onPlusTenSeconds(state: GameState) {
			state.remainingTime = state.remainingTime + 10
			state.plusTenSec = false
		},
		onSetPlayerName(state: GameState, action: PayloadAction<{ name: string }>) {
			state.playerName = action.payload.name
		},
		onStartGame(state: GameState) {
			state.gameStatus = GameStatus.inProgress
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
	onInitGame,
	onNextQuestion,
	onPlusTenSeconds,
	onSetPlayerName,
	onStartGame,
	onTickTimer,
} = gameSlice.actions

export const useDispatchedActions = () => {
	const dispatch = useDispatch()

	return {
		onEndGame: () => dispatch(onEndGame()),
		onFiftyFifty: () => dispatch(onFiftyFifty()),
		onInitGame: () => dispatch(onInitGame()),
		onNextQuestion: (selectedId: string) =>
			dispatch(onNextQuestion({ selectedId })),
		onPlusTenSeconds: () => dispatch(onPlusTenSeconds()),
		onSetPlayerName: (name: string) => dispatch(onSetPlayerName({ name })),
		onStartGame: () => dispatch(onStartGame()),
		onTickTimer: () => dispatch(onTickTimer()),
	}
}

export const useGameState = (): GameState =>
	useSelector((state: RootState): GameState => state.game)

export default gameSlice.reducer
