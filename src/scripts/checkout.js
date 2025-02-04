import { getCart, removeFromCart } from "src/scripts/cart.js";

function displayCart() {
  const cartContainer = document.getElementById("cartItems");
  const cart = getCart();

  if (cart.length === 0) {
    cartContainer.innerHTML = "<p>Your cart is empty.</p>";
    return;
  }

  cartContainer.innerHTML = cart
    .map(
      (item) => `
    <div class="cart-item">
      <h3>${item.title}</h3>
      <p>${item.price} SEK</p>
      <button class="remove-btn" data-id="${item.id}">Remove</button>
    </div>
  `
    )
    .join("");

  document.querySelectorAll(".remove-btn").forEach((btn) =>
    btn.addEventListener("click", (e) => {
      removeFromCart(e.target.dataset.id);
      displayCart();
    })
  );
}

document.getElementById("completePurchase").addEventListener("click", () => {
  localStorage.removeItem("cart");
  window.location.href = "confirmation.html";
});

document.addEventListener("DOMContentLoaded", displayCart);
