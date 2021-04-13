const mongoose = require("mongoose");

const HabitSchema = mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  habit: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("habit", HabitSchema);
