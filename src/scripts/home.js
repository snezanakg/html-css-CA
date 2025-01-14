document.addEventListener("DOMContentLoaded", async () => {
    const productsContainer = document.getElementById("productsContainer");
  
    const products = await fetchAllProducts();
    if (!products) return;
  
    // Display products
    products.forEach((product) => {
      const productCard = document.createElement("div");
      productCard.classList.add("product-card");
      productCard.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>${product.price} SEK</p>
        <a href="selectedProduct.html?id=${product.id}" class="btn">View Details</a>
      `;
      productsContainer.appendChild(productCard);
    });
  });
  