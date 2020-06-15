const mongoose = require('mongoose')

const ProtestSchema = new mongoose.Schema({
    date: {
        type: Date,
        default: Date.now
    },
    protest: String
})

const Protests = mongoose.model('Protests', ProtestSchema);

module.exports = Protests