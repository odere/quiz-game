import { Statistic } from '@quiz-game/types'

export interface ScoreProps extends Statistic {
	title: string
	onClose?(): void
}
