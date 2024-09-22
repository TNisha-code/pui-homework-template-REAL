
function glaze_calculateTotal() {
    /* Base price for a cinnamon roll */
    const basePrice = 2.49;

    /* Get the selected values - Mdn Web Docs */
    const glazeSelect = document.getElementById('glazetypes');
    const packSelect = document.getElementById('packoption');
    
    const glazePrice = parseFloat(glazeSelect.value);
    const packSize = parseInt(packSelect.value);

    /* Calculates the total */
    let total = (basePrice + glazePrice) * packSize;

    /* Updates the total price display */
    document.getElementById('totalPrice').textContent = total.toFixed(2);
}
