import Joi from 'joi';

import failAction from '../utils/failAction';
import getAllQuestionsController from '../controllers/v1/getAllQuestions.controller';
import getQuestionController from '../controllers/v1/getQuestion.controller';
import createQuestionController from '../controllers/v1/createQuestion.controller';
import deleteQuestionController from '../controllers/v1/deleteQuestion.controller';
import updateQuestionController from '../controllers/v1/updateQuestion.controller';

const questionRoutes = [
	{
		method: 'GET',
		path: '/v1/questions',
		handler: getAllQuestionsController,
		options: {
			description: 'Get all quiz questions',
			tags: ['api'],
			validate: {
				failAction,
			},
		},
	},
	{
		method: 'GET',
		path: '/v1/questions/{id}',
		handler: getQuestionController,
		options: {
			description: 'Get one quiz question',
			notes: 'Returns a quiz question by the id passed in the path',
			tags: ['api'],
			validate: {
				params: Joi.object({
					id: Joi.string(),
				}),
				failAction,
			},
		},
	},
	{
		method: 'POST',
		path: '/v1/questions',
		handler: createQuestionController,
		options: {
			description: 'Create one quiz question',
			notes: 'Return created quiz question by the data passed to payload',
			tags: ['api'],
			validate: {
				payload: Joi.object({
					answerId: Joi.string().required(),
					answers: Joi.array()
						.items({
							id: Joi.string().required(),
							text: Joi.string().required(),
						})
						.required(),
					image: Joi.string(),
					text: Joi.string().required(),
				}),
				failAction,
			},
		},
	},
	{
		method: 'DELETE',
		path: '/v1/questions/{id}',
		handler: deleteQuestionController,
		options: {
			description: 'Delete one quiz question',
			notes: 'Delete a quiz question by the id passed in the path',
			tags: ['api'],
			validate: {
				params: Joi.object({
					id: Joi.string(),
				}),
				failAction,
			},
		},
	},
	{
		method: 'PUT',
		path: '/v1/questions/{id}',
		handler: updateQuestionController,
		options: {
			description: 'Update one quiz question',
			notes: 'Return updated quiz question by the data passed to payload',
			tags: ['api'],
			validate: {
				params: Joi.object({
					id: Joi.string(),
				}),
				payload: Joi.object({
					answerId: Joi.string().optional(),
					answers: Joi.array()
						.items({
							id: Joi.string().optional(),
							text: Joi.string().optional(),
						})
						.optional(),
					image: Joi.string().optional(),
					text: Joi.string().optional(),
				}),
				failAction,
			},
		},
	},
];

export default questionRoutes;
