const express = require("express")
const mongoose = require ("mongoose")
const cors = require ("cors")
const realsate  = require("./Router/routerrealsate")
const costomer  = require("./Router/costomerRouter")
const Addmin  = require("./Router/AddminRouter")
const Ongoingproject  = require("./Router/OngoingprojectRouter")
const completeproject  = require("./Router/completeprojectRouter")

require("dotenv").config()

const app = express()
app.use(cors())
app.use(express.json())

// routeska 
app.use(realsate)
app.use(costomer)
app.use(Addmin)
app.use(Ongoingproject)
app.use(completeproject)

// Static folder
app.use("/Allimage" ,express.static ("images"))

const Prot  = process.env.Prot || 2009

mongoose.connect(process.env.mongodb_url).then(() =>{
    console.log('is conenctted mongo',)
})

app.listen(Prot , () => console.log(`server is on ${Prot}`))
