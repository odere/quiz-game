import Game from './game.view'
import withQuestionsData from './with-question-data'
import QUESTIONS_API from '../../constants/api'

const url = `${
	process.env.NODE_ENV === 'development' && 'http://localhost:3000'
}${QUESTIONS_API.getAll}`

export default withQuestionsData(Game, url)
