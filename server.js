const express = require("express");
const app = express();
const cors = require("cors");
const connectDB = require("./config/db");
require("dotenv").config();

connectDB();
app.use(cors());
app.use(express.json({ extended: false }));
app.use("/api/habit", require("./routes/habit"));
app.use("/api/user", require("./routes/user"));
app.use("/api/journal", require("./routes/journal"));
const PORT = process.env.PORT || "5000";

app.set("port", PORT);

app.listen(PORT, () => console.log(`Server Started on port: ${PORT}`));
