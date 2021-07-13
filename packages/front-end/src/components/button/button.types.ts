export enum ButtonSize {
	small = 'small',
	large = 'large',
}

export interface ButtonStyledProps {
	size?: ButtonSize
	primary?: boolean
	isDisable?: boolean
}

export interface ButtonProps extends ButtonStyledProps {
	label: string
	onClick?(): void
}
