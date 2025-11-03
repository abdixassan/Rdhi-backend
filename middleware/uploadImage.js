const multer = require("multer")

const storageImage = multer.diskStorage({
    destination :(req ,file ,cb ) =>{
        cb (null , "images")
    },
    filename :(req, file , cb ) =>{
        cb (null , file.originalname)
    }
    
    
})

const uploadImage = multer({
    storage:storageImage
})

module.exports = uploadImage