import Boom from '@hapi/boom'
import Hapi from '@hapi/hapi'
import { model } from "mongoose"

const getQuestionController = async (request: Hapi.Request, h: Hapi.ResponseToolkit) => {
    const questionId = request.params.id

    try {
        const QuestionModel = model('quiz-questions');
        const question = await QuestionModel.findOne({ _id: questionId })

        if (!question) {
            return Boom.notFound('user not found')
        } else {
            return h.response(question).code(200)
        }
    } catch (err) {
        request.log('error', err as object)
        return Boom.badImplementation('failed to get user')
    }
}

export default getQuestionController
