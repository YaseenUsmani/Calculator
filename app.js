// app.js

document.addEventListener("DOMContentLoaded", function () {
    const productsContainer = document.getElementById("products");
    const cartButton = document.getElementById("cartButton");
    const cartModal = document.getElementById("cartModal");
    const closeBtn = document.querySelector(".close");

    // Sample product data (replace with your actual data)
    const products = [
        { id: 1, name: "Product 1", price: 20 },
        { id: 2, name: "Product 2", price: 30 },
        { id: 3, name: "Product 3", price: 25 },
    ];

    // Event listeners
    productsContainer.addEventListener("click", addToCart);
    cartButton.addEventListener("click", openCart);
    closeBtn.addEventListener("click", closeCart);

    // Display products
    displayProducts(products);

    function displayProducts(products) {
        productsContainer.innerHTML = "";
        products.forEach(product => {
            const productElement = document.createElement("div");
            productElement.classList.add("product");
            productElement.innerHTML = `
                <h3>${product.name}</h3>
                <p>$${product.price}</p>
                <button data-id="${product.id}" data-name="${product.name}" data-price="${product.price}">Add to Cart</button>
            `;
            productsContainer.appendChild(productElement);
        });
    }

    // Add to cart function
    function addToCart(event) {
        if (event.target.tagName === "BUTTON") {
            const id = event.target.dataset.id;
            const name = event.target.dataset.name;
            const price = parseFloat(event.target.dataset.price);

            const cartItem = { id, name, price };
            addToCartUI(cartItem);
        }
    }

    // Add item to the cart UI
    function addToCartUI(item) {
        const cartItemsContainer = document.getElementById("cartItems");
        const cartItemElement = document.createElement("li");
        cartItemElement.innerHTML = `${item.name} - $${item.price}`;
        cartItemsContainer.appendChild(cartItemElement);
    }

    // Open cart modal
    function openCart() {
        cartModal.style.display = "flex";
    }

    // Close cart modal
    function closeCart() {
        cartModal.style.display = "none";
    }
});
