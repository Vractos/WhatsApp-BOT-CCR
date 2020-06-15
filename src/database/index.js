const mongoose = require('mongoose')

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/ccr-data', {
    useMongoClient: true
}).then(() => {
    console.log("Server rodando")
}).catch((err) => {
    console.log(`Houve o seguinte erro: ${err}`)
})

module.exports = mongoose;