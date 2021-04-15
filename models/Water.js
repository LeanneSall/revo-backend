const mongoose = require("mongoose");

const WaterSchema = mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  widgetId: {
    type: Number,
    required: true,
  },
  glasses: {
    type: Array,
    of: Number,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("water", WaterSchema);
