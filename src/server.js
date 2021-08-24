const express = require('express') /*Importa express*/
const route = require('./route') /*Importa route*/
const path = require('path') /*Serve para direcionar server.set para a pasta correta de views*/

const server = express() /*Cria servidor executando express*/

server.set('view engine', 'ejs')

server.use(express.static("public"))

server.set('views', path.join(__dirname, 'views'))

server.use(express.urlencoded({extended: true}))

server.use(route)

server.listen(3000, () => console.log("RODANDO"))
