import { Question } from '../../types/question.types'

export interface QuestionProps {
	remainingTime: number
	onFinish(selectedId: string): void
	onTick(): void
	question: Question
}
