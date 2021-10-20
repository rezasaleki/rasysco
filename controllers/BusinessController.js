const Joi = require('joi');
const jwt = require('jsonwebtoken');
const _ = require('lodash');
const validator = require('validator');
const RequestHandler = require('../utils/RequestHandler');
const Logger = require('../utils/logger');
// const auth = require('../utils/auth');

const logger = new Logger();
const requestHandler = new RequestHandler(logger);

class BusinessController {

    static async getGoodsPrice(req, res) {
		try {
			const Busines = req.app.get('db').db.Busines;
			const listOfBusiness = await Busines.aggregate([
				// { $match: {
				// 	barcode: {
				// 			$in: ["6269494400190"]
				// 		}
				// 	}
				// },
				{ $lookup:
					{
					  from: 'goods',
					  localField: '_id',
					  foreignField: 'businessId',
					  as: 'goodsdetails'
					}
				}
			]);

			return requestHandler.sendSuccess(res, 'Busines Data Listed')({ listOfFillterGoods: await BusinessController.findMaxPriceUnit(listOfBusiness, req.params.x) });
		} catch (error) {
			return requestHandler.sendError(req, res, error);
		}
	}

	static async index(req, res) {

	}

	static async create(req, res) {
		try {
			const body = (req.body) ?? {};
			const Busines = req.app.get('db').db.Busines;
			const busines = new Busines({
			 ... body
			});
			busines.save(function (err) {
			if (err) return handleError(err);
				// saved!
			});
			return requestHandler.sendSuccess(res, 'Busines Data Created')({ status : "saved!" });
		} catch(error) {
			return requestHandler.sendError(req, res, error);
		}
			
	}

	static async update(req, res) {

	}

	static async destroy(req, res) {

	}

	static async findMaxPriceUnit(listOfBusiness, price) {
		let listOfFillterGoods = [];
		for (let item of listOfBusiness) {
			item['goodsdetails'].map((good) => {
				let max = good.priceHistory.reduce(function (p, v) {
					return ( p.PriceUnit > v.PriceUnit ? p.PriceUnit : v.PriceUnit );
				});
				good['maxPriceUnit'] = max;
			});
			listOfFillterGoods = item['goodsdetails'].filter(x => x.maxPriceUnit >= price);
		}
		return listOfFillterGoods;
	}
}

module.exports = BusinessController;