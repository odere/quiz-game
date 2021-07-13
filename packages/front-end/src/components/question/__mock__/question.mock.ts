import { Question } from '@quiz-game/types'

const QUESTION_MOCK: Question = {
	id: 'QUESTION_MOCK',
	answerId: '1',
	answers: [
		{
			id: '0',
			text: 'Bucharest',
		},
		{
			id: '1',
			text: 'Budapest',
		},
		{
			id: '2',
			text: 'Bangkok',
		},
		{
			id: '3',
			text: 'Tbilisi',
		},
	],
	text: 'Choose the capital of Hungary?',
}

export default QUESTION_MOCK
