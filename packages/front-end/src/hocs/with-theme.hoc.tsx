import React from 'react'

import { GlobalStyle } from './with-theme.styled'

// TODO: add tests
const withTheme = <P extends object>(
	WrappedComponent: React.ComponentType<P> | React.FC<P>
) => {
	return class WithTheme extends React.Component<P> {
		render() {
			return (
				<>
					<GlobalStyle />
					<WrappedComponent {...this.props} />
				</>
			)
		}
	}
}

export default withTheme
