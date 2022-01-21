const fetch = require("node-fetch");
const express = require("express");
const path = require("path");

const app = express();

// API /////////////////////////////////////////////////////////////////////////////////////////////
// Workound: Same-Origin-Policy
// HTTP Ajax calls are not allowed from HTTPS host so we bypass the calls
// through this local server instead of calling it directly from within Angular.

const GEOCITY_URL =
  "http://geodb-free-service.wirefreethought.com/v1/geo/cities";
const OPENWEATHER_URL = "https://api.openweathermap.org/data/2.5";

const openWeatherParams = {
  units: "metric",
  appid: '591dacc7a16f386b0ac67b3d4b901aad',
};

app.get("/api/weather", async (req, res) => {
  const q = req.query.city;
  const url = new URL(`${OPENWEATHER_URL}/weather`);
  url.search = new URLSearchParams({ ...openWeatherParams, q });

  const response = await fetch(url);
  res.json(await response.json());
});

app.get("/api/forecast", async (req, res) => {
  const q = req.query.city;
  const url = new URL(`${OPENWEATHER_URL}/forecast`);
  url.search = new URLSearchParams({ ...openWeatherParams, q });

  const response = await fetch(url);
  res.json(await response.json());
});

app.get("/api/cities", async (req, res) => {
  const { namePrefix } = req.query;
  const url = new URL(GEOCITY_URL);
  url.search = new URLSearchParams({ namePrefix });

  const response = await fetch(url);
  res.json(await response.json());
});

// STATIC //////////////////////////////////////////////////////////////////////////////////////////

const rootDir = __dirname + "/dist/weather-app";

app.use(express.static(rootDir));

app.get("/*", function (req, res) {
  res.sendFile(path.join(rootDir + "/index.html"));
});

app.listen(process.env.PORT || 8080);