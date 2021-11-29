const mongoose = require("mongoose");

const Team = new mongoose.Schema({
  name: String,
  members: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  created: { type: Date, default: new Date() },
});

module.exports = mongoose.model("Team", Team);
