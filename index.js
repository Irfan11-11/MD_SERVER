require('dotenv').config()
const express = require('express')
const cors = require('cors')
const router = require('./Routes/router')
require('./DB/connection')

const MDserver = express()

MDserver.use(cors())
MDserver.use(express.json())
MDserver.use(router)

const PORT = 3000 || process.env.PORT

MDserver.listen(PORT, () => {
    console.log("Server Started");
})

MDserver.get("/",(req,res)=>{
    res.status(200).send(`<h1>Server Started</h1>`)
})

