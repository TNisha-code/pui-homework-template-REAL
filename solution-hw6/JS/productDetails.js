// Roll class definition
class Roll {
    constructor(rollType, rollGlazing, packSize, rollPrice) {
        this.type = rollType;
        this.glazing = rollGlazing;
        this.size = packSize;
        this.basePrice = rollPrice;
    }
}

// Function to retrieve cart from local storage
function getCartFromLocalStorage() {
    const cartJSON = localStorage.getItem('cart');
    return cartJSON ? JSON.parse(cartJSON) : [];
}

// Function to save cart to local storage
function saveCartToLocalStorage(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Initializing cart when the page loads
let cart = getCartFromLocalStorage();

document.addEventListener('DOMContentLoaded', function () {
    const queryString = window.location.search;
    const params = new URLSearchParams(queryString);
    const rollType = params.get('roll'); // Get roll type from URL

    if (rollType && rolls[rollType]) {
        const basePrice = rolls[rollType].basePrice;
        document.getElementById('rollName').textContent = `${rollType} Cinnamon Roll`;
        document.getElementById('rollImage').src = rolls[rollType].imageFile;

        // Calculate and display the total price
        function calculateTotalPrice() {
            const glazeSelect = document.getElementById('glazetypes');
            const packSelect = document.getElementById('packoption');
            const glazePrice = parseFloat(glazeSelect.value) || 0; // Default to 0 if not a number
            const packSize = parseInt(packSelect.value) || 1; // Default to 1 if not a number
            const totalPrice = (basePrice + glazePrice) * packSize;
            document.getElementById('totalPrice').textContent = totalPrice.toFixed(2);
        }

        // Set initial total price
        calculateTotalPrice();

        // Event listeners for calculating total price when options change
        document.getElementById('glazetypes').addEventListener('change', calculateTotalPrice);
        document.getElementById('packoption').addEventListener('change', calculateTotalPrice);

        // Add event listener for the "Add to Cart" button
        document.getElementById('addToCartButton').addEventListener('click', function() {
            const glazeSelect = document.getElementById('glazetypes');
            const packSelect = document.getElementById('packoption');
            const rollGlazing = glazeSelect.options[glazeSelect.selectedIndex].text;
            const packSize = parseInt(packSelect.value);
            const newRoll = new Roll(rollType, rollGlazing, packSize, basePrice);

            // Add the new roll to the cart
            cart.push(newRoll);
            saveCartToLocalStorage(cart); // Save updated cart to local storage

            // Print the current cart in local storage to the console
            console.log('Current cart in local storage:', cart);
        });
    }
});
