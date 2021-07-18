import { Answer } from '../../types/answer.types'

export interface AnswerStyledProps {
	color: string
	isDisabled: boolean
	isSelected?: boolean
}

export interface AnswerProps extends Answer, AnswerStyledProps {
	onChange(): void
}
