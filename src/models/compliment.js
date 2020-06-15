const mongoose = require('mongoose')

const ComplimentSchema = new mongoose.Schema({
    date: {
        type: Date,
        default: Date.now
    },
    protest: {
        type: String
    }
})

const Compliment = mongoose.model('Compliment', ComplimentSchema);

module.exports = Compliment