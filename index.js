const express = require('express')
const routesCliente = require("./src/routes/cliente") 
const routesCachoro  = require("./src/routes/cachorro")
const database = require('./src/config/database')
// instaciar um expres

const app= express()

//middleware json - aceita json no body
app.use(express.json())

// Adicionar as rotas ao express
app.use(routesCliente)
app.use(routesCachoro)
const PORT=3000

//conexão com banco de dados;
database.db 
  .sync({ force: false })
  .then((_)  => {
    console.info("Banco conectado com sucesso")

    app.listen(PORT, ( )=> { //usando o template screnn
      console.info(`Servidor rodando a porta ${PORT}`)
    })
  })
  .catch((e) =>{                                   //erro conexão com o banco
    console.error('Conexão falhou ${e}')
  })