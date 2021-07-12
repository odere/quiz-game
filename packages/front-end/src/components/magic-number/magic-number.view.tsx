import React, { useEffect, useRef, useState } from 'react'
import { timer, BehaviorSubject } from 'rxjs'
import { switchMap, startWith, scan, takeWhile, mapTo } from 'rxjs/operators'

import { MagicNumberProps } from './magic-number.types'

const MagicNumber: React.FC<MagicNumberProps> = props => {
	const { value, onFinish } = props
	const [magic, setMagic] = useState(0)
	let { current: speed } = useRef(100)

	useEffect(() => {
		if (value >= 5) {
			speed = 100
		}

		const subject = new BehaviorSubject(value)
			.pipe(
				switchMap(endRange => {
					// Increment speed
					return timer(0, speed).pipe(
						mapTo(1),
						startWith(0),
						// Increment
						scan((acc, curr) => acc + curr),
						takeWhile(curr => endRange >= curr)
					)
				})
			)
			.subscribe(item => {
				setMagic(item)
				if (item === value && onFinish) {
					onFinish()
				}
			})

		return () => {
			subject.unsubscribe()
		}
	}, [value])

	return <span>{magic}</span>
}

export default MagicNumber
