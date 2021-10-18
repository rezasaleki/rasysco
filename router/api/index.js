const router = require('express').Router();

router.use('/tests', require('./testsRouter'));
router.use('/business', require('./businessRoute'));
router.use('/goods', require('./goodsRoute'));

module.exports = router;