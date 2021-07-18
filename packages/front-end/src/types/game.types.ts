import { EntityState } from '@reduxjs/toolkit'

import { Statistic } from './statistic.types'
import { Question, AnsweredQuestion } from './question.types'

export interface StyledHiddenContainer {
	isHidden?: boolean
}

// eslint-disable-next-line no-shadow
export enum GameStatus {
	finished = 'finished',
	inProgress = 'inProgress',
	pending = 'pending',
}

export interface Game {
	currentQuestion: Question | null
	currentQuestionNumber: number | null
	fiftyFifty: boolean
	gameStatus: GameStatus
	playerName: string
	plusTenSec: boolean
	questions: AnsweredQuestion[]
	questionsCount: number
	questionsPool: EntityState<Question>
	remainingTime: number
	statistic: Statistic
}
