const express =require("express")
const realsateCont = require("../Controller/realsateCont")
const uploadImage = require("../middleware/uploadImage")

const router = express.Router()

router.post("/realsate", uploadImage.single("imge"), realsateCont.creatrealsate)

// updae marki la sameesnYO
router.put("/update/realsate/:id" ,uploadImage.single("imge") , realsateCont.updaterealsate)
// xogata markii la soo aqrinayo
router.get("/read/realsate" ,realsateCont.readDate)
// xogta markii kali loo sooo helaayo
router.get("/read/Single/product/:id" ,realsateCont.readSingle)
// xogta mrkii ladeladyo
router.delete("/delate/product/:id" , realsateCont.Delate)
module.exports = router