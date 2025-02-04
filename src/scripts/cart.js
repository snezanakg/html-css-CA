export function getCart() {
  return JSON.parse(localStorage.getItem("cart")) || [];
}

export function addToCart(product) {
  const cart = getCart();
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
}

export function removeFromCart(productId) {
  const cart = getCart().filter((item) => item.id !== productId);
  localStorage.setItem("cart", JSON.stringify(cart));
}
