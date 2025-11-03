const express = require("express")
const costomerControler = require("../Controller/CostomerContro")
const uploadImage = require("../middleware/uploadImage")
const router = express.Router()
router.post("/create/Costomer" , uploadImage.single("imagess"),costomerControler.Creatcostomer)
router.post("/login/Costomer" ,costomerControler.costomerLOgin)
router.get("/get/Costomer" ,costomerControler.getCostomers)
router.delete("/delate/cosmers/:id" , costomerControler.deleteCostomer)

module.exports = router