const apiBaseUrl = "https://v2.api.noroff.dev/rainy-days";

// Fetch all products
async function fetchAllProducts() {
  try {
    const response = await fetch(apiBaseUrl);
    if (!response.ok) throw new Error("Failed to fetch products");
    return await response.json();
  } catch (error) {
    console.error("Error fetching all products:", error);
  }
}

// Fetch a single product by ID
async function fetchProductById(productId) {
  try {
    const response = await fetch(`${apiBaseUrl}/${productId}`);
    if (!response.ok) throw new Error(`Failed to fetch product with ID: ${productId}`);
    return await response.json();
  } catch (error) {
    console.error("Error fetching product by ID:", error);
  }
}

// Add to Cart
function addToCart(product) {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const existingItem = cart.find((item) => item.id === product.id);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    product.quantity = 1;
    cart.push(product);
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${product.name} added to cart!`);
}

// Get Cart
function getCart() {
  return JSON.parse(localStorage.getItem("cart")) || [];
}

// Remove from Cart
function removeFromCart(productId) {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const updatedCart = cart.filter((item) => item.id !== productId);
  localStorage.setItem("cart", JSON.stringify(updatedCart));
}
