const Adminmodel = require("../models/AddminModel")
const bcrypt = require("bcryptjs");
  
const creatadmin = async (req , res)  => {
    try {
    
    const {name ,email ,phone ,Address , password , } = req.body 
        // cheak email
        const Cheakemail = await Adminmodel.findOne({email})
        if(Cheakemail){
           return res.status(500).send({error: "this Email already exest" })
        }
  
        const hashpassaword =  await bcrypt.hash( password, 10)

        const newDate = new Adminmodel({
            name,
            email,
            phone,
            Address,
            password :hashpassaword,
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
const adminlogin = async (req ,res) =>{
    try {
        const {email ,password} =req.body
         
         const Cheakemail = await Adminmodel.findOne({email})
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
const getadmin = async (req, res) => {
  try {
    const costomers = await Adminmodel.find().select("password"); 
    // select("-password") si password aan loo soo celin
    res.status(200).json(costomers);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "server error" });
  }
};




module.exports = {creatadmin ,adminlogin ,getadmin}