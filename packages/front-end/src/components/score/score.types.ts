import { Statistic } from '../../types'
export interface ScoreProps extends Statistic {
	title: string
	onClose?(): void
}
