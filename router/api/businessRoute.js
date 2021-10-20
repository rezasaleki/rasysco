const router = require('express').Router();
const BusinessController = require('../../controllers/BusinessController');
const { isAuthunticated } = require('../../utils/auth');
const auth = require('../../utils/auth');

router.get('/goodsPrice/:x', auth.isAuthunticated, BusinessController.getGoodsPrice);
router.post('/create', auth.isAuthunticated, BusinessController.create);

module.exports = router;

