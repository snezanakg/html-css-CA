document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".confirmation").innerHTML = `
    <h1>Thank You for Your Order!</h1>
    <p>Your order has been placed successfully.</p>
    <a href="../index.html" class="btn">Back to Home</a>
  `;
  localStorage.removeItem("cart");
});
