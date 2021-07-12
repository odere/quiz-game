import Boom from '@hapi/boom';
import Hapi from '@hapi/hapi';
import { model } from 'mongoose';

const deleteQuestionController = async (
	request: Hapi.Request,
	h: Hapi.ResponseToolkit
) => {
	const questionId = request.params.id;

	try {
		const QuestionModel = model('quiz-questions');
		await QuestionModel.deleteOne({ _id: questionId });

		return h.response().code(204);
	} catch (err) {
		request.log('error', err as object);
		return Boom.badImplementation('failed to delete user');
	}
};

export default deleteQuestionController;
