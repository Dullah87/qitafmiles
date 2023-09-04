const calculateBtn = document.getElementById("calculateBtn");
const resultElement = document.getElementById("result");

calculateBtn.addEventListener("click", () => {
    const flightCost = parseFloat(document.getElementById("flightCost").value);
    const milesCost = parseFloat(document.getElementById("milesCost").value);

    if (isNaN(flightCost) || isNaN(milesCost)) {
        resultElement.textContent = "Please enter valid numbers.";
        return;
    }

    const totalCostWithoutMiles = flightCost;
    const totalCostWithMiles = flightCost + milesCost;

    resultElement.textContent = `Total Cost Without Miles: $${totalCostWithoutMiles.toFixed(2)}
                                  Total Cost With Miles: $${totalCostWithMiles.toFixed(2)}`;
});
