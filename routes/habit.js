const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
  const { userId, widgetId, habit, consistant, daysCompleted, date } = req.body;
  try {
    habit = new Habit({
      userId,
      widgetId,
      habit,
      consistant,
      daysCompleted,
      date,
    });

    await habit.save();
  } catch (e) {
    console.error(e.message);
    res.status(500).send("Server Error");
  }
});

// router.get("/", (req, res) => {
//   const { _id } = req.body;
//   try {
//     const get;
//   } catch (e) {
//     console.error(e);
//   }
// });

router.put("/:id", (req, res) => {
  res.send("make habit");
});

router.delete("/:id", (req, res) => {
  res.send("make habit");
});

module.exports = router;
