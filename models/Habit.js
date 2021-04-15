const mongoose = require("mongoose");

const HabitSchema = mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  widgetId: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  consistancy: {
    type: String,
    required: true,
  },
  consistantNum: {
    type: Number,
    default: 0,
  },
  daysCompleted: {
    type: Map,
    of: Date,
  },
  startDate: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("habit", HabitSchema);
