const mongoose = require('mongoose')

const appointmentSchema = new mongoose.Schema({
    medical: String,
    appointment: Number
})

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    cpf: {
        type: Number,
        required: true
    },
})

const User = mongoose.model('User', UserSchema);

module.exports = User