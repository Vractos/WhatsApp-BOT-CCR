const mongoose = require('mongoose')

const ProtestSchema = new mongoose.Schema({
    date: {
        type: Date,
        default: Date.now
    },
    protest: {
        type: String
    }
})

const Protest = mongoose.model('Protest', ProtestSchema);

module.exports = Protest