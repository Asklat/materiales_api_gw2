const mongoose = require('mongoose')

const itemsmejoraclanSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    count:{
        type: Number,
        required: true
    },
    countNeed:{
        type: Number,
        required: true
    },
    countTotal:{
        type: Number,
        required: true
    },
    idClan:{
        type: String,
        required: true
    }
})

const Itemsmejoraclan = mongoose.model('Itemsmejoraclan', itemsmejoraclanSchema)

module.exports = Itemsmejoraclan