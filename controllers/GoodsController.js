const Joi = require('joi');
const jwt = require('jsonwebtoken');
const _ = require('lodash');
const RequestHandler = require('../utils/RequestHandler');
const Logger = require('../utils/logger');
// const auth = require('../utils/auth');

const logger = new Logger();
const requestHandler = new RequestHandler(logger);


class GoodsController {

    static async changeGoodsPrice(req, res) {
		try {
			let { x, y } = req.params;
			const Good = req.app.get('db').db.Good;
			await GoodsController.updateOldPriceToNewPrice(await Good.find({}), x, y, Good);
			return requestHandler.sendSuccess(res, 'User Data Extracted')({ listOfGoods :"ok" });
		} catch (error) {
			return requestHandler.sendError(req, res, error);
		}
	}

	static async index(req, res) {

	}

	static async create(req, res) {

		try {
			const body = (req.body) ?? {};
			const Good = req.app.get('db').db.Good;
			const good = new Good({
			 ... body
			});
			good.save(function (err) {
			if (err) return handleError(err);
				// saved!
			});
			return requestHandler.sendSuccess(res, 'Good Data Saved')({ good : "saved!" });
		} catch(error) {
			return requestHandler.sendError(req, res, error);
		}

	}

	static async update(req, res) {

	}

	static async destroy(req, res) {

	}

	static async updateOldPriceToNewPrice(listOfGoods, oldPrice, newPrice, Good) {
		await Good.update({},
		{ $set: { "priceHistory.$[].PriceUnit" : newPrice } },
		{
		  multi: true,
		});
	}
    
}


module.exports = GoodsController;