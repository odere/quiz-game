import React, { useState, useRef, useEffect } from 'react'
import { BehaviorSubject, interval } from 'rxjs'
import { startWith, scan, takeWhile, switchMapTo } from 'rxjs/operators'

import {
	StyledQuestion,
	StyledQuestionContent,
	StyledTaskWrapper,
	StyledTimeWrapper,
} from './question.styled'
import { QuestionProps } from './question.types'
import AnswerList from '../answer-list'
import Timer from '../timer'
import shuffleArray from '../../utils/shuffle-array'

const COUNTDOWN_TIME = 15
const stub = {
	answerId: '0',
	answers: [
		{
			id: '0',
			text: '5',
		},
		{
			id: '1',
			text: '4',
		},
		{
			id: '2',
			text: '6',
		},
		{
			id: '3',
			text: '5.25',
		},
	],
	text: '1.25 + 3.75 = ?',
}

// TODO: encrypt sensitive data
const Question: React.FC<QuestionProps> = props => {
	const { question = stub, onFinishQuestion } = props
	const { answerId, answers, text } = question

	const [remaining, setRemaining] = useState(COUNTDOWN_TIME)
	const { current: subject } = useRef(new BehaviorSubject(COUNTDOWN_TIME))
	let { current: answered } = useRef<boolean | null>(null)

	const finishQuestion = (isValidAnswer: boolean) => {
		answered = isValidAnswer
		onFinishQuestion({
			averageTimePerQuestion: remaining,
			correctAnswers: answered === true ? 1 : 0,
			quickestTimePerQuestion: remaining,
			slowestTimePerQuestion: remaining,
			unansweredAnswers: answered === false ? 1 : 0,
		})
	}

	const onChangeHandler = (id: string) => {
		finishQuestion(id === answerId)
	}

	useEffect(() => {
		answered = null
		const countdown$ = interval(1000).pipe(
			// eslint-disable-next-line no-param-reassign
			scan((acc, _) => --acc, COUNTDOWN_TIME),
			startWith(COUNTDOWN_TIME),
			takeWhile(val => val >= -1 && answered === null)
		)

		subject.pipe(switchMapTo(countdown$)).subscribe(item => {
			if (item >= 0) {
				setRemaining(item)
			} else {
				setRemaining(COUNTDOWN_TIME)
				finishQuestion(false)
			}
		})
	}, [question])

	useEffect(() => {
		return () => {
			subject.unsubscribe()
		}
	}, [])

	return (
		<StyledQuestion>
			<StyledQuestionContent>
				<StyledTimeWrapper>
					<Timer remaining={remaining} timer={COUNTDOWN_TIME} />
				</StyledTimeWrapper>
				<StyledTaskWrapper>
					<p>{text}</p>
					<img src={''} alt={text} />
				</StyledTaskWrapper>
			</StyledQuestionContent>

			<AnswerList answers={shuffleArray(answers)} onChange={onChangeHandler} />
		</StyledQuestion>
	)
}

export default Question
