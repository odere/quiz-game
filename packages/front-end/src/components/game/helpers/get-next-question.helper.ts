import { EntityId } from '@reduxjs/toolkit'
import { Question } from '../../../types/question.types'
import { GameState } from '../game.slice'

const getNextQuestion = (props: {
	state: GameState
	questionCount: number
	selectIds: (state: GameState) => EntityId[]
	selectById: (state: GameState, id: EntityId) => Question | undefined
}): Question | null => {
	const { state, questionCount, selectIds, selectById } = props
	const nextId = selectIds(state)[questionCount + 1]
	const nextQuestion = selectById(state, nextId)

	return nextQuestion || null
}

export default getNextQuestion
