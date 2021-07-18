import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

import LifeLine from './life-line.view'

describe('components/LifeLine:', () => {
	const mockedProps = {
		label: 'label',
		onFiftyFifty() {},
		onPlusTenSeconds() {},
	}

	it('should be able to show life states', () => {
		const lifeLineDefault = renderer
			.create(<LifeLine fiftyFifty plusTenSec {...mockedProps} />)
			.toJSON()
		expect(lifeLineDefault).toMatchSnapshot()
		const halfLife = renderer
			.create(<LifeLine fiftyFifty plusTenSec={false}  {...mockedProps}  />)
			.toJSON()
		expect(halfLife).toMatchSnapshot()
		const halfLifeInverted = renderer
			.create(<LifeLine fiftyFifty={false} plusTenSec {...mockedProps} />)
			.toJSON()
		expect(halfLifeInverted).toMatchSnapshot()
		const noLife = renderer
			.create(<LifeLine fiftyFifty={false} plusTenSec={false} {...mockedProps} />)
			.toJSON()
		expect(noLife).toMatchSnapshot()
	})
})
