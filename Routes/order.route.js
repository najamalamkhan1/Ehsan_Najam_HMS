const express = require('express')
const router = express.Router();
const orderModel = require('../models/Order.model')

router.get('/', (req, res) => {
    orderModel.findOne().then(
        orderModel => res.json(orderModel)
    ).catch(
        err => res.json(err)
    )
})
module.exports = router;