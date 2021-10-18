const router = require('express').Router();

router.use('/api/v1', require('./api'));
router.use('/api/v2',  require('./api_v2'));

module.exports = router;