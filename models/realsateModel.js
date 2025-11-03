const mongoose = require("mongoose");

const realstateScema  = mongoose.Schema({
Announcement: { type: String, required: true },
location: { type: String, required: true },
price: { type: String, required: true },
prImage: { type: String, required: true },
})
module.exports = mongoose.model("realsatet", realstateScema);
