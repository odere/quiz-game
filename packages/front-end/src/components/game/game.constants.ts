import { EntityState } from '@reduxjs/toolkit'

import { Statistic } from '../../types/statistic.types'
import { Question } from '../../types/question.types'

export const EMPTY_QUESTIONS_ENTITY: EntityState<Question> = {
	entities: {},
	ids: [],
}

export const EMPTY_STATISTIC: Statistic = {
	averageTimePerQuestion: 0,
	correctAnswers: 0,
	quickestTimePerQuestion: 0,
	slowestTimePerQuestion: 0,
	unansweredAnswers: 0,
}
