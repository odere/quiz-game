import React from 'react'
import ReactDOM from 'react-dom'
import { compose } from 'recompose'

import Game from './containers/game'
import GameProps from './containers/game/game.types'
import reportWebVitals from './reportWebVitals'
import withErrorBoundary from './hocs/with-error-boundary.hoc'
import withNormalizedStyledComponent from './hocs/with-theme.hoc'
import withReduxStore from './hocs/with-redux-store.hoc'
import withStrictMode from './hocs/with-strict-mode.hoc'

const App = compose<GameProps, unknown>(
	withStrictMode,
	withErrorBoundary,
	withReduxStore,
	withNormalizedStyledComponent
)(Game)

ReactDOM.render(<App />, document.getElementById('root'))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
