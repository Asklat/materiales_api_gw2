const mejorasTerminadas = require('./mejorasClan')
const tomarMateriales = require('./tomarMateriales')
const swapIdName = require('./swapIdName')
const Usersclanes = require('../models/usersclanes')

async function devolverMateriales(idDc) {

    try {
        const data = await Usersclanes.findOne({ idDc: idDc })
        if (!data) {
            return { error: 1 }
        }
        const mejoras = await mejorasTerminadas(data)
        const materiales = await tomarMateriales(data)

        let content = []
        for (let i = 0; i < materiales.length; i++) {

            const found = materiales[i].needed_by.filter(element => !mejoras.includes(element.upgrade_id))
            let total = 0
            found.forEach(element => {
                total = total + element.count
            })

            content.push({
                name: materiales[i].item_id,
                count: materiales[i].count,
                countNeed: total,
                countTotal: (total - materiales[i].count),
                idClan: data.idClan
            })
        }
        content = content.filter(e => e.countTotal !== 0)
        content = await swapIdName(content)
        return content
    } catch (e) {
        return { error: 1 }
    }
}

module.exports = devolverMateriales