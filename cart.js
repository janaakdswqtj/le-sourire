const cartItemsContainer = document.getElementById('cartItemsContainer');
const totalPriceElement = document.getElementById('totalPrice');
const miniCartCount = document.getElementById('miniCartCount');

function loadCart() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  cartItemsContainer.innerHTML = '';
  let total = 0;

  cart.forEach((item, index) => {
    const itemDiv = document.createElement('div');
    itemDiv.classList.add('cart-item');
    itemDiv.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <div class="item-info">
        <h3>${item.name}</h3>
        <p>${item.desc}</p>
      </div>
      <div>
        <p>$${item.price}</p>
        <button class="remove-btn" onclick="removeItem(${index})">Remove</button>
      </div>
    `;
    cartItemsContainer.appendChild(itemDiv);
    total += item.price;
  });

  totalPriceElement.textContent = `Total: $${total}`;
  miniCartCount.textContent = cart.length;
}

function removeItem(index) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.splice(index, 1);
  localStorage.setItem('cart', JSON.stringify(cart));
  loadCart();
}

// Initial Load
loadCart();
