const express = require("express");
const path = require("path");

const app = express();

const rootDir = __dirname + "/dist/weather-app";

app.use(express.static(rootDir));

app.get("/*", function (req, res) {
  res.sendFile(path.join(rootDir + "/index.html"));
});

app.listen(process.env.PORT || 8080);
