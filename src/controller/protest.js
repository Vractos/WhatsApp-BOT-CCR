exports.protest = function (req, res, next) {
    res.send({
        "actions": [
            {
                "say": "Obrigado pela contribuição, é muito importante para nós!"
            }
        ]
    }).status(200)
}