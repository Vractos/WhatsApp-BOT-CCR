const express = require('express')
const router = express.Router()

const healthStatus = require('../controller/healthStatus').health
router.post('/', healthStatus)

module.exports = router