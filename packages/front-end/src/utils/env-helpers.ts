const { NODE_ENV } = process.env

const envHelpers = {
	isProduction: NODE_ENV === 'production',
	isDevelopment: NODE_ENV === 'development',
}

export default envHelpers
