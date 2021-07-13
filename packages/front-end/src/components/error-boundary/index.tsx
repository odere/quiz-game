import React from 'react'

class ErrorBoundary extends React.Component<
	any,
	{ hasError: boolean; error?: any }
> {
	constructor(props: Readonly<{}>) {
		super(props)
		this.state = { hasError: false }
	}

	static getDerivedStateFromError(error: unknown) {
		return { hasError: true, error }
	}

	// To log somewhere
	// componentDidCatch(error, errorInfo) {
	// 	logErrorToMyService(error, errorInfo)
	// }

	render() {
		if (this.state.hasError) {
			const errorMsg = this.state?.error.message
			return <h1>{errorMsg}</h1>
		}

		return this.props.children
	}
}

export default ErrorBoundary
