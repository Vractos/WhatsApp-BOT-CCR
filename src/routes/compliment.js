const express = require('express')
const router = express.Router()

const compliment = require('../controller/compliment').compliment

router.post('/', compliment)

module.exports = router
