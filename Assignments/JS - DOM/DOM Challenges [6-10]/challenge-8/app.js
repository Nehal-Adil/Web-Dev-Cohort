const cart = {};
const cartItemsContainer = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");

function addToCart(name, price) {
  if (cart[name]) {
    cart[name].quantity += 1;
  } else {
    cart[name] = { price, quantity: 1 };
  }

  //   console.log(cart);
  // cart = {
  //     T-Shirt: {price: 19.99, quantity: 1}
  // }

  renderCart();
}

function removeFromCart(name) {
  delete cart[name];
  renderCart();
}

function updateQuantity(name, delta) {
  if (!cart[name]) return;
  cart[name].quantity += delta;
  if (cart[name].quantity <= 0) {
    removeFromCart(name);
  } else {
    renderCart();
  }
}

function renderCart() {
  cartItemsContainer.innerHTML = "";
  let total = 0;

  const keys = Object.keys(cart);

  if (keys.length === 0) {
    cartItemsContainer.innerHTML = `<div class="empty-cart">Cart is empty</div>`;
  } else {
    keys.forEach((item) => {
      const { price, quantity } = cart[item];
      const subtotal = (price * quantity).toFixed(2);
      total += +subtotal;

      const div = document.createElement("div");
      div.className = "cart-item";
      div.innerHTML = `
        <strong>${item}</strong> - $${price.toFixed(
        2
      )} × ${quantity} = $${subtotal}
        <button onclick="updateQuantity('${item}', -1)">−</button>
        <button onclick="updateQuantity('${item}', 1)">+</button>
        <button onclick="removeFromCart('${item}')">🗑 Remove</button>
      `;
      cartItemsContainer.appendChild(div);
    });
  }

  cartTotal.innerHTML = `<h3>Total: $${total.toFixed(2)}</h3>`;
}
