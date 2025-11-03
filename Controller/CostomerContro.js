const Costomermodel = require("../models/CostomerModel")
const bcrypt = require("bcryptjs");
  
const Creatcostomer = async (req , res)  => {
    try {
    
    const {name ,email ,phone ,Address , password , } = req.body 
        // cheak email
        const Cheakemail = await Costomermodel.findOne({email})
        if(Cheakemail){
           return res.status(500).send({error: "this Email already exest" })
        }
  
        const hashpassaword =  await bcrypt.hash( password, 10)

        const newDate = new Costomermodel({
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
const costomerLOgin = async (req ,res) =>{
    try {
        const {email ,password} =req.body
         
         const Cheakemail = await Costomermodel.findOne({email})
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
// get all costomers
const getCostomers = async (req, res) => {
  try {
    const costomers = await Costomermodel.find().select("-password"); 
    // select("-password") si password aan loo soo celin
    res.status(200).json(costomers);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "server error" });
  }
};

//  delate costomers
const deleteCostomer = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Costomermodel.findByIdAndDelete(id);

    if (!deleted) {
      return res.status(404).json({ error: "Costomer not found" });
    }

    res.status(200).json({ message: "✅ Costomer deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "server error" });
  }
};




module.exports = {Creatcostomer ,costomerLOgin ,getCostomers ,deleteCostomer}