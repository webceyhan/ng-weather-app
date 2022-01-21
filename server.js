const fetch = require("node-fetch");
const express = require("express");
const path = require("path");

const app = express();

const rootDir = __dirname + "/dist/weather-app";

app.use(express.static(rootDir));

// Workound: Same-Origin-Policy
// HTTP Ajax calls are not allowed from HTTPS host so we bypass the calls
// through this local server instead of calling it directly from within Angular.
app.get("/api/weather", async (req, res) => {
  const url = new URL("https://api.openweathermap.org/data/2.5/weather");

  url.search = new URLSearchParams({
    units: "metric",
    appid: "591dacc7a16f386b0ac67b3d4b901aad",
    q: req.query.city,
  });

  const response = await fetch(url);
  res.json(await response.json());
});

// Workound: Same-Origin-Policy
// HTTP Ajax calls are not allowed from HTTPS host so we bypass the calls
// through this local server instead of calling it directly from within Angular.
app.get("/api/forecast", async (req, res) => {
  const url = new URL("https://api.openweathermap.org/data/2.5/forecast");

  url.search = new URLSearchParams({
    units: "metric",
    appid: "591dacc7a16f386b0ac67b3d4b901aad",
    q: req.query.city,
  });

  const response = await fetch(url);
  res.json(await response.json());
});

// Workound: Same-Origin-Policy
// HTTP Ajax calls are not allowed from HTTPS host so we bypass the calls
// through this local server instead of calling it directly from within Angular.
app.get("/api/cities", async (req, res) => {
  const { namePrefix } = req.query;

  const url = new URL(
    "http://geodb-free-service.wirefreethought.com/v1/geo/cities"
  );

  url.search = new URLSearchParams({ namePrefix });

  const response = await fetch(url);
  res.json(await response.json());
});

app.get("/*", function (req, res) {
  res.sendFile(path.join(rootDir + "/index.html"));
});

app.listen(process.env.PORT || 8080);
