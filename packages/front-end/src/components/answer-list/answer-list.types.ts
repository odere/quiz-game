import { Answer } from '../../types/answer.types'
import { AnswerProps } from '../answer/answer.types'

export interface AnswerComponentsProps extends AnswerProps {}

export interface AnswerListProps {
	answers: Answer[]
	onChange?(id: string): void
}
