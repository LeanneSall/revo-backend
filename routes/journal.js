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

router.put("/:id", async (req, res) => {
  const journal = await Journal.findByIdAndUpdate(
    req.params.id,
    {
      $set: { entry: req.body.entry, title: req.body.title },
    },
    { upsert: true }
  );

  res.send(journal);
});

router.delete("/:id", async (req, res) => {
  const del = await Journal.findByIdAndDelete(req.params.id);
  res.json(del);
});

module.exports = router;
