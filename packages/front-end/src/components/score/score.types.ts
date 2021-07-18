import { Statistic } from '../../types/statistic.types'
export interface ScoreProps extends Statistic {
	title: string
	onClose?(): void
}
