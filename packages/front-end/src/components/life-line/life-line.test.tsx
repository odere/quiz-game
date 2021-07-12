import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

import LifeLine from './life-line.view'

describe('components/LifeLine:', () => {
	it('should be able to show life states', () => {
		const lifeLineDefault = renderer
			.create(<LifeLine fiftyFifty plusTenSec />)
			.toJSON()
		expect(lifeLineDefault).toMatchSnapshot()
		const halfLife = renderer
			.create(<LifeLine fiftyFifty plusTenSec={false} />)
			.toJSON()
		expect(halfLife).toMatchSnapshot()
		const halfLifeInverted = renderer
			.create(<LifeLine fiftyFifty={false} plusTenSec />)
			.toJSON()
		expect(halfLifeInverted).toMatchSnapshot()
		const noLife = renderer
			.create(<LifeLine fiftyFifty={false} plusTenSec={false} />)
			.toJSON()
		expect(noLife).toMatchSnapshot()
	})
})
