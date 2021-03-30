const http = require("http")
const {getClients, getClientById} = require ('./controllers/clientController')


const server = http.createServer((req,res)=>{
    if(req.url==='/api/clients' && req.method === 'GET'){
        getClients(req,res)
      
    } else if(req.url.match(/\/api\/clients\/([0-9]+)/) && req.method === 'GET') {
        const id=req.url.split("/")[3]
        getClientById(req,res,id)

    } else {
        res.writeHead(400,{'Content-type':'application/json'})
        res.end(JSON.stringify({message: 'Route not found!'}))
  
    }
   
})


const PORT= 5000 || process.env.PORT
server.listen(PORT, ()=>console.log("server started on port : "+PORT) )