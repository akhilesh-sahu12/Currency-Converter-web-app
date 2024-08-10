const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// Define mock exchange rates
const exchangeRates = {
    INR: {
        USD: 0.012, // 1 INR = 0.012 USD
    },
    USD: {
        INR: 83.16, // 1 USD = 83.16 INR
    },
};

// API endpoint for conversion
app.get("/convert", (req, res) => {
    const sourceCurrency = req.query.source;
    const targetCurrency = req.query.target;
    const amount = parseFloat(req.query.amount);

    const rate = exchangeRates[sourceCurrency][targetCurrency];
    const convertedAmount = amount * rate;

    res.json({ convertedAmount });
});

// Serve static files
app.use(express.static("public"));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
