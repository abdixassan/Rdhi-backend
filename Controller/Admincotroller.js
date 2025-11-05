const scemaadmin = require ("../models/AdminModel")
const bcrypt = require("bcryptjs");
  
const admincreate = async (req , res)  => {
    try {
    
    const {name ,email ,phone ,Address , password , } = req.body 
        // cheak email
        const Cheakemail = await scemaadmin.findOne({email})
        if(Cheakemail){
           return res.status(500).send({error: "this Email already exest" })
        }
  
        const hashpassaword =  await bcrypt.hash( password, 10)

        const newDate = new scemaadmin({
            name,
            email,
            phone,
            Address,
            password :hashpassaword,
            prImage : req.file ? req.file.filename : null

            })
        const saveDate =  await newDate.save() 
        if (saveDate) {
             res.send(saveDate)
        }

    } catch (error) {
        console.log(error)
      return  res.status(400).json({error : "server error"})
        
    }
}
// log in costomers
const adminLOgin = async (req ,res) =>{
    try {
        const {email ,password} =req.body
         
         const Cheakemail = await scemaadmin.findOne({email})
        if(!Cheakemail){
          return  res.status(500).send({error: "envailte email" })
        }
        // cheak pasaword 
        const cheakpassword = await bcrypt.compare(password , Cheakemail.password)
        if (!cheakpassword) {
           return res.status(500).send({error: "envailte password" })
        }
        res.send({
            message: "sucsess login",
            Costomer :{
                name :Cheakemail.name,
                Address :Cheakemail.Address,
                phone :Cheakemail.phone,
                email :Cheakemail.email,
          }
        })

     } catch (error) {
        console.log(error)
       return  res.status(400).json({error : "server error"})
    }
}

//  get all cotomers 





module.exports = {adminLOgin , admincreate}