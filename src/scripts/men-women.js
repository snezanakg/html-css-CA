document.addEventListener("DOMContentLoaded", async () => {
    const productsContainer = document.getElementById("productsContainer");
    const category = document.body.getAttribute("data-page"); // "men" or "women"
  
    const products = await fetchAllProducts();
    if (!products) return;
  
    // Filter products by category
    const filteredProducts = products.filter((product) => product.category === category);
  
    // Display filtered products
    filteredProducts.forEach((product) => {
      const productCard = document.createElement("div");
      productCard.classList.add("product");
      productCard.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <p>${product.name}</p>
        <p>${product.price} SEK</p>
        <button class="btn">Add to Cart</button>
      `;
      productCard.querySelector(".btn").addEventListener("click", () => addToCart(product));
      productsContainer.appendChild(productCard);
    });
  });
  