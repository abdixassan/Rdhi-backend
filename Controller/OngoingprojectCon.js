const Ongoingproject =require("../models/OngoingprojectModel")

// craete Date 
const creatrealsate = async (req ,res ) =>{
    try {
         const NewDate =  Ongoingproject({
            Announcement :req.body.Announcement,
            prImage : req.file ? req.file.filename : null
         })
         const saveDate =await NewDate.save() 
         if (saveDate) {
            res.send(saveDate)
         }
    } catch (error) {
        res.status(500).send("eror Console ")
    }
}
 
// read Date 

const readDate = async (req,res )=>{
    const getDate =await Ongoingproject.find()
    if (getDate) {
    res.send(getDate)
    }

}

// update markaa sameenesid
   const updaterealsate = async (req ,res ) =>{
    try {
         const putDate =await Ongoingproject.updateOne(
            {_id : req.params.id},
            {
            $set: {
            Announcement :req.body.Announcement,
            prImage : req.file ? req.file.filename :undefined
                }
            }
         )
         if (putDate) {
            res.send("sucess update")
         }
    } catch (error) {
        res.status(500).send("eror Console ")
        
    }
   }

     // read singe date 
      const readSingle =async (req, res) =>{
        const singileDate =await Ongoingproject.findById(req.params.id)
        if (singileDate) {
             res.send(singileDate)
        }
      }

      
    //   delate 
    const Delate  =async(req ,res ) =>{
        const removeProduct = await Ongoingproject.deleteOne(
            {_id: req.params.id}
        )
        if (removeProduct) {
             res.send("sucess dalet")
        }
    }
 module.exports = {creatrealsate , readDate ,updaterealsate , readSingle , Delate}