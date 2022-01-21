const fetch = require('node-fetch');
const express = require("express");
const path = require("path");

const app = express();

const rootDir = __dirname + "/dist/weather-app";

app.use(express.static(rootDir));


// Workound: Same-Origin-Policy
// HTTP Ajax calls are not allowed from HTTPS host so we bypass the calls
// through this local server instead of calling it directly from within Angular.
app.get("/api/cities", async (req, res) => {
  const { namePrefix } = req.query;
  const response = await fetch('http://geodb-free-service.wirefreethought.com/v1/geo/cities?namePrefix=' + namePrefix);
  res.json( await response.json());
});

app.get("/*", function (req, res) {
  res.sendFile(path.join(rootDir + "/index.html"));
});

app.listen(process.env.PORT || 8080);
