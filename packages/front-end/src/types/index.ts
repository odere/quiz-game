export enum GameStatus {
	finished = 'finished',
	inProgress = 'inProgress',
	pending = 'pending',
}

export interface Answer {
	id: string
	text: string
}

export interface QuestionPayload {
	answerId: string
	answers: Answer[]
	image?: string
	text: string
}

export interface Question extends QuestionPayload {
	id: string
}

export declare interface ActiveQuestion extends Question {
	answered?: boolean
	answeredTime?: number
	remainingTime?: number
}

export declare interface Statistic {
	averageTimePerQuestion: number
	correctAnswers: number
	quickestTimePerQuestion: number
	slowestTimePerQuestion: number
	unansweredAnswers: number
	usedLifeLines: number
}

export declare interface Game {
	questionsPool: Question[]
	statistic: Statistic
}
