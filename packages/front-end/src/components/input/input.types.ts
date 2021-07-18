export interface InputProps {
	label: string
	initValue?: string
	onChange?(value?: string): void
}
