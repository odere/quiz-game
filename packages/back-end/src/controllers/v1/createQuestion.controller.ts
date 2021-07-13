import Boom from '@hapi/boom';
import Hapi from '@hapi/hapi';
import { model } from 'mongoose';

import { QuestionPayload } from '../../types';

const createQuestionController = async (
	request: Hapi.Request,
	h: Hapi.ResponseToolkit
) => {
	const payload = request.payload as QuestionPayload;

	try {
		const QuestionModel = model('quiz-questions');
		const createdQuestion = await QuestionModel.create(payload);

		return h.response(createdQuestion).code(201);
	} catch (err) {
		request.log('error', err as object);
		return Boom.badImplementation('failed to create user');
	}
};

export default createQuestionController;
