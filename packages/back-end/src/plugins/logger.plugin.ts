import Hapi from '@hapi/hapi';
import hapiPino from 'hapi-pino';

import isProduction from '../utils/isProduction';

const loggerPlugin = {
	name: 'app/loggerPlugin',
	register: async (server: Hapi.Server) => {
		const isLoggingEvents =
			process.env.CI === 'true' || process.env.TEST === 'true';

		await server.register({
			plugin: hapiPino,
			options: {
				logEvents: isLoggingEvents ? false : undefined,
				prettyPrint: !isProduction,
			},
		});
	},
};

export default loggerPlugin;
