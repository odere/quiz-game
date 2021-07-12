export interface AnswerStyledProps {
	color: string
	isDisabled?: boolean
	isSelected?: boolean
}

export interface AnswerProps extends AnswerStyledProps {
	onChange(): void
	text: string
}
