const Joi = require('joi');
const jwt = require('jsonwebtoken');
const _ = require('lodash');
const RequestHandler = require('../utils/RequestHandler');
const Logger = require('../utils/logger');
// const auth = require('../utils/auth');

const logger = new Logger();
const requestHandler = new RequestHandler(logger);

class TestsController {
	
	static async get(req, res) {
		try {
			// const reqParam = req.params.id;
			// const schema = {
			// 	id: Joi.number().integer().min(1),
			// };
			// const { error } = Joi.validate({ id: reqParam }, schema);
			// requestHandler.validateJoi(error, 400, 'bad Request', 'invalid User Id');

			// const result = await super.getById(req, 'Users');
			return requestHandler.sendSuccess(res, 'User Data Extracted')({ user: 1 });
		} catch (error) {
			return requestHandler.sendError(req, res, error);
		}
	}

}

module.exports = TestsController;