const router = require('express').Router();
const customers = require('../../data/customers.json');
const accounts = require('../../data/accounts.json');

router.get('/', (req, res) => {
    res.send(customers);
});

router.get('/customer/:id', (req, res) => {
    const customer = customers.find(customer => (customer.id = req.params.id));
    const associated = accounts.filter(account => (account.customer_id == req.params.id));
    res.json({"customer": customer, "accounts": [associated]});
})


module.exports = router;