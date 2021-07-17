/* eslint-disable no-console */
import React from 'react'

export interface ErrorBoundaryState {
	hasError: boolean
	error: Error
}

// TODO: could be replaced by some useful service
// TODO: add tests
const fakeLogger = (error: any, errorInfo: any): void => {
	console.group('Error from Error Boundary')
	console.error(error)
	console.error(errorInfo)
	console.groupEnd()
}

export const defaultErrorMessage = 'Error boundary error'

const withErrorBoundary = <P extends object>(
	WrappedComponent: React.ComponentType<P> | React.FC<P>
) => {
	const getErrorTemplate = (errorMsg: string) => <h1>{errorMsg}</h1>

	return class ErrorBoundary extends React.Component<P, ErrorBoundaryState> {
		state = {
			hasError: false,
			error: new Error(defaultErrorMessage),
		}

		static getDerivedStateFromError(error: unknown) {
			return { hasError: true, error }
		}

		componentDidCatch(error: any, errorInfo: any) {
			fakeLogger(error, errorInfo)
		}

		render() {
			const { hasError, error } = this.state

			return (
				<>
					{hasError ? (
						getErrorTemplate(error.message)
					) : (
						<WrappedComponent {...this.props} />
					)}
				</>
			)
		}
	}
}

export default withErrorBoundary
