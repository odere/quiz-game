import { AnsweredQuestion } from '../../../types/question.types'
import { GameState } from '../game.slice'

const getAnsweredQuestion = (props: {
	state: GameState
	selectedId: string
}): AnsweredQuestion | null => {
	const { state, selectedId } = props

	if (state.currentQuestion) {
		return {
			...state.currentQuestion,
			answered: selectedId === state.currentQuestion.correctAnswerId,
			answeredTime: state.remainingTime,
			hasExtraTime: !state.plusTenSec,
		}
	}

	return null
}

export default getAnsweredQuestion
