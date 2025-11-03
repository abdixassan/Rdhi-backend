const express =require("express")
const Ongoingproject = require("../Controller/OngoingprojectCon")
const uploadImage = require("../middleware/uploadImage")

const router = express.Router()

router.post("/Ongoingproject", uploadImage.single("imge"), Ongoingproject.creatrealsate)

// updae marki la sameesnYO
router.put("/update/Ongoingproject/:id" ,uploadImage.single("imge") , Ongoingproject.updaterealsate)
// xogata markii la soo aqrinayo
router.get("/read/Ongoingproject" ,Ongoingproject.readDate)
// xogta markii kali loo sooo helaayo
router.get("/read/Single/Ongoingproject/:id" ,Ongoingproject.readSingle)
// xogta mrkii ladeladyo
router.delete("/delate/Ongoingproject/:id" , Ongoingproject.Delate)
module.exports = router