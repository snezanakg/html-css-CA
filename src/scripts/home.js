import { API_BASE } from "src/scripts/constans.js";

async function fetchProducts() {
  const loadingSpinner = document.getElementById("loading");
  loadingSpinner.style.display = "block";

  try {
    const response = await fetch(API_BASE);
    if (!response.ok) throw new Error("Failed to fetch products");

    const products = await response.json();
    displayProducts(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    alert("Error loading products. Please try again later.");
  } finally {
    loadingSpinner.style.display = "none";
  }
}

function displayProducts(products) {
  const productsContainer = document.getElementById("productsContainer");
  productsContainer.innerHTML = ""; // Clear existing products

  products.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.className = "product-card";
    productCard.innerHTML = `
      <img src="${product.image}" alt="${product.title}">
      <h3>${product.title}</h3>
      <p>Price: SEK ${product.price}</p>
      <a href="selected-Product.html?id=${product.id}" class="btn">View Details</a>
    `;
    productsContainer.appendChild(productCard);
  });
}

// Filter products by category
document.getElementById("categoryFilter").addEventListener("change", async (e) => {
  const category = e.target.value;
  const response = await fetch(API_BASE);
  const products = await response.json();
  const filteredProducts = category === "all" ? products : products.filter(p => p.category === category);
  displayProducts(filteredProducts);
});

document.addEventListener("DOMContentLoaded", fetchProducts);
