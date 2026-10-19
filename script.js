const WHATSAPP_NUMBER = "5599991505180";

const products = [
  {
    id: "creatina-pura",
    name: "Creatina monohidratada",
    category: "creatina",
    categoryLabel: "Creatina",
    description: "Uma escolha prática para complementar treinos de força e alta intensidade.",
    price: 89.9,
    size: "300 g",
    tag: "Creatina em pó",
    packageName: "CREATINA",
    packageDetail: "creatina em pó",
    packageStyle: "lime",
    code: "CR"
  },
  {
    id: "whey-protein",
    name: "Whey protein",
    category: "proteina",
    categoryLabel: "Proteínas",
    description: "Proteína em pó para ajudar a compor sua ingestão diária de proteínas.",
    price: 135,
    size: "900 g",
    tag: "Proteína em pó",
    packageName: "WHEY",
    packageDetail: "proteína",
    packageStyle: "red",
    code: "WP"
  },
  {
    id: "pre-treino",
    name: "Pré-treino",
    category: "energia",
    categoryLabel: "Pré-treino",
    description: "Uma opção para conhecer os ingredientes e o modo de uso antes de escolher.",
    price: 79.9,
    size: "300 g",
    tag: "Pré-treino",
    packageName: "PRÉ",
    packageDetail: "pré-treino",
    packageStyle: "blue",
    code: "PT"
  },
  {
    id: "omega-3",
    name: "Ômega 3",
    category: "saude",
    categoryLabel: "Saúde & bem-estar",
    description: "Suplemento alimentar para quem busca opções para a rotina de bem-estar.",
    price: 59.9,
    size: "120 cápsulas",
    tag: "Suplemento alimentar",
    packageName: "ÔMEGA 3",
    packageDetail: "suplemento alimentar",
    packageStyle: "cream",
    code: "O3"
  },
  {
    id: "whey-3w",
    name: "Whey protein 3W",
    category: "proteina",
    categoryLabel: "Proteínas",
    description: "Blend de proteínas para complementar a alimentação no dia a dia.",
    price: 149.9,
    size: "900 g",
    tag: "Proteína em pó",
    packageName: "WHEY 3W",
    packageDetail: "blend proteico",
    packageStyle: "cream",
    code: "3W"
  },
  {
    id: "multivitaminico",
    name: "Multivitamínico",
    category: "saude",
    categoryLabel: "Saúde & bem-estar",
    description: "Uma alternativa para complementar a alimentação conforme sua necessidade.",
    price: 49.9,
    size: "60 cápsulas",
    tag: "Suplemento alimentar",
    packageName: "VITAMINAS",
    packageDetail: "suplemento alimentar",
    packageStyle: "lime",
    code: "MV"
  },
  {
    id: "creatina-lata",
    name: "Creatina micronizada",
    category: "creatina",
    categoryLabel: "Creatina",
    description: "Creatina em pó para incluir com praticidade em uma rotina consistente.",
    price: 99.9,
    size: "300 g",
    tag: "Creatina em pó",
    packageName: "CREATINA",
    packageDetail: "micronizada",
    packageStyle: "blue",
    code: "CM"
  },
  {
    id: "proteina-beef",
    name: "Proteína beef",
    category: "proteina",
    categoryLabel: "Proteínas",
    description: "Uma opção de proteína para comparar ingredientes, porção e sabor.",
    price: 119.9,
    size: "900 g",
    tag: "Proteína em pó",
    packageName: "BEEF",
    packageDetail: "proteína",
    packageStyle: "red",
    code: "BF"
  }
];

const cart = new Map();
const productGrid = document.querySelector("#product-grid");
const cartDialog = document.querySelector("#cart-dialog");
const checkoutDialog = document.querySelector("#checkout-dialog");
const cartCount = document.querySelector(".cart-count");
const cartTitleCount = document.querySelector(".cart-title-count");
const cartItems = document.querySelector("#cart-items");
const cartEmpty = document.querySelector("#cart-empty");
const cartFooter = document.querySelector("#cart-footer");
const cartTotal = document.querySelector("#cart-total");
const currency = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" });

function renderProducts(category = "todos") {
  const visibleProducts = category === "todos"
    ? products
    : products.filter((product) => product.category === category);

  productGrid.innerHTML = visibleProducts.length
    ? visibleProducts.map((product) => `
        <article class="product-card">
          <div class="product-art product-art--${product.packageStyle}" aria-hidden="true">
            <span class="product-tag">${product.tag}</span>
            <div class="product-package product-package--${product.packageStyle}">
              <span class="product-package__brand">Arte ilustrativa</span>
              <span class="product-package__rule"></span>
              <strong class="product-package__name">${product.packageName}</strong>
              <span class="product-package__detail">${product.packageDetail}</span>
              <span class="product-package__weight">${product.size}</span>
            </div>
          </div>
          <div class="product-info">
            <p class="product-category">${product.categoryLabel}</p>
            <h3>${product.name}</h3>
            <p class="product-description">${product.description}</p>
            <div class="product-buy">
              <span class="product-price">${currency.format(product.price)}<small>preço de referência</small></span>
              <button class="add-to-cart" type="button" data-add-product="${product.id}" aria-label="Adicionar ${product.name} à sacola">
                <span aria-hidden="true">+</span> Adicionar
              </button>
            </div>
          </div>
        </article>
      `).join("")
    : '<p class="product-grid__empty">Nenhum produto nesta categoria por enquanto.</p>';
  productGrid.setAttribute("aria-busy", "false");
}

