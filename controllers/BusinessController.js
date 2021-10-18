const Joi = require('joi');
const jwt = require('jsonwebtoken');
const _ = require('lodash');
const RequestHandler = require('../utils/RequestHandler');
const Logger = require('../utils/logger');
// const auth = require('../utils/auth');

const logger = new Logger();
const requestHandler = new RequestHandler(logger);

class BusinessController {

    static async getGoodsPrice(req, res) {
		try {
			// const Good =  req.app.get('db').db.goods;
			const Busines = req.app.get('db').db.business;

			console.log('Goods', await Busines.find());

			// db.getCollection('businesses').aggregate([{
			// 	$lookup: {
			// 		from: "goods", // collection name in db
			// 		localField: "_id",
			// 		foreignField: "businessId",
			// 		as: "goods"
			// 	} 
			
			// const reqParam = req.params.id;
			// const schema = {
			// 	id: Joi.number().integer().min(1),
			// };
			// const { error } = Joi.validate({ id: reqParam }, schema);
			// requestHandler.validateJoi(error, 400, 'bad Request', 'invalid Busines x');

			// const result = await super.getById(req, 'Users');
			return requestHandler.sendSuccess(res, 'User Data Extracted')({ busines : Busines });
		} catch (error) {
			return requestHandler.sendError(req, res, error);
		}
	}
}



module.exports = BusinessController;