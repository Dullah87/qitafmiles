const calculateBtn = document.getElementById("calculateBtn");
const qitafPointsElement = document.getElementById("qitafPoints");
const qitafCostElement = document.getElementById("qitafCost");
const saudiaMilesCostElement = document.getElementById("saudiaMilesCost");

calculateBtn.addEventListener("click", () => {
    const milesInput = parseFloat(document.getElementById("milesInput").value);

    if (isNaN(milesInput) || milesInput <= 0) {
        alert("Please enter a valid positive number of miles.");
        return;
    }

    const qitafPointsNeeded = milesInput / 5;
    const qitafCost = qitafPointsNeeded * 0.35;
    const saudiaMilesCost = 0.129398 * milesInput;

    qitafPointsElement.textContent = qitafPointsNeeded.toFixed(2);
    qitafCostElement.textContent = `$${qitafCost.toFixed(2)}`;
    saudiaMilesCostElement.textContent = `$${saudiaMilesCost.toFixed(2)}`;
});
