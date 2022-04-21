const router = require('express').Router();

const contests = require('../../data/contests.json');
const accounts = require('../../data/accounts.json');

router.get('/', (req, res) => {
    res.send(contests);
});

module.exports = router;