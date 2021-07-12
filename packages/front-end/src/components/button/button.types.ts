export enum ButtonSize {
	small = 'small',
	large = 'large',
}

export interface ButtonStyledProps {
	size?: ButtonSize
	primary?: boolean
}

export interface ButtonProps extends ButtonStyledProps {
	label: string
	onClick?(): void
}
