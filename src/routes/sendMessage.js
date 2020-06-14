const express = require('express')
const router = express.Router()
require('dotenv').config()

const {
    ACCOUNTSID: accountSid,
    AUTH_TOKEN: authToken
} = process.env
const client = require('twilio')(accountSid, authToken);


router.use('/', function (req, res, next) {
    console.log(req.body)
    client.messages
        .create({
            body: 'Olá caminhoneiro😃',
            from: 'whatsapp:+14155238886',
            to: `${req.body.From}`
        })

    client.messages
        .create({
            body: 'Olá caminhoneiro😃2',
            from: 'whatsapp:+14155238886',
            to: `${req.body.From}`
        })
        .done();
    res.send("oK")
})

module.exports = router
