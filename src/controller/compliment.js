exports.compliment = function (req, res, next) {
    console.log(req.body.Memory)
    res.send({
        "actions": [
            {
                "say": "Obrigado pelo elogio!"
            }
        ]
    }).status(200)
}