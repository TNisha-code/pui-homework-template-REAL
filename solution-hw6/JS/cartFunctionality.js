// retrieve cart from local storage //
function getCartFromLocalStorage() {
    const cartJSON = localStorage.getItem('cart');
    return cartJSON ? JSON.parse(cartJSON) : [];
}

// save cart to local storage //
function saveCartToLocalStorage(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// render cart items //
function renderCartItems() {
    const cart = getCartFromLocalStorage();
    const cartItemsContainer = document.getElementById('cartItems');
    cartItemsContainer.innerHTML = ''; // Clear existing items

    cart.forEach((roll, index) => {
        const cartItemDiv = document.createElement('div');
        cartItemDiv.classList.add('cart-item');

        cartItemDiv.innerHTML = `
            <p>${roll.type} Cinnamon Roll</p>
            <p>Glazing: ${roll.glazing}</p>
            <p>Pack Size: ${roll.size}</p>
            <p>Price: $${(roll.basePrice * roll.size).toFixed(2)}</p>
            <button class="remove-item" data-index="${index}">Remove</button>
        `;

        cartItemsContainer.appendChild(cartItemDiv);
    });

    updateTotalPrice(cart);
}

// update total price
function updateTotalPrice(cart) {
    const totalPrice = cart.reduce((total, roll) => total + (roll.basePrice * roll.size), 0);
    document.getElementById('totalPrice').textContent = `$${totalPrice.toFixed(2)}`;
}

// handle removing an item from the cart
function handleRemoveItem(event) {
    const index = event.target.getAttribute('data-index');
    let cart = getCartFromLocalStorage();
    
    // Remove the item from the cart
    cart.splice(index, 1);
    saveCartToLocalStorage(cart); // Save updated cart to local storage
    renderCartItems(); // Re-render the cart items
}

// Initial rendering of cart items when the page loads
document.addEventListener('DOMContentLoaded', function () {
    renderCartItems();

    // Event delegation for removing items
    document.getElementById('cartItems').addEventListener('click', function(event) {
        if (event.target.classList.contains('remove-item')) {
            handleRemoveItem(event);
        }
    });
});
