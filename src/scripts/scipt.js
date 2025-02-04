import { API_BASE, showLoading } from "src/scripts/constans.js";

async function fetchProducts() {
  showLoading(true);
  try {
    const response = await fetch(API_BASE);
    if (!response.ok) throw new Error("Failed to fetch products");

    const { data: products } = await response.json(); // Extracts the product array
    displayProducts(products);
  } catch (error) {
    alert("Error loading products.");
  } finally {
    showLoading(false);
  }
}

function displayProducts(products) {
  const container = document.getElementById("productsContainer");
  container.innerHTML = products
    .map(
      (product) => `
    <div class="product">
      <img src="${product.image.url}" alt="${product.title}">
      <h3>${product.title}</h3>
      <p>${product.price} SEK</p>
      <a href="product/index.html?id=${product.id}" class="btn">View Details</a>
    </div>
  `
    )
    .join("");
}

document.addEventListener("DOMContentLoaded", fetchProducts);
