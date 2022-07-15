const axios = require('axios');
   
const tomarMateriales = async (data) => {
    const url = `https://api.guildwars2.com/v2/guild/${data.idClan}/treasury?access_token=${data.apiKey}`
    const response =  await axios.get(url)
    return response.data
}

module.exports = tomarMateriales