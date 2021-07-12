import shuffleArray from './shuffle-array'

describe('utils/shuffleArray', () => {
	it('should shuffle array', () => {
		const array = [1, 2, 3, 4, 5]
		const result1 = shuffleArray(array)
		const result2 = shuffleArray(array)

		expect(array).not.toEqual(result1)
		expect(array).not.toEqual(result2)
		expect(result1).not.toEqual(result2)
	})
})
