import React from 'react'

function withQuestionsData(WrappedComponent: any, url: string) {
	return class extends React.Component {
		state = {
			questionsPool: [],
		}

		componentDidMount() {
			fetch(url)
				.then(response => response.json())
				.then(data => this.setState({ questionsPool: data }))
				.catch(error => {
					// eslint-disable-next-line no-console
					console.error(error)
				})
		}

		render() {
			return (
				<React.Suspense fallback={<h1>Loading questions...</h1>}>
					{this.state.questionsPool && <WrappedComponent
						questionsPool={this.state.questionsPool}
						{...this.props}
					/>}
				</React.Suspense>
			)
		}
	}
}

export default withQuestionsData
