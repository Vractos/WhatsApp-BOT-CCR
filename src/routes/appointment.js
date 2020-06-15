const express = require('express')
const router = express.Router()

const medicalAppointment = require('../controller/medicalAppointment').markAppointment

router.post('/', medicalAppointment)

module.exports = router
