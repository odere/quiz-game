import { Answer } from './answers.types';

export interface QuestionPayload {
	correctAnswerId: string
	answers: Record<string, Answer>
	answersIds: string[]
	imageUrl?: string
	text: string
}
