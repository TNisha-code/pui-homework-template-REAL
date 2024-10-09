class Roll {
    constructor(rollType, rollGlazing, packSize, rollPrice, imageFile) {
        this.type = rollType;
        this.glazing = rollGlazing;
        this.size = packSize; // Pack size (not used for price calculation as it was throwing off my number - mutiplying it)
        this.price = rollPrice; 
        this.imageFile = imageFile; 
    }
}

const rolls = [
    new Roll("Original", "Sugar Milk", 1, 2.49, "Images/Rolls/original-cinnamon-roll.jpg"),
    new Roll("Walnut", "Vanilla Milk", 12, 39.90, "Images/Rolls/walnut-cinnamon-roll.jpg"),
    new Roll("Raisin", "Sugar Milk", 3, 8.97, "Images/Rolls/raisin-cinnamon-roll.jpg"),
    new Roll("Apple", "Original", 3, 10.47, "Images/Rolls/apple-cinnamon-roll.jpg")
];

let cart = [];

// Start the cart
function initializeCart() {
    cart = [...rolls]; 
    renderCartItems();
}

// Function to render cart items
function renderCartItems() {
    const cartItemsContainer = document.getElementById('cartItems');
    cartItemsContainer.innerHTML = ''; // Clears existing items

    cart.forEach((roll, index) => {
        const cartItemDiv = document.createElement('div');
        cartItemDiv.classList.add('cart-item');

        // Center the image
        const imgContainer = document.createElement('div');
        imgContainer.classList.add('img-container');

        const img = document.createElement('img');
        img.src = roll.imageFile;
        img.alt = `${roll.type} Cinnamon Roll`;
        img.classList.add('cartimage'); // image sizing
        img.style.width = '200px'; 
        img.style.height = '200px'; 

        imgContainer.appendChild(img);

        const itemDetailsDiv = document.createElement('div');
        itemDetailsDiv.classList.add('item-details');
        itemDetailsDiv.innerHTML = `
            <p>${roll.type} Cinnamon Roll</p>
            <p>Glazing: ${roll.glazing}</p>
            <p>Pack Size: ${roll.size}</p>
        `;

        const itemPriceDiv = document.createElement('div');
        itemPriceDiv.classList.add('item-price');
        itemPriceDiv.innerHTML = `
            <p>$${roll.price.toFixed(2)}</p>
            <button class="remove-button" data-index="${index}">Remove</button>
        `;

        cartItemDiv.appendChild(imgContainer);
        cartItemDiv.appendChild(itemDetailsDiv);
        cartItemDiv.appendChild(itemPriceDiv);
        cartItemsContainer.appendChild(cartItemDiv);
    });

    updateTotalPrice();
}


// Update total price of all items 
function updateTotalPrice() {
    const totalPrice = cart.reduce((total, roll) => total + roll.price, 0).toFixed(2);
    document.getElementById('totalPrice').textContent = `$${totalPrice}`;
}

// Remove cart item
function removeItem(index) {
    cart.splice(index, 1); // Remove item from cart
    renderCartItems(); // Re-render cart items
}

// Event listener for remove buttons
document.addEventListener('click', function(event) {
    if (event.target.classList.contains('remove-button')) {
        const index = event.target.getAttribute('data-index');
        removeItem(index);
    }
});

document.addEventListener('DOMContentLoaded', initializeCart);
