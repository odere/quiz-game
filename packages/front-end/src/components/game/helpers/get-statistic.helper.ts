import { REMAINING_TIME } from '../../../constants/defaults.constants'
import { Statistic } from '../../../types/statistic.types'
import { GameState } from '../game.slice'

const getStatistic = (props: { state: GameState }): Statistic => {
	const { questions, questionsCount } = props.state
	const timeSum = questions.reduce((acc, next) => acc + next.answeredTime, 0)
	const timeArray = questions.map((item, index) => {
		const hasExtraTime =
			index === 0 && item.hasExtraTime
				? item.hasExtraTime
				: item.hasExtraTime && !questions[index - 1].hasExtraTime

		return hasExtraTime
			? REMAINING_TIME - item.answeredTime + 10
			: REMAINING_TIME - item.answeredTime
	})
	const answersArray = questions.map(item => item.answered)

	return {
		averageTimePerQuestion: timeSum / questionsCount,
		correctAnswers: answersArray.filter(item => item).length,
		quickestTimePerQuestion: Math.min(...timeArray),
		slowestTimePerQuestion: Math.max(...timeArray),
		unansweredAnswers: answersArray.filter(item => !item).length,
	}
}

export default getStatistic
