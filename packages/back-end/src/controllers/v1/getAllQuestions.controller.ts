import Boom from '@hapi/boom';
import Hapi from '@hapi/hapi';
import { model } from 'mongoose';

const getAllQuestionsController = async (
	request: Hapi.Request,
	h: Hapi.ResponseToolkit
) => {
	try {
		const QuestionModel = model('quiz-questions');
		const questions = await QuestionModel.find();

		return h.response(questions).code(200);
	} catch (err) {
		request.log('error', err as object);
		return Boom.badImplementation('failed to get users');
	}
};

export default getAllQuestionsController;
