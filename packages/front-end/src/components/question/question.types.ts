	import { Question, Statistic } from '../../types'

export interface QuestionProps {
	question: Question
	onFinishQuestion(statistic: Partial<Statistic>):void
}
