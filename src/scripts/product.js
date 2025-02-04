import { API_BASE, getQueryParam } from "src/scripts/constans.js";

async function fetchProductDetails() {
  const productId = getQueryParam("id");
  if (!productId) {
    alert("Product not found.");
    return;
  }

  try {
    const response = await fetch(`${API_BASE}/${productId}`);
    if (!response.ok) throw new Error("Product not found");

    const { data: product } = await response.json(); // Extracts the product object
    displayProduct(product);
  } catch (error) {
    alert("Error fetching product details.");
  }
}

function displayProduct(product) {
  document.getElementById("productImage").src = product.image.url;
  document.getElementById("productTitle").textContent = product.title;
  document.getElementById("productPrice").textContent = `${product.price} SEK`;
  document.getElementById("productDescription").textContent = product.description;

  document.getElementById("addToCart").addEventListener("click", () => {
    addToCart(product);
    alert(`${product.title} added to cart.`);
  });
}

function addToCart(product) {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
}

document.addEventListener("DOMContentLoaded", fetchProductDetails);
