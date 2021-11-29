const mongoose = require("mongoose");

const Tracker = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  task: String,
  days: Array,
  created: { type: Date, default: new Date() },
});

module.exports = mongoose.model("Tracker", Tracker);
