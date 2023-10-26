const express = require("express");

const app = express();

app.get("/", (req, res) => {
  const obj = { test: "testing the server" };
  res.send(JSON.stringify(obj)).status(200);
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
