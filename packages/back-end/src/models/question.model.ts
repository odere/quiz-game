import { model, Schema } from 'mongoose';

const QuestionSchema = new Schema({
	correctAnswerId: {
		type: Schema.Types.String,
		required: true,
	},
	answers: {
		type: Schema.Types.Map,
		of: {
			id: {
				type: Schema.Types.String,
				required: true,
			},
			text: {
				type: Schema.Types.String,
				required: true,
			},
		},
	},
	answersIds: [Schema.Types.String],
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
		// eslint-disable-next-line no-param-reassign
		delete ret._id;

		Object.keys(ret.answers).forEach((key) => {
			// eslint-disable-next-line no-param-reassign
			delete ret.answers[key]._id
		})
		console.log(ret.answers)
	},
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const QuestionModel = model('quiz-questions', QuestionSchema);
