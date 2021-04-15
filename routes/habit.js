const express = require("express");
const router = express.Router();
const Habit = require("../models/Habit");

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

router.put("/:id", (req, res) => {
  res.send("make habit");
});

router.delete("/:id", (req, res) => {
  res.send("make habit");
});

module.exports = router;
