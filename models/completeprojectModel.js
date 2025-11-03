const mongoose = require("mongoose");

const completeprojectShema  = mongoose.Schema({
Announcement: { type: String, required: true },
prImage: { type: String, required: true },
})
module.exports = mongoose.model("completeproject", completeprojectShema);
