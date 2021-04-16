const mongoose = require("mongoose");

const JournalSchema = mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  widgetId: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
  },
  entry: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("journal", JournalSchema);
