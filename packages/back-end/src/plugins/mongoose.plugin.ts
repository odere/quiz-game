import Hapi from '@hapi/hapi';
import mongoose from 'mongoose';

import '../models/question.model';

const mongoosePlugin = {
	name: 'app/mongoosePlugin',
	register: async (server: Hapi.Server) => {
		try {
			await mongoose.connect(process.env.MONGO_URI || '', {
				useNewUrlParser: true,
				useUnifiedTopology: true,
				useFindAndModify: false,
				useCreateIndex: true,
			});
		} catch (error) {
			console.error(error);
		}
	},
};

export default mongoosePlugin;
