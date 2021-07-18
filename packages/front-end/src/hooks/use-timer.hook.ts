import { useState, useRef, useEffect } from 'react'

interface UseTimerProps {
	delay: number
	isRunning: boolean
	onFinish(): void
	onTick(): void
	timeOut: number
}

const useTimer = (props: UseTimerProps) => {
	const { delay, isRunning, onFinish, onTick, timeOut } = props
	const intervalId = useRef<number>()
	const [remaining, setRemaining] = useState(timeOut)

	useEffect(() => {
		const onFinishHandle = () => {
			onFinish()
			setRemaining(timeOut)
		}

		const onTickHandle = () => {
			setRemaining(remaining - 1)
			onTick()
		}

		if (isRunning) {
			// @ts-ignore
			intervalId.current = setInterval(onTickHandle, delay)

			return () => clearInterval(intervalId.current)
		} else {
			onFinishHandle()
		}
	}, [remaining, isRunning])
}

export default useTimer
