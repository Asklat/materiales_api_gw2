const tomarItems = require('./tomarItems')

const swapIdName = async (materiales) => {
    for(let i = 0; i < materiales.length; i++){
        const name = await tomarItems(materiales[i].name)
        materiales[i].name = name
    }
    return materiales
}

module.exports = swapIdName