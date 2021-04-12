const express = require("express");
const app = express();

app.use(express.json({ extended: false }));
app.use("/api/habit", require("./routes/habit"));
app.use("/api/user", require("./routes/user"));
const PORT = process.env.PORT || "5000";

app.set("port", PORT);

app.listen(PORT, () => console.log(`Server Started on port: ${PORT}`));
