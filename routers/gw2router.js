const express = require('express')
const cors = require('cors')
const router = new express.Router()
const Itemsmejoraclan = require('../models/itemsmejoraclan')
const refrescar = require('../src/refrescar')
const guardarClan = require('../src/guardarClan')

router.get('/api/mejorasclan', cors(), async (req, res) => {
    const idDc = req.query.idDc
    const idClanData = await refrescar(idDc)
    const data = await Itemsmejoraclan.find({idClan:idClanData})
    res.send(data)
})

router.get('/api/setApikey', cors(), async (req, res) => {
    const idDc = req.query.idDc
    const apiKey = req.query.apiKey
    const data = {error: 0}
    try{
        const error = await guardarClan(idDc,apiKey)
        if(error.error = 1){
            data.error = 2
        }
    }catch(e){
        data.error = 1
    }
    res.send(data)
})

router.get('/api/mejorasclan/delete', cors(), async (req, res) => {
    const id = req.query.id
    const item = await Itemsmejoraclan.findById(id)
    await item.delete()
    res.status(200).send()
})
module.exports = router