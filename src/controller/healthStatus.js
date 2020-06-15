exports.health = async function (req, res, next) {
    res.send({
        "actions": [
            {
                "say": "Ponto está disponível neste mês, aguardamos você!"
            }
        ]
    }).status(200)
}