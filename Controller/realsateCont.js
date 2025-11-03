const realsatemodel =require("../models/realsateModel")

// craete Date 

const creatrealsate = async (req ,res ) =>{
    try {
         const NewDate =  realsatemodel({
            Announcement :req.body.Announcement,
            location :req.body.location,
            price :req.body.price,
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
    const getDate =await realsatemodel.find()
    if (getDate) {
    res.send(getDate)
    }

}

// update markaa sameenesid
   const updaterealsate = async (req ,res ) =>{
    try {
         const putDate =await realsatemodel.updateOne(
            {_id : req.params.id},
            {
            $set: {
            Announcement :req.body.Announcement,
            location :req.body.location,
            price :req.body.price,
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
        const singileDate =await realsatemodel.findById(req.params.id)
        if (singileDate) {
             res.send(singileDate)
        }
      }

      
    //   delate 
    const Delate  =async(req ,res ) =>{
        const removeProduct = await realsatemodel.deleteOne(
            {_id: req.params.id}
        )
        if (removeProduct) {
             res.send("sucess dalet")
        }
    }
 module.exports = {creatrealsate , readDate ,updaterealsate , readSingle , Delate}