const fs = require("fs");
const res = require("express/lib/response");


function persistir (ruta, data){
    fs.writeFile(ruta, JSON.stringify(data, null, '\t'), (error) => {
        if(error){
            console.log(error)}
    })
};

function listarPersistidos(ruta){
    fs.readFile(ruta, "utf-8", (error, contenido) => {
        if(error){
            res.send(error)
        }else{
            try {
                res.send(JSON.parse(contenido))
            }catch{
                res.send("No hay existencias")
            }

        }
    })
}

module.exports = {
    persistir,
    listarPersistidos
};