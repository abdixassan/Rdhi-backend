const mongoose = require("mongoose");

const OngoingprojectSchema  = mongoose.Schema({
Announcement: { type: String, required: true },
prImage: { type: String, required: true },
})
module.exports = mongoose.model("Ongoingproject", OngoingprojectSchema);
