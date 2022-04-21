const router = require('express').Router();

const accountRoutes = require('./account-routes');
const contestRoutes = require('./contest-routes');
const customerRoutes = require('./customer-routes');

router.use('/accounts', accountRoutes);
router.use('/contests', contestRoutes);
router.use('/customers', customerRoutes);

module.exports = router;