import { useSelector, useDispatch } from 'react-redux'
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'

import type { RootState, AppDispatch } from '../index'

export const SLICE_NAME = 'game'

// Define a type for the slice state
export interface GameState {
	value: number
	questions: any[]
}

// Define the initial state using that type
const initialState: GameState = {
	value: 0,
	questions: [],
}

export const gameSlice = createSlice({
	name: SLICE_NAME,
	// `createSlice` will infer the state type from the `initialState` argument
	initialState,
	reducers: {
		increment: state => {
			state.value += 1
		},
		decrement: state => {
			state.value -= 1
		},
		// Use the PayloadAction type to declare the contents of `action.payload`
		incrementByAmount: (state, action: PayloadAction<number>) => {
			state.value += action.payload
		},
	},
})

export const { increment, decrement, incrementByAmount } = gameSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectGame = (state: RootState) => state[SLICE_NAME].value

export interface UseGameActions {
	increment(): void
	decrement(): void
	incrementByAmount(amount: number): void
}

export const useGameActions = (): UseGameActions => {
	const dispatch = useDispatch<AppDispatch>()

	return {
		increment: () => dispatch(increment()),
		decrement: () => dispatch(decrement()),
		incrementByAmount: (amount: number) => dispatch(incrementByAmount(amount)),
	}
}

export const useGameState = (): Pick<GameState, 'questions'> => {
	// const value = useSelector((state: RootState) => state[SLICE_NAME].value)
	const questions = useSelector(
		(state: RootState) => state[SLICE_NAME].questions
	)

	return {
		// value,
		questions,
	}
}

export default gameSlice.reducer
