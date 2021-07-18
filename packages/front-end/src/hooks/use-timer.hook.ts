import { useState, useRef, useEffect } from 'react'
import { BehaviorSubject, interval } from 'rxjs'
import { startWith, scan, takeWhile, switchMapTo } from 'rxjs/operators'

export interface UseTimerProps {
	deps: any[]
	onFinish(): void
	onTick(): void
	remainingTime: number
	start: boolean
}

// TODO: add test
const useTimer = (props: UseTimerProps): number => {
	const { deps, onFinish, onTick, remainingTime, start } = props
	const [remaining, setRemaining] = useState(remainingTime)
	let { current: subject } = useRef<BehaviorSubject<number> | null>(null)

	const countdown$ = interval(1000).pipe(
		// eslint-disable-next-line no-param-reassign
		scan((acc, _) => --acc, remainingTime),
		startWith(remainingTime),
		takeWhile(val => val >= -1)
	)

	useEffect(() => {
		subject = new BehaviorSubject(remainingTime)

		if (start) {
			subject.pipe(switchMapTo(countdown$)).subscribe(item => {
				if (item >= 0) {
					setRemaining(item)
					onTick()
				} else {
					setRemaining(remainingTime)
					onFinish()
				}
			})
		} else {
			subject.unsubscribe()
		}

		return () => {
			if (subject) {
				subject.unsubscribe()
			}
		}
	}, [...deps, start])

	return remaining
}

export default useTimer
