document.getElementById("converter-form").addEventListener("submit", async function (event) {
    event.preventDefault();

    const sourceCurrency = document.getElementById("source-currency").value;
    const targetCurrency = document.getElementById("target-currency").value;
    const amount = parseFloat(document.getElementById("amount").value);

    const response = await fetch(`/convert?source=${sourceCurrency}&target=${targetCurrency}&amount=${amount}`);
    const data = await response.json();

    const resultArea = document.getElementById("result");
    const targetCurrencySymbol = getCurrencySymbol(targetCurrency);
    resultArea.innerHTML = `Converted Amount: ${targetCurrencySymbol}${data.convertedAmount.toFixed(2)}`;
});

function getCurrencySymbol(currencyCode) {
    // Add more currency symbols as needed
    const currencySymbols = {
        INR: "₹",
        USD: "$",
    };
    return currencySymbols[currencyCode] || currencyCode;
}
