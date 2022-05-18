const router = require('express').Router();
const controller = require('../controller/googleController');

router.get('/price/matrix', controller.getPriceMatrix);
router.get('/price/davines', controller.getPriceDavines);
router.get('/price/schwarzkopf', controller.getPriceSchwarzkopf);
router.get('/decompose', controller.getDecompose);

module.exports = router;
