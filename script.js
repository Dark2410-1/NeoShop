let cart = [];
let total = 0;

function addToCart(name, price) {
  cart.push({ name, price });
  total += price;
  renderCart();
}

function renderCart() {
  const items = document.getElementById("cartItems");
  const totalEl = document.getElementById("cartTotal");
  const countEl = document.getElementById("cartCount");

  items.innerHTML = "";
  cart.forEach(item => {
    items.innerHTML += `
      <div class="flex justify-between">
        <span>${item.name}</span>
        <span>$${item.price}</span>
      </div>`;
  });

  totalEl.textContent = total;
  countEl.textContent = cart.length;
}

function toggleCart() {
  document.getElementById("cart").classList.toggle("translate-x-full");
}