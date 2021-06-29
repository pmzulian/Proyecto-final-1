let admin = false;
let user = true;

const loggerAdmin = (req, res, next) =>{
    if(admin === true && user === true){
        next()
    }else{
        res.send("No es administrador")
    }
}

const loggerUser = (req, res, next) =>{
    if(user === true){
        next()
    }else{
        res.send("No es usuario registrado")
    }
}


module.exports = {
    loggerAdmin,
    loggerUser
};