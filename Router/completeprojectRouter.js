const express =require("express")
const completeproject = require("../Controller/completeprojectConto")
const uploadImage = require("../middleware/uploadImage")

const router = express.Router()

router.post("/completeproject", uploadImage.single("imge"), completeproject.creatrealsate)

// updae marki la sameesnYO
router.put("/update/completeproject/:id" ,uploadImage.single("imge") , completeproject.updaterealsate)
// xogata markii la soo aqrinayo
router.get("/read/completeproject" ,completeproject.readDate)
// xogta markii kali loo sooo helaayo
router.get("/read/Single/completeproject/:id" ,completeproject.readSingle)
// xogta mrkii ladeladyo
router.delete("/delate/completeproject/:id", completeproject.Delate);

module.exports = router