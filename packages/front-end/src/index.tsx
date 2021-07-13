import React from 'react'
import ReactDOM from 'react-dom'
import ErrorBoundary from './components/error-boundary'
import reportWebVitals from './reportWebVitals'

import { GlobalStyle } from './index.styled'
import Game from './containers/game'

ReactDOM.render(
	<React.StrictMode>
		<ErrorBoundary>
			<GlobalStyle />
			<Game />
		</ErrorBoundary>
	</React.StrictMode>,
	document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
