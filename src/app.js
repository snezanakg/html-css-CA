const apiUrl = 'https://snezanakg.github.io/html-css-CA/'; 



// Fetch products from API and display on the page
async function fetchProducts() {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('Error fetching products');
    }
    const products = await response.json();
    renderProducts(products);
  } catch (error) {
    console.error('Error:', error);
    alert('Could not load products. Please try again later.');
  }
}

// Render products
function renderProducts(products) {
  const productsContainer = document.querySelector('.products');
  if (productsContainer) {
    productsContainer.innerHTML = ''; // Clear previous content
    products.forEach(product => {
      productsContainer.innerHTML += `
        <div class="product">
          <img src="${product.imageUrl}" alt="${product.name}">
          <h3>${product.name}</h3>
          <p>Price: ${product.price} SEK</p>
          <a href="selectedProduct.html?id=${product.id}" class="btn">View Details</a>
          <button class="btn" onclick="addToCart(${product.id})">Add to Cart</button>
        </div>
      `;
    });
  }
}

// Get product ID from URL
function getProductIdFromUrl() {
  const params = new URLSearchParams(window.location.search);
  return params.get('id');
}

// Fetch and display product details
async function fetchProductDetails(productId) {
  try {
    const response = await fetch(`${apiUrl}/${productId}`);
    if (!response.ok) {
      throw new Error('Error fetching product details');
    }
    const product = await response.json();
    displayProductDetails(product);
  } catch (error) {
    console.error('Error:', error);
    alert('Unable to load product details. Please try again later.');
  }
}

// Display product details on the product detail page
function displayProductDetails(product) {
  const productContainer = document.querySelector('.product-detail');
  if (productContainer) {
    productContainer.innerHTML = `
      <div class="product-image">
        <img src="${product.imageUrl}" alt="${product.name}">
      </div>
      <div class="product-info">
        <h2>${product.name}</h2>
        <p>Price: ${product.price} SEK</p>
        <p>Description: ${product.description}</p>
        <button class="btn" onclick="addToCart(${product.id})">Add to Cart</button>
      </div>
    `;
  }
}

// Add product to cart
function addToCart(productId) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.push(productId);
  localStorage.setItem('cart', JSON.stringify(cart));
  alert('Product added to your cart!');
}

// Display cart items on checkout page
async function displayCartItems() {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  const cartContainer = document.querySelector('.cart-items');
  
  if (cartContainer) {
    cartContainer.innerHTML = '';

    if (cart.length === 0) {
      cartContainer.innerHTML = '<p>Your cart is empty.</p>';
      return;
    }

    for (let productId of cart) {
      try {
        const response = await fetch(`${apiUrl}/${productId}`);
        if (!response.ok) {
          throw new Error('Error fetching product details');
        }
        const product = await response.json();
        cartContainer.innerHTML += `
          <div class="cart-item">
            <img src="${product.imageUrl}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>Price: ${product.price} SEK</p>
            <button onclick="removeFromCart(${product.id})">Remove</button>
          </div>
        `;
      } catch (error) {
        console.error('Error fetching product:', error);
        alert('Unable to load cart item. Please try again later.');
      }
    }
  }
}

// Remove product from cart
function removeFromCart(productId) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart = cart.filter(id => id !== productId);
  localStorage.setItem('cart', JSON.stringify(cart));
  displayCartItems();
}

// Confirm the order and clear the cart
function confirmOrder() {
  alert('Thank you for your order!');
  localStorage.removeItem('cart'); // Clear the cart after confirming the order
  window.location.href = '/confirmation.html'; // Redirect to confirmation page
}

// Event listeners for page load
document.addEventListener('DOMContentLoaded', () => {
  if (document.querySelector('.products')) {
    fetchProducts(); // Render products on index, men, women pages
  }
  if (document.querySelector('.product-detail')) {
    const productId = getProductIdFromUrl();
    if (productId) {
      fetchProductDetails(productId);
    }
  }
  if (document.querySelector('.cart-items')) {
    displayCartItems(); // Display items in cart on checkout page
  }
  if (document.querySelector('.btn.complete-purchase')) {
    document.querySelector('.btn.complete-purchase').addEventListener('click', confirmOrder);
  }
});
// Display all items in the cart on the checkout page
async function displayCartItems() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartContainer = document.querySelector('.cart-items');
    
    if (cartContainer) {
      cartContainer.innerHTML = ''; // Clear previous cart content
  
      if (cart.length === 0) {
        cartContainer.innerHTML = '<p>Your cart is empty.</p>';
        return;
      }
  
      for (let cartItem of cart) {
        const { productId, size } = cartItem;
        try {
          const response = await fetch(`${apiUrl}/${productId}`);
          if (!response.ok) {
            throw new Error('Error fetching product details');
          }
          const product = await response.json();
          cartContainer.innerHTML += `
            <div class="cart-item">
              <img src="${product.imageUrl}" alt="${product.name}">
              <h3>${product.name}</h3>
              <p>Price: ${product.price} SEK</p>
              <label for="cart-size-${productId}">Size:</label>
              <select id="cart-size-${productId}" onchange="updateCartSize(${productId}, this.value)">
                <option value="small" ${size === "small" ? "selected" : ""}>Small</option>
                <option value="medium" ${size === "medium" ? "selected" : ""}>Medium</option>
                <option value="large" ${size === "large" ? "selected" : ""}>Large</option>
              </select>
              <button onclick="removeFromCart(${productId})">Remove</button>
            </div>
          `;
        } catch (error) {
          console.error('Error fetching product:', error);
          alert('Unable to load cart item. Please try again later.');
        }
      }
    }
  }
