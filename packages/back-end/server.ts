import Hapi from '@hapi/hapi';
import dotenv from 'dotenv';
import path from 'path';

import isProduction from './src/utils/isProduction';
import loggerPlugin from './src/plugins/logger.plugin';
import mongoosePlugin from './src/plugins/mongoose.plugin';
import questionsPlugin from './src/plugins/questions.plugin';

if (!isProduction) {
	dotenv.config({ path: path.resolve(__dirname, './.env') });
}

const server: Hapi.Server = Hapi.server({
	port: process.env.BACKEND_PORT || 5000,
	host: process.env.HOST || '0.0.0.0',
});

export const createServer = async (): Promise<Hapi.Server> => {
	// Register middleware
	await server.register([loggerPlugin, mongoosePlugin]);

	// Register routes
	await server.register([questionsPlugin]);

	await server.initialize();

	return server;
};

export const startServer = async (
	createdServer: Hapi.Server
): Promise<Hapi.Server> => {
	await createdServer.start();

	createdServer.log('info', `Server running on ${server.info.uri}`);

	return createdServer;
};

process.on('unhandledRejection', err => {
    // eslint-disable-next-line no-console
	console.log(err);
	process.exit(1);
});
