import Boom from '@hapi/boom';
import { Lifecycle } from 'hapi__hapi';

import isProduction from './isProduction';

const failAction: Lifecycle.FailAction = (request, h, error) => {
	if (isProduction) {
		// In prod, log a limited error message and throw the default Bad Request error.
		throw Boom.badRequest(`Invalid request payload input`);
	} else {
		// During development, log and respond with the full error.
		console.error(error);
		throw error;
	}
};

export default failAction;
