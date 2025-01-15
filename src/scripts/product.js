import { API_BASE } from "src/scripts/constans.js";

function getProductId() {
  const params = new URLSearchParams(window.location.search);
  return params.get("id");
}

async function fetchProductDetails() {
  const productId = getProductId();
  if (!productId) {
    alert("Product ID is missing.");
    return;
  }

  try {
    const response = await fetch(`${API_BASE}/${productId}`);
    if (!response.ok) throw new Error("Failed to fetch product details");

    const product = await response.json();
    displayProductDetails(product);
  } catch (error) {
    console.error("Error fetching product details:", error);
    alert("Error loading product details. Please try again later.");
  }
}

function displayProductDetails(product) {
  document.getElementById("productImage").src = product.image;
  document.getElementById("productTitle").textContent = product.title;
  document.getElementById("productPrice").textContent = `SEK ${product.price}`;
  document.getElementById("productDescription").textContent = product.description;

  document.getElementById("addToCart").addEventListener("click", () => {
    addToCart(product);
    alert(`${product.title} added to your cart!`);
  });
}

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
}

document.addEventListener("DOMContentLoaded", fetchProductDetails);
