const axios = require('axios');
const Usersclanes = require('../models/usersclanes')

const guardarClan = async (idDc, apiKey) => {
    const repe = await Usersclanes.findOne({ apiKey: apiKey, idDc: idDc })
    if (repe) {
        return { error: 1 }
    }
    const url = `https://api.guildwars2.com/v2/account?access_token=${apiKey}`
    const usersData = await axios.get(url)
    const idClan = usersData.data.guild_leader[0]
    const clanData = {
        idDc: idDc,
        apiKey: apiKey,
        idClan: idClan
    }
    const clan = new Usersclanes(clanData)
    await clan.save()
    return { error: 0 }
}

module.exports = guardarClan