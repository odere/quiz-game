import React, { useEffect, useState, useRef } from 'react'
import { BehaviorSubject } from 'rxjs'
import { debounceTime } from 'rxjs/operators'

import {
	StyledInput,
	StyledInputContainer,
	StyledInputClear,
} from './input.styled'
import { InputProps } from './input.types'

const Input: React.FC<InputProps> = props => {
	const { label, initValue = '', onChange } = props

	const subjectRef = useRef(new BehaviorSubject(''))
	const [value, setValue] = useState(initValue)

	useEffect(() => {
		setValue(initValue)
	}, [initValue])

	useEffect(() => {
		subjectRef.current.pipe(debounceTime(200)).subscribe((inputValue: string) => {
			if (onChange && inputValue !== value) {
				onChange(inputValue)
			}
		})

		return () => {
			subjectRef.current.unsubscribe()
		}
	}, [])

	const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		subjectRef.current.next(event.target.value)
		setValue(event.target.value)
	}

	const onClearHandler = () => {
		setValue('')

		if (onChange) {
			onChange('')
		}
	}

	return (
		<StyledInputContainer>
			<StyledInput onChange={onChangeHandler} placeholder={label} value={value} />
			{value && (
				<StyledInputClear
					onClick={onClearHandler}
					data-testid='clear'
					role='button'
				>
					✖️
				</StyledInputClear>
			)}
		</StyledInputContainer>
	)
}

export default Input
