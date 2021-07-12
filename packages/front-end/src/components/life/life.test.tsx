import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

import { StyledLife } from './life.styled'

describe('components/Life:', () => {
	it('should be able to change theme', () => {
		const treePrimary = renderer.create(<StyledLife hasLife />).toJSON()
		expect(treePrimary).toMatchSnapshot()

		const treeSecondary = renderer.create(<StyledLife hasLife={false} />).toJSON()
		expect(treeSecondary).toMatchSnapshot()
	})
})
