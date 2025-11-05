const express = require("express")
const Admincotroller = require("../Controller/Admincotroller")
const router = express.Router()
router.post("/create/addmin" ,Admincotroller.admincreate)
router.post("/login/addmin" ,Admincotroller.adminLOgin)
module.exports = router
