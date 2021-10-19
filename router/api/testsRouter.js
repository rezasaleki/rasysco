const router = require('express').Router();
const TestsController = require('../../controllers/TestsController');
const auth = require('../../utils/auth');

router.get('/index', auth.isAuthunticated, TestsController.index);

module.exports = router;