function getCartCount() {
  return [...cart.values()].reduce((total, quantity) => total + quantity, 0);
}

function updateCart() {
  const count = getCartCount();
  const total = [...cart.entries()].reduce((sum, [id, quantity]) => {
    const product = products.find((item) => item.id === id);
    return sum + product.price * quantity;
  }, 0);

  cartCount.textContent = String(count);
  cartTitleCount.textContent = `(${count})`;
  cartEmpty.hidden = count > 0;
  cartFooter.hidden = count === 0;
  cartTotal.textContent = currency.format(total);
  cartItems.innerHTML = [...cart.entries()].map(([id, quantity]) => {
    const product = products.find((item) => item.id === id);
    return `
      <article class="cart-item">
        <div class="cart-item__swatch" aria-hidden="true">${product.code}</div>
        <div>
          <h3 class="cart-item__title">${product.name}</h3>
          <p class="cart-item__price">${currency.format(product.price)} cada</p>
          <div class="quantity-control" aria-label="Quantidade de ${product.name}">
            <button type="button" data-cart-action="decrease" data-product-id="${id}" aria-label="Diminuir quantidade de ${product.name}">−</button>
            <output>${quantity}</output>
            <button type="button" data-cart-action="increase" data-product-id="${id}" aria-label="Aumentar quantidade de ${product.name}">+</button>
          </div>
        </div>
        <button class="cart-item__remove" type="button" data-cart-action="remove" data-product-id="${id}">Remover</button>
      </article>`;
  }).join("");
}

function updateQuantity(id, action) {
  const current = cart.get(id);
  if (action === "remove" || (action === "decrease" && current === 1)) {
    cart.delete(id);
  } else if (action === "increase") {
    cart.set(id, current + 1);
  } else if (action === "decrease") {
    cart.set(id, current - 1);
  }
  updateCart();
}

document.querySelector(".category-list").addEventListener("click", (event) => {
  const button = event.target.closest("[data-category]");
  if (!button) return;

  document.querySelectorAll(".category-chip").forEach((chip) => {
    const active = chip === button;
    chip.classList.toggle("is-active", active);
    chip.setAttribute("aria-pressed", String(active));
  });
  renderProducts(button.dataset.category);
});

productGrid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-add-product]");
  if (!button) return;

  const id = button.dataset.addProduct;
  cart.set(id, (cart.get(id) || 0) + 1);
  updateCart();
  const product = products.find((item) => item.id === id);
  button.setAttribute("aria-label", `${product.name} adicionado à sacola`);
  button.innerHTML = '<span aria-hidden="true">✓</span> Adicionado';
  window.setTimeout(() => {
    if (!button.isConnected) return;
    button.setAttribute("aria-label", `Adicionar ${product.name} à sacola`);
    button.innerHTML = '<span aria-hidden="true">+</span> Adicionar';
  }, 1200);
});

document.querySelector("#cart-items").addEventListener("click", (event) => {
  const button = event.target.closest("[data-cart-action]");
  if (button) updateQuantity(button.dataset.productId, button.dataset.cartAction);
});

document.querySelector(".cart-trigger").addEventListener("click", () => cartDialog.showModal());
document.querySelectorAll("[data-close-cart]").forEach((button) => button.addEventListener("click", () => cartDialog.close()));
document.querySelectorAll("[data-close-checkout]").forEach((button) => button.addEventListener("click", () => checkoutDialog.close()));

cartDialog.addEventListener("click", (event) => {
  if (event.target === cartDialog) cartDialog.close();
});
checkoutDialog.addEventListener("click", (event) => {
  if (event.target === checkoutDialog) checkoutDialog.close();
});

document.querySelector("#checkout-button").addEventListener("click", () => {
  cartDialog.close();
  checkoutDialog.showModal();
  document.querySelector("#customer-name").focus();
});

document.querySelector("#checkout-form").addEventListener("submit", (event) => {
  event.preventDefault();
  if (cart.size === 0) return;

  const formData = new FormData(event.currentTarget);
  const name = String(formData.get("name")).trim();
  const address = String(formData.get("address")).trim();
  if (!name || !address) return;

  const orderLines = [...cart.entries()].map(([id, quantity]) => {
    const product = products.find((item) => item.id === id);
    return `• ${quantity}x ${product.name} (${product.size}) — ${currency.format(product.price * quantity)}`;
  });
  const total = [...cart.entries()].reduce((sum, [id, quantity]) => {
    return sum + products.find((item) => item.id === id).price * quantity;
  }, 0);
  const message = [
    "Oi! Quero confirmar este pedido com a Suplementos Mais:",
    "",
    ...orderLines,
    "",
    `Subtotal de referência: ${currency.format(total)}`,
    "Sei que o valor final e a disponibilidade serão confirmados pela loja.",
    "",
    `Nome: ${name}`,
    `Endereço para entrega: ${address}`
  ].join("\n");

  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  cart.clear();
  updateCart();
  checkoutDialog.close();
});

document.querySelector("#current-year").textContent = String(new Date().getFullYear());
renderProducts();
updateCart();
