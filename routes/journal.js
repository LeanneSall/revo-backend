const express = require("express");
const router = express.Router();
const Journal = require("../models/Journal");

router.post("/", async (req, res) => {
  const { userId, widgetId, title, entry, date } = req.body;

  try {
    journal = new Journal({
      userId,
      widgetId,
      title,
      entry,
      date,
    });

    await journal.save();
    res.send(journal);
  } catch (e) {
    console.error(e.message);
    res.status(500).send("Server Error");
  }
});

router.get("/currentjournals/:id", async (req, res) => {
  try {
    const journal = await Journal.find({ userId: req.params.id });
    res.send(journal);
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
