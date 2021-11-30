const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");
const Tracker = require("./models/Tracker");
const User = require("./models/User");
const Team = require("./models/Team");
const app = express();
const PORT = 4000;
const DB_URL =
  "mongodb+srv://pranav:zagade1998@cluster0.gk7ox.mongodb.net/unwind?retryWrites=true&w=majority";

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true });

app.post("/register", async (req, res) => {
  const { name, age, team, username, password } = req.body;

  const checkUser = await User.findOne({ username: username });

  if (checkUser) {
    return res.json({ message: "User already exists!" });
  } else {
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      name,
      age,
      team,
      username,
      password: hashedPassword,
    });

    const user = await newUser.save();

    console.log(jwt.sign(user._id.toString(), "hfhewhfnhfn23n5in2nwfnjn2i3n"));

    return res.json({ message: "New user created!" });
  }
});

app.post("/login", async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username: username });
  const checkPassword = await bcrypt.compare(password, user.password);

  if (checkPassword) {
    return res.json({ message: "Successfully logged in!" });
  } else {
    return res.json({ message: "Invalid username or password!" });
  }
});

app.post("/tracking", async (req, res) => {
  const data = req.body;

  Object.keys(data).map(async (activity) => {
    const tracker = new Tracker({
      task: activity,
      days: data[activity],
      user: mongoose.Types.ObjectId("61a6941422e3a8f46d384d02"),
    });

    await tracker.save();
  });

  return res.json({ message: "Tracking page" });
});

app.listen(PORT, () => {
  console.log("Server running at port", PORT);
});
