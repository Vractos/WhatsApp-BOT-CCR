const express = require('express')
const router = express.Router()

const protest = require('../controller/protest').protest

router.post('/', protest)

module.exports = router