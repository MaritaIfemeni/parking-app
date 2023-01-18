const express = require("express");
const app = express();
const port = 9999;
const areasRouter = require("./routes/areasRouter.js");
const personsRouter = require("./routes/personsRouter.js");
const cors = require("cors");

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "ok" });
});

app.use("/areas", areasRouter);
app.use((err, req, res, next) => {
  const status = err.status || 500;
  console.error(err.message, err.stack);
  res.status(status).json({ message: err.message });
  return;
});

app.use("/persons", personsRouter);
app.use((err, req, res, next) => {
  const status = err.status || 500;
  console.error(err.message, err.stack);
  res.status(status).json({ message: err.message });
  return;
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
