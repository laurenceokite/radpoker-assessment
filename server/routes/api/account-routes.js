const router = require('express').Router();
const accounts = require('../../data/accounts.json');

router.get('/', (req, res) => {
    res.send(accounts);
});

router.get('customer/:customerId', (req, res) => {
    const associated = accounts.filter(account => (account.customer_id == req.params.customerId));
    res.send(associated);
});

router.get('/contest/:contestId', (req, res) => {
    const associated = accounts.filter(account => (account.contest_id == req.params.contestId));
    res.send(associated);
});

module.exports = router;