// Update the IDs to match the new input fields
const mileCostInput = document.getElementById("mileCost");
const qitafCostInput = document.getElementById("qitafCost");
const qitafCostElement = document.getElementById("qitafCost"); // Update this line

// Modify the calculations to use the updated cost values
calculateBtn.addEventListener("click", () => {
    const milesInput = parseFloat(document.getElementById("milesInput").value);
    const mileCost = parseFloat(mileCostInput.value);
    const qitafCost = parseFloat(qitafCostInput.value);

    if (isNaN(milesInput) || milesInput <= 0 || isNaN(mileCost) || isNaN(qitafCost)) {
        alert("Please enter valid values.");
        return;
    }

    const qitafPointsNeeded = milesInput / 5;
    const qitafPointsCost = qitafPointsNeeded * qitafCost;
    const saudiaMilesCost = mileCost * milesInput;

    qitafPointsElement.textContent = qitafPointsNeeded.toFixed(2);
    qitafCostElement.textContent = `$${qitafPointsCost.toFixed(2)}`;
    saudiaMilesCostElement.textContent = `$${saudiaMilesCost.toFixed(2)}`;
});
