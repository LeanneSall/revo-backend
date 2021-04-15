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
  habit: {
    type: String,
    required: true,
  },
  consistant: {
    type: Number,
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
