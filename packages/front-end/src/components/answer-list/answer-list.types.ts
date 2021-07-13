import { AnswerProps } from '../answer/answer.types'
import { Answer } from '../../types'

export interface ExtendedAnswer extends Answer, AnswerProps {}

export interface AnswerListStyedProps {
	isDisabled: boolean
}

export interface AnswerListProps {
	answers: Answer[]
	onChange?(id: string): void
}
