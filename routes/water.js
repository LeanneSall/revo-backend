const express = require("express");
const router = express.Router();
const Water = require("../models/Water");

router.post("/", async (req, res) => {
  const { userId, widgetId, glasses, date } = req.body;

  try {
    water = new Water({
      userId,
      widgetId,
      glasses,
      date,
    });

    await water.save();
    res.send(water);
  } catch (e) {
    console.error(e.message);
    res.status(500).send("Server Error");
  }
});

router.get("/currentwater/:id", async (req, res) => {
  try {
    const water = await Water.find({ userId: req.params.id });
    res.send(water);
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
