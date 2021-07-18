/* eslint-disable no-console */
import dotenv from 'dotenv';
import mongoose, { model } from 'mongoose';
import path from 'path';

import { questions } from '../data/quiz-questions-example';
import '../models/question.model';

dotenv.config({ path: path.resolve(__dirname, '../.env') });

// TODO: update script by parsing .env file
const main = async () => {
	try {
		await mongoose.connect(process.env.MONGO_URI || '', {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useFindAndModify: false,
			useCreateIndex: true,
		});

		const QuestionModel = model('quiz-questions');
		QuestionModel.insertMany(questions, undefined, (error, docs) => {
			if (error) {
				console.error(error);
				return;
			}

			console.error(docs);
			mongoose.disconnect();
			process.exit(0);
		});
	} catch (error) {
		console.error(error);
	}
};

main().catch(console.error);
