require("dotenv").config()
const express = require("express")
const mongoose = require ("mongoose")
const cors = require ("cors")
const realsate  = require("./Router/routerrealsate")
const costomer  = require("./Router/costomerRouter")
const Addmin  = require("./Router/AddminRouter")
const Ongoingproject  = require("./Router/OngoingprojectRouter")
const completeproject  = require("./Router/completeprojectRouter")


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

const PORT = process.env.PORT || 2009;

// mongoose.connect(process.env.MONGODB_URL).then(() =>{
//     console.log('is conenctted mongo',)
// })
mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  tls: true
})
.then(() => console.log("✅ MongoDB connected"))
.catch(err => console.error("❌ MongoDB connection error:", err));

app.listen(PORT , () => console.log(`server is on ${PORT}`))
