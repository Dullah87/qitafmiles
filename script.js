document.addEventListener("DOMContentLoaded", function() {
    const mileCostElement = document.getElementById("mileCost");
    const qitafCostElement = document.getElementById("qitafCost");
    const ticketCostElement = document.getElementById("ticketCost");
    const milesInputElement = document.getElementById("milesInput");
    const calculateBtn = document.getElementById("calculateBtn");
    const resultsModal = document.getElementById("resultsModal");
    const qitafPointsElement = document.getElementById("qitafPoints");
    const totalQitafCostElement = document.getElementById("totalQitafCost");
    const saudiaMilesCostElement = document.getElementById("saudiaMilesCost");
    const comparisonResultElement = document.getElementById("comparisonResult");
    const closeBtn = document.querySelector(".close");

    calculateBtn.addEventListener("click", function() {
        const mileCost = parseFloat(mileCostElement.value);
        const qitafCost = parseFloat(qitafCostElement.value);
        const milesNeeded = parseInt(milesInputElement.value);
        const ticketCost = parseFloat(ticketCostElement.value);

        // Check if user input is valid
        if (isNaN(mileCost) || isNaN(qitafCost) || isNaN(milesNeeded)) {
            alert("Please enter valid numbers in all fields.");
            return;
        }

        const qitafPointsNeeded = milesNeeded / 5;
        const qitafPointsCost = qitafPointsNeeded * qitafCost;
        const saudiaMilesCost = milesNeeded * mileCost;

        // Update the modal's content
        qitafPointsElement.textContent = `${qitafPointsNeeded} points`;
        totalQitafCostElement.textContent = `${qitafPointsCost} SAR`;
        saudiaMilesCostElement.textContent = `${saudiaMilesCost} SAR`;


	// Calculate and display the price comparison
	if (ticketCost > 0) {
    const savingsPercentage = ((ticketCost - qitafPointsCost) / ticketCost) * 100;
    comparisonResultElement.textContent = `Buying the ticket using Qitaf points is 	${savingsPercentage.toFixed(2)}% cheaper than the original price of the ticket.`;
} else {
    comparisonResultElement.textContent = ""; // If no ticket cost provided, don't show a comparison
}


        resultsModal.style.display = "block";
    });

    // Close the modal
    closeBtn.onclick = function() {
        resultsModal.style.display = "none";
    };

    window.onclick = function(event) {
        if (event.target === resultsModal) {
            resultsModal.style.display = "none";
        }
    };
});
