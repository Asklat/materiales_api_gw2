const Itemsmejoraclan = require('../models/itemsmejoraclan')
const api = require('./api')

async function refrescar(idDc){
    const data = await api(idDc)
    const idClan = data[0].idClan
    await data.forEach(async e => {
        const repe = await Itemsmejoraclan.findOne({name:e.name, idClan:e.idClan})
        if(repe){
            if(e.count != repe.count || e.countNeed != repe.countNeed || e.countTotal != repe.countTotal || e.idClan != repe.idClan){
                repe.count = e.count
                repe.countNeed = e.countNeed
                repe.countTotal = e.countTotal
                repe.idClan = e.idClan
                await repe.save()
            }            
        }else{
            const item = new Itemsmejoraclan(e)
            await item.save()
        }
    })
    return idClan
}

module.exports = refrescar