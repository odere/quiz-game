import { model, Schema } from 'mongoose';

const QuestionSchema = new Schema({
	answerId: {
		type: Schema.Types.String,
		required: true,
	},
	answers: [
		{
			id: {
				type: Schema.Types.String,
				required: true,
			},
			text: {
				type: Schema.Types.String,
				required: true,
			},
		},
	],
	image: Schema.Types.String,
	text: {
		type: Schema.Types.String,
		required: true,
	},
});

QuestionSchema.set('toJSON', {
	virtuals: true,
	versionKey: false,
	transform: (doc: any, ret: any) => {
		delete ret._id;

		ret.answers.forEach((item: any) => {
			delete item._id;
		});
	},
});

const QuestionModel = model('quiz-questions', QuestionSchema);
