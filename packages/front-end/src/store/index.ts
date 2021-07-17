import envHelpers from '../utils/env-helpers'
import logger from 'redux-logger'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'

import gameReducer, { SLICE_NAME } from './slices/game.slice'

const store = configureStore({
	reducer: {
		[SLICE_NAME]: gameReducer,
	},
	middleware: getDefaultMiddleware => {
		const defaultMiddleware = getDefaultMiddleware().concat([])

		if (envHelpers.isDevelopment) {
			defaultMiddleware.push(logger)
		}

		return defaultMiddleware
	},
})

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
export type RootState = ReturnType<typeof store.getState>
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector

export default store
