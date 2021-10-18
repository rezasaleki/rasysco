const router = require('express').Router();
const BusinessController = require('../../controllers/BusinessController');
const auth = require('../../utils/auth');

router.get('/goodsPrice/:x', auth.isAuthunticated, BusinessController.getGoodsPrice);

module.exports = router;

