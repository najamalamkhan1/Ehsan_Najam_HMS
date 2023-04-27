const express = require('express');
const router = express.Router()
const foodItem = require('../models/Food.model')
router.get('/', (req, res) => {
    foodItem.find()
        .then(foodItem=> res.json(foodItem))
        .catch(err => res.json(err))
})
router.post('/add', (req, res) => {
    const newFoodItem = req.body
    food.create(newFoodItem).then(
        food=> res.json(food)
    ).catch(
        err => res.json(err)
    )
})

module.exports = router;