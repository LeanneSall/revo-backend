const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const User = require("../models/User");
const objectId = require("mongoose").Types.ObjectId;

router.post("/register", async (req, res) => {
  const { _id, firstName, lastName, widgetId, date } = req.body;

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
      widgetId,
      date,
    });

    await user.save();
    res.send("user saved");
  } catch (e) {
    console.error(e.message);
    res.status(500).send("Server Error");
  }
});

router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("server error");
  }
});

router.post("/", (req, res) => {
  const { _id } = req.body;

  try {
    res.send(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("server error");
  }
});

//add a widget to your dashboard
router.post("/:id/dashboard/:widget_id", async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    const widgets = user.widgetIds;
    let isDup = false;

    const duplicateExists = (widgets) => {
      widgets.forEach((item) => {
        if (item == req.params.widget_id) {
          isDup = true;
          return isDup;
        }
      });
    };
    duplicateExists(widgets);
    if (isDup) {
      res.status(200).send("This widget already exists");
      return;
    } else {
      widgets.push(req.params.widget_id);
      await user.save();
      res.send("widgets added");
    }
  } catch (e) {
    console.error(e);
  }
});

router.put("del/:userid/", async (req, res) => {
  res.send("big oof");
});

module.exports = router;
