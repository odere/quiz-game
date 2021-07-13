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

// TODO: encrypt sensitive data
const Question: React.FC<QuestionProps> = props => {
	const { question } = props
	const { answerId, answers, image, text } = question

	const [remaining, setRemaining] = useState(COUNTDOWN_TIME)
	const { current: subject } = useRef(new BehaviorSubject(COUNTDOWN_TIME))
	let { current: answered } = useRef<boolean | null>(null)

	const finishQuestion = (isValidAnswer: boolean) => {
		answered = isValidAnswer
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
					{image && <img src={image} alt={text} />}
				</StyledTaskWrapper>
			</StyledQuestionContent>

			<AnswerList answers={shuffleArray(answers)} onChange={onChangeHandler} />
		</StyledQuestion>
	)
}

export default Question
