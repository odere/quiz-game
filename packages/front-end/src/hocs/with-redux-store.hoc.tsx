import React from 'react'

import { Provider } from 'react-redux'
import store from '../store'

// TODO: add tests
const withReduxStore = <P extends object>(
	WrappedComponent: React.ComponentType<P> | React.FC<P>
) => {
	return class WithReduxStore extends React.Component<P> {
		render() {
			return (
				<Provider store={store}>
					<WrappedComponent {...this.props} />
				</Provider>
			)
		}
	}
}

export default withReduxStore
