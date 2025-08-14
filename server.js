const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Tu trzymamy dane w pamięci
let dataStore = [];

// Endpoint do dodawania danych
app.post("/data", (req, res) => {
  const newData = req.body;
  dataStore.push(newData);
  res.json({ message: "Dane zapisane", data: newData });
});

// Endpoint do pobierania danych
app.get("/data", (req, res) => {
  res.json(dataStore);
});

// Start serwera
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
