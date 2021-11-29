const mongoose = require("mongoose");

const User = new mongoose.Schema({
  name: String,
  username: String,
  password: { type: String, min: 6 },
  team: { type: mongoose.Schema.Types.ObjectId, ref: "Team" },
  created: { type: Date, default: new Date() },
});

module.exports = mongoose.model("User", User);
