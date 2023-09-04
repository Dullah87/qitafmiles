const calculateBtn = document.getElementById("calculateBtn");
const qitafPointsElement = document.getElementById("qitafPoints");
const qitafCostElement = document.getElementById("qitafCost");
const saudiaMilesCostElement = document.getElementById("saudiaMilesCost");

calculateBtn.addEventListener("click", () => {
    console.log("Button clicked"); // Debug line

    const milesInput = parseFloat(document.getElementById("milesInput").value);

    console.log("Miles input:", milesInput); // Debug line

    if (isNaN(milesInput) || milesInput <= 0) {
        alert("Please enter a valid positive number of miles.");
        return;
    }

    const qitafPointsNeeded = milesInput / 5;
    const qitafCost = qitafPointsNeeded * 0.35;
    const saudiaMilesCost = 0.129398 * milesInput;

    console.log("Qitaf points:", qitafPointsNeeded); // Debug line
    console.log("Qitaf cost:", qitafCost); // Debug line
    console.log("Saudia miles cost:", saudiaMilesCost); // Debug line

    qitafPointsElement.textContent = qitafPointsNeeded.toFixed(2);
    qitafCostElement.textContent = `$${qitafCost.toFixed(2)}`;
    saudiaMilesCostElement.textContent = `$${saudiaMilesCost.toFixed(2)}`;
});
