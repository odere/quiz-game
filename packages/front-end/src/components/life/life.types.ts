export interface LifeStyledProps {
	hasLife: boolean
}

export interface LifeProps extends LifeStyledProps {
	onClick(): void
	label: string
}
