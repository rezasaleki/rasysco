const Joi = require('joi');
const jwt = require('jsonwebtoken');
const _ = require('lodash');
const RequestHandler = require('../utils/RequestHandler');
const Logger = require('../utils/logger');
// const auth = require('../utils/auth');

const logger = new Logger();
const requestHandler = new RequestHandler(logger);

class TestsController {
	
	static async index(req, res) {

	}

	static async create(req, res) {

	}

	static async update(req, res) {

	}

	static async destroy(req, res) {

	}

}

module.exports = TestsController;