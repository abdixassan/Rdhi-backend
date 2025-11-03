const express = require("express")
const Addmincontroler = require("../Controller/Admincotroller")
const router = express.Router()
router.post("/create/addmin" , Addmincontroler.creatadmin)
router.post("/login/addmin" ,Addmincontroler.adminlogin)
router.get("/get/login" ,Addmincontroler.getadmin)

module.exports = router