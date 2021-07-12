import React from 'react'
import { render } from '@testing-library/react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

import Timer from './timer.view'

describe('components/Timer:', () => {
	it('should display seconds', () => {
		// Default
		const { getByText, rerender } = render(<Timer remaining={15} timer={15} />)
		expect(getByText(/15/i)).toBeInTheDocument()
		// IsInforming
		rerender(<Timer remaining={4} timer={15} />)
		expect(getByText(/4/i)).toBeInTheDocument()
		// IsWarning
		rerender(<Timer remaining={1} timer={15} />)
		expect(getByText(/1/i)).toBeInTheDocument()
		// IsFinished
		rerender(<Timer remaining={0} timer={15} />)
		expect(getByText(/0/i)).toBeInTheDocument()
	})

	it('should be Clickable', () => {
		const defaultSnapshot = renderer
			.create(<Timer remaining={15} timer={15} />)
			.toJSON()
		expect(defaultSnapshot).toMatchSnapshot()

		const informingSnapshot = renderer
			.create(<Timer remaining={4} timer={15} />)
			.toJSON()
		expect(informingSnapshot).toMatchSnapshot()

		const warningSnapshot = renderer
			.create(<Timer remaining={1} timer={15} />)
			.toJSON()
		expect(warningSnapshot).toMatchSnapshot()

		const finishedSnapshot = renderer
			.create(<Timer remaining={0} timer={15} />)
			.toJSON()
		expect(finishedSnapshot).toMatchSnapshot()
	})
})
