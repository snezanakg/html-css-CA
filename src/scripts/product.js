document.addEventListener("DOMContentLoaded", async () => {
    const params = new URLSearchParams(window.location.search);
    const productId = params.get("id");
  
    const productImageContainer = document.getElementById("product-image");
    const productInfoContainer = document.getElementById("product-info");
  
    const product = await fetchProductById(productId);
    if (!product) return;
  
    // Populate product details
    productImageContainer.innerHTML = `<img src="${product.image}" alt="${product.name}">`;
    productInfoContainer.innerHTML = `
      <h2>${product.name}</h2>
      <p>Price: ${product.price} SEK</p>
      <p>${product.description}</p>
      <button class="btn">Add to Cart</button>
    `;
  
    document.querySelector(".btn").addEventListener("click", () => addToCart(product));
  });
  