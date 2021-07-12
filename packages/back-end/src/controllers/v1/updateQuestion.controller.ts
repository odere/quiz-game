import Boom from '@hapi/boom';
import Hapi from '@hapi/hapi';
import { model } from 'mongoose';

import { QuestionPayload } from '@quiz-game/types';

const updateQuestionController = async (
	request: Hapi.Request,
	h: Hapi.ResponseToolkit
) => {
	const questionId = request.params.id;
	const payload = request.payload as Partial<QuestionPayload>;

	try {
		const QuestionModel = model('quiz-questions');
		const filter = { _id: questionId };

		await QuestionModel.findOneAndUpdate(filter, payload);
		const updatedQuestion = await QuestionModel.findOne(filter);

		return h.response(updatedQuestion as Hapi.ResponseValue).code(200);
	} catch (err) {
		request.log('error', err as object);
		return Boom.badImplementation('failed to update user');
	}
};

export default updateQuestionController;
