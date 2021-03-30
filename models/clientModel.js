const clients = require("../data/Clients")

function findAll(){
    return new Promise((resolve,reject)=>{
        resolve(clients)

    }) 
}
function findClientById(id){
    return new Promise((resolve,reject)=>{
       const client = clients.find((p)=>p.id===id)
       resolve(client)
    }) 
}

module.exports={
    findAll,
    findClientById
}
