const fs = require("fs");

function persistir (ruta, data){
    fs.writeFile(ruta, JSON.stringify(data, null, '\t'), (error) => {
        if(error){
            console.log(error)}
    })
};

module.exports = persistir;