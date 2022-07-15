const fs = require('fs');

const writeFile = (content) => {
    console.log(content)
    let string = 'Gente esto son los materiales necesarios para mejoras del clan, si podéis aportar lo que podáis/queráis viene genial. Quien vaya aportar algo susurrarme (Algama.9023) o escribir directamente por aquí. Un placer.\n\n'
    content.forEach(element => {
        string += element.name + ': ' + element.countTotal + '\n'
    });

    try{
        fs.writeFileSync('materialesFaltantes.txt', string);
    }catch (e){
        console.log("Cannot write file ", e);
    }
}

module.exports = writeFile