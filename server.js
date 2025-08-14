const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

// --- tu dodajemy obsługę statycznych plików HTML/CSS/JS ---
app.use(express.static(path.join(__dirname, "public")));

// Dane w pamięci
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
