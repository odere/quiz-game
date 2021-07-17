import React from 'react'

// TODO: add tests
const withStrictMode = <P extends object>(
	WrappedComponent: React.ComponentType<P> | React.FC<P>
) => {
	return class WithStrictMode extends React.Component<P> {
		render() {
			return (
				<React.StrictMode>
					<WrappedComponent {...this.props} />
				</React.StrictMode>
			)
		}
	}
}

export default withStrictMode
