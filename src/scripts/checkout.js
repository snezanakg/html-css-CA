function getCart() {
  return JSON.parse(localStorage.getItem("cart")) || [];
}

function displayCart() {
  const cartSummaryContainer = document.getElementById("cartSummary");
  const cart = getCart();

  if (cart.length === 0) {
    cartSummaryContainer.innerHTML = "<p>Your cart is empty.</p>";
    return;
  }

  cartSummaryContainer.innerHTML = cart.map(item => `
    <div class="cart-item">
      <p>${item.title} x${item.quantity}</p>
      <p>${item.price * item.quantity} SEK</p>
      <button class="btn remove-item" data-id="${item.id}">Remove</button>
    </div>
  `).join("");

  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  cartSummaryContainer.innerHTML += `<p>Total: SEK ${totalPrice}</p>`;

  document.querySelectorAll(".remove-item").forEach(button => {
    button.addEventListener("click", (e) => {
      const productId = e.target.getAttribute("data-id");
      removeFromCart(productId);
      displayCart();
    });
  });
}

function removeFromCart(productId) {
  const cart = getCart();
  const updatedCart = cart.filter(item => item.id !== productId);
  localStorage.setItem("cart", JSON.stringify(updatedCart));
}

document.addEventListener("DOMContentLoaded", displayCart);
