const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const User = require("../models/User");
const objectId = require("mongoose").Types.ObjectId;

router.post("/register", async (req, res) => {
  const { _id, firstName, lastName, date } = req.body;

  try {
    //  let user = await User.findOne({ email });

    // const y = new ObjectId(id);
    // if (user) {
    //     return res.status(400).json({ msg: 'User already exists' })
    // }

    user = new User({
      _id,
      firstName,
      lastName,
      date,
    });

    await user.save();
    res.send("user saved");
  } catch (e) {
    console.error(e.message);
    res.status(500).send("Server Error");
  }
});

router.post("/", (req, res) => {
  const { _id } = req.body;

  try {
    //See if user exists
    // let user = await User.findOne({ email })
    //if user exists send back an error
    // if (!user) {
    //   return res.status(400).json({ errors: [{ msg: "Invalid Credentials" }] });
    // }
    //Anything that returns a promise should be async
    //make sure password matches
    res.send(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("server error");
  }
});

router.put("/:id", (req, res) => {
  res.send("make habit");
});

router.delete("/:id", (req, res) => {
  res.send("make habit");
});

module.exports = router;
