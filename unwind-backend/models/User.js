const mongoose = require("mongoose");

const User = new mongoose.Schema({
  name: String,
  age: { type: Number, default: null },
  username: String,
  password: { type: String, min: 6 },
  // team: { type: mongoose.Schema.Types.ObjectId, ref: "Team", default: null },
  team: { type: String, default: null },
  created: { type: Date, default: new Date() },
});

module.exports = mongoose.model("User", User);
