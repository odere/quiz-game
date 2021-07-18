import { Answer } from '../../types/answer.types'
import { AnswerProps } from '../answer/answer.types'

export interface AnswerComponentsProps extends AnswerProps {}

export interface AnswerListStyedProps {
	isDisabled?: boolean
}

export interface AnswerListProps extends AnswerListStyedProps {
	answers: Answer[]
	onChange?(id: string): void
}
