import { GameStatus } from '../../types/game.types'
import { Question } from '../../types/question.types'

export interface QuestionProps {
	gameStatus: GameStatus
	onAnswerQuestion(selectedId?: string): void
	onTick(): void
	question: Question
	remainingTime: number
}
