import { Answer } from './answer.types'

export interface QuestionPayload {
	correctAnswerId: string
	answers: Record<string, Answer>
	answersIds: string[]
	imageUrl?: string
	text: string
}

export interface Question extends QuestionPayload {
	id: string
}

export interface AnsweredQuestion extends Question {
	answered: boolean
	answeredTime: number
}
