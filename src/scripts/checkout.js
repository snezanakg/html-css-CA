document.addEventListener("DOMContentLoaded", () => {
    const cartSummaryContainer = document.getElementById("cartSummary");
    const cart = getCart();
  
    if (cart.length === 0) {
      cartSummaryContainer.innerHTML = "<p>Your cart is empty.</p>";
      return;
    }
  
    // Display cart items
    cart.forEach((item) => {
      const cartItem = document.createElement("div");
      cartItem.innerHTML = `
        <p>${item.name} x${item.quantity}</p>
        <p>${item.price * item.quantity} SEK</p>
        <button class="btn">Remove</button>
      `;
      cartItem.querySelector(".btn").addEventListener("click", () => {
        removeFromCart(item.id);
        location.reload();
      });
      cartSummaryContainer.appendChild(cartItem);
    });
  
    const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    cartSummaryContainer.insertAdjacentHTML("beforeend", `<p>Total: ${totalPrice} SEK</p>`);
  });
  