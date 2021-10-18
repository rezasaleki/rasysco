const router = require('express').Router();
const GoodsController = require('../../controllers/GoodsController');
const auth = require('../../utils/auth');

router.patch('/changePrice/:x/:y', auth.isAuthunticated, GoodsController.changeGoodsPrice);

module.exports = router;
