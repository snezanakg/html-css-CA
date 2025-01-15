document.addEventListener("DOMContentLoaded", () => {
  const confirmationMessage = document.querySelector(".confirmation-message");

  confirmationMessage.innerHTML = `
    <h1>Thank You for Your Order!</h1>
    <p>Your order has been placed successfully and is being processed.</p>
    <a href="index.html" class="btn">Back to Home</a>
  `;

  localStorage.removeItem("cart");
});
