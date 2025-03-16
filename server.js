require("dotenv").config();
const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Test Route
app.get("/", (req, res) => {
    res.json({ message: "Server is running!" });
});

// API Route to fetch train data
app.get("/api/trains", async (req, res) => {
    try {
        const apiKey = process.env.TRAIN_API_KEY;
        const response = await axios.get(`https://api.example.com/trains?api_key=${apiKey}`);
        res.json(response.data);
    } catch (error) {
        console.error("Error fetching train data:", error.message);
        res.status(500).json({ error: "Error fetching train data" });
    }
});

// Log a message when the server starts
app.listen(PORT, () => {
    console.log(`✅ Server is running on http://localhost:${PORT}`);
});
