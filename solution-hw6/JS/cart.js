// Roll class section
class Roll {
    constructor(rollType, rollGlazing, packSize, basePrice) {
        this.type = rollType;
        this.glazing = rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice;
    }
}

// Start cart array =
const cart = [];

// Calculate the rolls total price
function glaze_calculateTotal() {
    const glazeSelect = document.getElementById('glazetypes');
    const packSelect = document.getElementById('packoption');

    const glazePrice = parseFloat(glazeSelect.value);
    const packSize = parseInt(packSelect.value);
    
    // Roll type - rollName element
    const rollType = document.getElementById('rollName').textContent.split(' ')[0]; 
    const basePrice = rolls[rollType]?.basePrice || 0; // Grabbing the base price from rolls object

    // Calculate total
    let total = (basePrice + glazePrice) * packSize;
    document.getElementById('totalPrice').textContent = total.toFixed(2);
}

// Seperate the roll type from the URL/Address
const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const rollType = params.get('roll');

// Log - debug //
console.log('Selected roll type:', rollType);

// For rollType to create base price on page refresh
document.addEventListener('DOMContentLoaded', function () {
    if (rollType && rolls[rollType]) {
        const basePrice = rolls[rollType].basePrice;
        document.getElementById('totalPrice').textContent = basePrice.toFixed(2);
        document.getElementById('rollName').textContent = `${rollType} cinnamon roll`; // Set roll name
        document.getElementById('rollImage').src = rolls[rollType].imageFile; // Set roll image

        // Event listeners for calculating total
        document.getElementById('glazetypes').addEventListener('change', glaze_calculateTotal);
        document.getElementById('packoption').addEventListener('change', glaze_calculateTotal);
        
        // Event listener for "Add to Cart" button
        document.getElementById('addToCartButton').addEventListener('click', function() {
            const glazeSelect = document.getElementById('glazetypes');
            const packSelect = document.getElementById('packoption');
            const rollGlazing = glazeSelect.options[glazeSelect.selectedIndex].text;
            const packSize = parseInt(packSelect.value);
            const newRoll = new Roll(rollType, rollGlazing, packSize, basePrice);
            cart.push(newRoll);
            
            // Print the entire cart (console)
            console.log(cart);
        });
    }
});

// Event listeners - update total price when changes are made //
document.getElementById('glazetypes').addEventListener('change', glaze_calculateTotal);
document.getElementById('packoption').addEventListener('change', glaze_calculateTotal);
