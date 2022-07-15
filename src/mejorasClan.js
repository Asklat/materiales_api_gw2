const axios = require('axios');

const mejorasClan = async (data) => {
    const url = `https://api.guildwars2.com/v2/guild/${data.idClan}/upgrades?access_token=${data.apiKey}`
    const response =  await axios.get(url)
    return response.data
}

module.exports = mejorasClan