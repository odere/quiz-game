import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

import Button from './score.view'

describe('components/Button:', () => {
	it('should be a button', () => {
		render(<Button label='Button' />)
		const headerElement = document.getElementsByTagName('button')[0]
		expect(headerElement).toBeInTheDocument()
	})
})
