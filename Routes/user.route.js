const express = require('express')
const router = express.Router()
const userModel = require('../models/Users.model')

router.get('/',()=>{
    userModel.find()
    .then(userModel=>res.json(userModel))
    .catch(err=>res.json('error list',err));
})

module.exports = router;
