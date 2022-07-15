const axios = require('axios');
   
async function tomarItems(id) {
    const url = `https://api.guildwars2.com/v2/items/${id}?lang=es`
    const response =  await axios.get(url)
    return response.data.name
}

module.exports = tomarItems
