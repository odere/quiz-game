// @ts-ignore
describe('components/Input', () => {
	beforeEach(() => {
		cy.visit('http://localhost:6006/iframe.html?id=components-input--default&args=&viewMode=story')
	})

	it('should be able to show/hide clear button', () => {
		cy
			.get('[data-testid="clear"]')
			.should('not.exist')
			.get('input')
			.type('Hello, World')
			.get('[data-testid="clear"]')
			.should('exist')
			.get('input')
			.clear()
			.get('[data-testid="clear"]')
			.should('not.exist')
	})

	it('should be able to type text', () => {
		cy
			.get('input')
			.type('Hello, World')
			.should('have.value', 'Hello, World')
	})

	it('should be able to clear text', () => {
		cy
			.get('input')
			.type('Hello, World')
			.should('have.value', 'Hello, World').get('[data-testid="clear"]')
			.click()
			.get('input')
			.should('have.value', '')
	})
})
