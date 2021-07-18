import QUESTIONS_API from '../constants/api.constants'

const getAllQuestions = async () => {
    const base = process.env.NODE_ENV === 'development' && 'http://localhost:3000'
    const url = `${base}${QUESTIONS_API.getAll}`

    try {
        const response = await fetch(url)
        const data = await response.json()

        return data
    } catch(error) {
        // eslint-disable-next-line no-console
        console.error(error)
    }
}

export default getAllQuestions
