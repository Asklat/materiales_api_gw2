const mongoose = require('mongoose')

const usersclanesSchema = new mongoose.Schema({
    idDc: {
        type: String,
        required: true,
        unique: true
    },
    apiKey:{
        type: String,
        required: true,
        unique: true
    },
    idClan:{
        type: String,
        required: true,
        unique: true
    }
})

const Usersclanes = mongoose.model('Usersclanes', usersclanesSchema)

module.exports = Usersclanes