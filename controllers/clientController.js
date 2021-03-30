const Client= require("../models/clientModel")

async function getClients(req,res){
    try {
        const clients = await Client.findAll()
        res.writeHead(200,{'Content-type':'application/json'})
        res.end(JSON.stringify(clients))
    } catch (error) {
        console.log(error);
    }

}
async function getClientById(req,res,id){
    try {
        const client = await Client.findClientById(id)
        if(!client){
            res.writeHead(404,{'Content-type':'application/json'})
            res.end(JSON.stringify({message : "Client not found"}))
        } else {
            res.writeHead(200,{'Content-type':'application/json'})
            res.end(JSON.stringify(client))
        }
        
    } catch (error) {
        console.log(error);
    }

}

module.exports = {
  getClients,
  getClientById
}
