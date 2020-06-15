exports.compliment = function (req, res, next) {
    res.send({
        "actions": [
            {
                "say": "Obrigado pelo elogio!"
            }
        ]
    }).status(200)
}