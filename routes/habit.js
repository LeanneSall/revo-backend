const express = require("express");
const router = express.Router();
const Habit = require("../models/Habit");
require("mongoose").set("useFindAndModify", false);

router.post("/", async (req, res) => {
  const {
    userId,
    widgetId,
    name,
    consistancy,
    consistantNum,
    daysCompleted,
    date,
  } = req.body;

  try {
    habit = new Habit({
      userId,
      widgetId,
      name,
      consistancy,
      consistantNum,
      daysCompleted,
      date,
    });

    await habit.save();
    res.send(habit);
  } catch (e) {
    console.error(e.message);
    res.status(500).send("Server Error");
  }
});

router.get("/currentHabits/:id", async (req, res) => {
  try {
    const habit = await Habit.find({ userId: req.params.id });
    res.send(habit);
  } catch (e) {
    console.error(e);
  }
});

router.put("/:id", async (req, res) => {
  const habit = await Habit.findByIdAndUpdate(
    req.params.id,
    {
      $set: { consistantNum: req.body.consistantNum },
    },
    { upsert: true }
  );

  res.send(habit);
});

router.delete("/:id", async (req, res) => {
  const del = await Habit.findByIdAndDelete(req.params.id);
  res.json(del);
});

module.exports = router;
