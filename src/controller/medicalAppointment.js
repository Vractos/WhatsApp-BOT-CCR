exports.markAppointment = function (req, res) {
    res.send({
        "actions": [
            {
                "say": "Sua consulta foi agendada!"
            },{
                listen: false
            }
        ]
    }).status(200)
}