const express = require('express')
const router = express.Router()

router.post('/', function (req, res, next) {
    res.send({
        "actions": [
            {
                "say": "Obrigado pelo elogio!"
            },{
                listen: false
            }
        ]
    }).status(200)
})

module.exports = router
