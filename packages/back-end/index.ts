import { createServer, startServer } from './server';

createServer()
	.then(startServer)
	.catch(err => {
		// eslint-disable-next-line no-console
		console.log(err);
	});
