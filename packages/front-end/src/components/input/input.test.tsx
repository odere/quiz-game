import React from 'react'
import { render, screen } from '@testing-library/react'
import 'jest-styled-components'

import Input from './input.view'

describe('components/Input:', () => {
	it('should be a input', () => {
		render(<Input label='Input' />)
		const headerElement = document.getElementsByTagName('input')[0]
		expect(headerElement).toBeInTheDocument()
	})

	it('should have a placeholder', () => {
		render(<Input label='Placeholder' />)
		expect(screen.queryByPlaceholderText(/Placeholder/i)).toBeInTheDocument()
	})

	// TODO: test debouncing onChange callback
})
