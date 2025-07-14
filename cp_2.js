// Promise-based fetch
function fetchProductsThen() {
  fetch("https://www.course-api.com/javascript-store-products")
    .then((response) => response.json())
    .then((products) => {
      products.slice(0, 5).forEach((product) => {
        console.log("Product (then):", product.fields.name);
      });
    })
    .catch((error) => {
      console.error("Fetch using .then() failed:", error.message);
    });
}

// Async/await fetch
async function fetchProductsAsync() {
  try {
    const response = await fetch("https://www.course-api.com/javascript-store-products");
    const products = await response.json();
    displayProducts(products);
  } catch (error) {
    handleError(error);
  }
}

// Render product cards
function displayProducts(products) {
  const container = document.getElementById("product-container");
  const topFive = products.slice(0, 5);

  topFive.forEach((product) => {
    const { name, price, image } = product.fields;

    const card = document.createElement("div");
    card.className = "product-card";

    const img = document.createElement("img");
    img.src = image[0].url;
    img.alt = name;

    const title = document.createElement("h3");
    title.textContent = name;

    const cost = document.createElement("p");
    cost.textContent = `$${(price / 100).toFixed(2)}`;

    card.appendChild(img);
    card.appendChild(title);
    card.appendChild(cost);
    container.appendChild(card);
  });
}

// Error handler
function handleError(error) {
  console.error("An error occurred:", error.message);
}

// Call both fetch functions
fetchProductsThen();
fetchProductsAsync();
