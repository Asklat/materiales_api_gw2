const config = require('./global')
const express = require('express')
const refrescar = require('./src/refrescar')
const timer = require('./src/timebucle')
require('./db/mongoose')
const gw2Router = require('./routers/gw2router')

const app = express()

const host = config.HOST
const port = config.PORT

app.use(express.json())
app.use(gw2Router)

app.listen(port, () => {
    console.log(`Servidor abierto en el puerto http://${host}:${port}/`)
})

//setInterval(refrescar, timer(0.1));