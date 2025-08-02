const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 5000;

app.use(cors());

app.get("/api/user", (req, res) => {
  res.json({
    name: "Aarav Singh",
    referralCode: "aarav2025",
    totalDonations: 1750,
  });
});

app.get("/api/leaderboard", (req, res) => {
  res.json([
    { name: "Aarav Singh", donations: 1750 },
    { name: "Meera Joshi", donations: 1600 },
    { name: "Dev Patel", donations: 1300 },
  ]);
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));