const WHATSAPP_NUMBER = "5599991505180";
const INSTALLMENT_MINIMUM_CENTS = 12000;

const products = [
  {
    id: "pure-beef-mk",
    name: "Pure Beef",
    brand: "MK Supplements",
    category: "proteina",
    categoryLabel: "Proteínas",
    description: "Suplemento em pó à base de proteína animal.",
    price: 180,
    size: "900 g",
    image: "assets/products/pure-beef-mk.webp",
    imageAlt: "Pote Pure Beef da MK Supplements, sabor morango com maracujá",
    tag: "Proteína animal",
    details: ["35 g de proteína por porção", "Zero carboidratos", "Sem adição de açúcares"],
    flavors: ["Hortelã com abacaxi", "Morango com maracujá", "Frutas amarelas"]
  },
  {
    id: "protein-complex-3w",
    name: "Protein Complex 3W",
    brand: "New Millen",
    category: "proteina",
    categoryLabel: "Proteínas",
    description: "Blend de proteínas WPC, WPI e WPH em pó.",
    price: 135,
    size: null,
    image: "assets/products/protein-complex-3w.webp",
    imageAlt: "Pote Protein Complex da New Millen, sabor Cookies and Cream",
    tag: "Sem soja",
    details: ["Sem soja", "Sem glúten", "21 g de proteína por porção, conforme rótulo"],
    flavors: ["Cookies and Cream", "Mousse de chocolate"]
  },
  {
    id: "pure-protein-mk",
    name: "Pure Protein",
    brand: "MK Supplements",
    category: "proteina",
    categoryLabel: "Proteínas",
    description: "Proteína 100% concentrada em pó.",
    price: 135,
    size: "900 g",
    image: "assets/products/pure-protein-mk.webp",
    imageAlt: "Pote Pure Protein da MK Supplements, sabor Chocomaltine",
    tag: "100% concentrada",
    details: ["21 g de proteína por porção", "Sem adição de açúcares"],
    flavors: ["Chocomaltine", "Morango", "Chocolate", "Creme de avelã"]
  },
  {
    id: "pure-whey-3w-mk",
    name: "Pure Whey 3W",
    brand: "MK Supplements",
    category: "proteina",
    categoryLabel: "Proteínas",
    description: "Blend de proteínas em pó com as opções de sabor informadas pela loja.",
    price: 170,
    size: "900 g",
    image: "assets/products/pure-whey-3w-mk.webp",
    imageAlt: "Pote Pure Whey 3W da MK Supplements, sabor Leitinho",
    tag: "Sem glúten",
    details: ["Sem glúten", "Sem soja"],
    flavors: ["Leitinho", "Cookies", "Morango", "Chocomaltine"]
  },
  {
    id: "c4-beta-pump",
    name: "C4 Beta Pump",
    brand: "New Millen",
    category: "energia",
    categoryLabel: "Pré-treino",
    description: "Pré-treino em pó. A embalagem enviada indica 225 g.",
    price: 90,
    size: "225 g",
    image: "assets/products/c4-beta-pump.webp",
    imageAlt: "Pote C4 Beta Pump da New Millen",
    tag: "Pré-treino",
    details: [],
    flavors: ["Maçã verde", "Frutas roxas", "Frutas amarelas"]
  },
  {
    id: "bope-300g",
    name: "B.O.P.E.",
    brand: "Black Skull",
    category: "energia",
    categoryLabel: "Pré-treino",
    description: "Pré-treino em pó, sabor limão.",
    price: 80,
    size: "300 g",
    image: "assets/products/bope-300g.webp",
    imageAlt: "Pote B.O.P.E. da Black Skull, sabor limão, 300 g",
    tag: "Sabor limão",
    details: [],
    flavors: ["Limão"]
  },
  {
    id: "nex-zero-cafeina",
    name: "Nex Zero Cafeína",
    brand: "Nex",
    category: "energia",
    categoryLabel: "Pré-treino",
    description: "Pré-treino em pó sem cafeína.",
    price: 110,
    size: "300 g",
    image: "assets/products/nex-zero-cafeina.webp",
    imageAlt: "Pote Nex Zero Cafeína",
    tag: "Sem cafeína",
    details: ["Sem cafeína"],
    flavors: []
  },
  {
    id: "bope-150g",
    name: "B.O.P.E.",
    brand: "Black Skull",
    category: "energia",
    categoryLabel: "Pré-treino",
    description: "Pré-treino em pó nas opções de sabor informadas pela loja.",
    price: 60,
    size: "150 g",
    image: "assets/products/bope-150g.webp",
    imageAlt: "Pote B.O.P.E. da Black Skull, sabor frutas amarelas, 150 g",
    tag: "Frutas amarelas",
    details: [],
    flavors: ["Frutas amarelas", "Frutas vermelhas"]
  },
  {
    id: "shark-peanut",
    name: "Shark Peanut",
    brand: "Shark Pro",
    category: "pasta",
    categoryLabel: "Pasta de amendoim",
    description: "Pasta de amendoim com whey protein.",
    price: 50,
    size: "600 g",
    image: "assets/products/shark-peanut.webp",
    imageAlt: "Pote Shark Peanut da Shark Pro, sabor Floresta Branca",
    tag: "Zero lactose",
    details: ["Não contém glúten", "6 g de proteína por porção", "Zero adição de açúcares"],
    flavors: ["Floresta Branca"]
  },
  {
    id: "fire-seck",
    name: "Fire Seck",
    brand: "MK Supplements",
    category: "energia",
    categoryLabel: "Pré-treino",
    description: "Suplemento em pó nas opções de sabor informadas pela loja.",
    price: 99.99,
    size: null,
    image: "assets/products/fire-seck.webp",
    imageAlt: "Pote Fire Seck da MK Supplements, sabor energético",
    tag: "Em pó",
    details: [],
    flavors: ["Uva", "Energético", "Tangerina"]
  },
  {
    id: "creatina-dark-lab",
    name: "Creatina 100% pura",
    brand: "Dark Lab",
    category: "creatina",
    categoryLabel: "Creatina",
    description: "Creatina em pó 100% pura, sem sabor informado.",
    price: 75,
    size: "300 g",
    image: "assets/products/creatina-dark-lab.webp",
    imageAlt: "Pote de creatina pura da Dark Lab, 300 g",
    tag: "100% pura",
    details: [],
    flavors: []
  },
  {
    id: "creatina-canibal",
    name: "Creatina monohidratada",
    brand: "Canibal Inc",
    category: "creatina",
    categoryLabel: "Creatina",
    description: "Creatina monohidratada em pó, 100% pura.",
    price: 70,
    size: "300 g",
    image: "assets/products/creatina-canibal.webp",
    imageAlt: "Pote Canibal Inc de creatina monohidratada 100%, 300 g",
    tag: "100% pura",
    details: [],
    flavors: []
  },
  {
    id: "creatina-absolut",
    name: "Creatina 100% pura",
    brand: "Absolut Nutrition",
    category: "creatina",
    categoryLabel: "Creatina",
    description: "Creatina em pó 100% pura.",
    price: 60,
    size: "300 g",
    image: "assets/products/creatina-absolut.webp",
    imageAlt: "Pote Absolut Nutrition de creatina 100% pura, 300 g",
    tag: "100% pura",
    details: [],
    flavors: []
  },
  {
    id: "creatina-nutrata",
    name: "Creatina UP",
    brand: "Nutrata",
    category: "creatina",
    categoryLabel: "Creatina",
    description: "Creatina monohidratada 100% pura, micronizada 200 mesh.",
    price: 75,
    size: "300 g",
    image: "assets/products/creatina-nutrata.webp",
    imageAlt: "Pote Nutrata Creatina UP, sabor neutro, 300 g",
    tag: "Micronizada 200 mesh",
    details: ["Sabor neutro", "100% pura"],
    flavors: []
  },
  {
    id: "omegafor-vitamins",
    name: "OmegaFor Vitamins",
    brand: "Vitafor",
    category: "saude",
    categoryLabel: "Saúde & bem-estar",
    description: "Suplemento em cápsulas com ômega 3 EPA/DHA, multivitaminas e glutationa.",
    price: 99.99,
    size: "120 cápsulas",
    image: "assets/products/omegafor-vitamins.webp",
    imageAlt: "Frasco OmegaFor Vitamins da Vitafor, 120 cápsulas",
    tag: "Ômega 3",
    details: ["Alta concentração de EPA/DHA, conforme informado pela loja"],
    flavors: []
  },
  {
    id: "colageno-tipo-2-mk",
    name: "Colágeno Tipo 2",
    brand: "MK Supplements",
    category: "saude",
    categoryLabel: "Saúde & bem-estar",
    description: "Suplemento alimentar em cápsulas.",
    price: 70,
    size: "60 cápsulas",
    image: "assets/products/colageno-tipo-2-mk.webp",
    imageAlt: "Frasco de Colágeno Tipo 2 da MK Supplements, 60 cápsulas",
    tag: "60 cápsulas",
    details: ["O rótulo também informa ácido hialurônico e manganês"],
    flavors: []
  },
  {
    id: "moroburn",
    name: "Moroburn",
    brand: "MK Supplements",
    category: "termogenico",
    categoryLabel: "Termogênico",
    description: "Suplemento alimentar em tabletes.",
    price: 70,
    size: "60 tabletes",
    image: "assets/products/moroburn.webp",
    imageAlt: "Frasco Moroburn da MK Supplements, 60 tabletes",
    tag: "60 tabletes",
    details: ["O rótulo lista cafeína, L-carnitina e tirosina"],
    flavors: []
  },
  {
    id: "thermo-fire-6-mk",
    name: "Thermo Fire 6",
    brand: "MK Supplements",
    category: "termogenico",
    categoryLabel: "Termogênico",
    description: "Suplemento de cafeína em cápsulas.",
    price: 45,
    size: "60 cápsulas",
    image: "assets/products/thermo-fire-6-mk.webp",
    imageAlt: "Frasco Thermo Fire 6 da MK Supplements, 60 cápsulas",
    tag: "Cafeína",
    details: ["Rótulo: 400 mg de cafeína em 2 cápsulas"],
    flavors: []
  },
  {
    id: "mass-zero-lac",
    name: "Mass Zero Lac",
    brand: "MK Supplements",
    category: "hipercalorico",
    categoryLabel: "Hipercalórico",
    description: "Hipercalórico em pó sem lactose, sabor Chocomaltine.",
    price: 130,
    size: null,
    image: "assets/products/mass-zero-lac.webp",
    imageAlt: "Pacote Mass Zero Lac da MK Supplements, sabor Chocomaltine",
    tag: "Sem lactose",
    details: ["Porção de 160 g: 583 kcal, 19 g de proteína e 124 g de carboidratos", "3 g de creatina por porção"],
    flavors: ["Chocomaltine"]
  }
];

const cart = new Map();
const productGrid = document.querySelector("#product-grid");
const cartDialog = document.querySelector("#cart-dialog");
const checkoutDialog = document.querySelector("#checkout-dialog");
const productImageDialog = document.querySelector("#product-image-dialog");
const cartCount = document.querySelector(".cart-count");
const cartTitleCount = document.querySelector(".cart-title-count");
const cartItems = document.querySelector("#cart-items");
const cartEmpty = document.querySelector("#cart-empty");
const cartFooter = document.querySelector("#cart-footer");
const cartTotal = document.querySelector("#cart-total");
const paymentOptions = document.querySelector("#payment-options");
const paymentError = document.querySelector("#payment-error");
const installmentPaymentOption = document.querySelector("#installment-payment-option");
const installmentField = document.querySelector("#installment-field");
const installmentsSelect = document.querySelector("#installments");
const installmentPreview = document.querySelector("#installment-preview");
const productImagePreview = document.querySelector("#product-image-preview");
const productImageCaption = document.querySelector("#product-image-caption");
const currency = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" });

cartCount.addEventListener("animationend", () => {
  cartCount.classList.remove("is-adding");
});

function renderProducts(category = "todos") {
  const visibleProducts = category === "todos"
    ? products
    : products.filter((product) => product.category === category);

  productGrid.innerHTML = visibleProducts.length
    ? visibleProducts.map((product) => `
        <article class="product-card">
          <div class="product-art">
            <span class="product-tag">${product.tag}</span>
            <button class="product-image-trigger" type="button" data-product-image="${product.id}" aria-label="Ampliar imagem de ${product.name}">
              <img class="product-image" src="${product.image}" alt="" width="768" height="1365" loading="lazy" decoding="async">
              <span class="product-image-hint" aria-hidden="true">Ampliar imagem</span>
            </button>
          </div>
          <div class="product-info">
            <p class="product-category">${product.brand} · ${product.categoryLabel}</p>
            <h3>${product.name}</h3>
            <p class="product-description">${product.description}</p>
            ${product.details.length ? `<ul class="product-details">${product.details.map((detail) => `<li>${detail}</li>`).join("")}</ul>` : ""}
            ${product.flavors.length > 1
              ? `<label class="product-flavor-label" for="flavor-${product.id}">Sabor</label><select class="product-flavor" id="flavor-${product.id}" data-product-flavor>${product.flavors.map((flavor) => `<option value="${flavor}">${flavor}</option>`).join("")}</select>`
              : product.flavors.length === 1
                ? `<p class="product-flavor-note">Sabor: ${product.flavors[0]}</p>`
                : ""}
            <div class="product-buy">
              <span class="product-price">${currency.format(product.price)}<small>valor informado pela loja</small></span>
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

function getCartTotalCents() {
  return [...cart.entries()].reduce((total, [key, quantity]) => {
    const productId = key.slice(0, key.indexOf("::"));
    const product = products.find((item) => item.id === productId);
    return total + Math.round(product.price * 100) * quantity;
  }, 0);
}

function syncInstallmentAvailability() {
  const isEligible = getCartTotalCents() >= INSTALLMENT_MINIMUM_CENTS;
  installmentPaymentOption.disabled = !isEligible;

  if (!isEligible && installmentPaymentOption.checked) {
    installmentPaymentOption.checked = false;
  }

  updateInstallmentFields();
}

function updateInstallmentFields() {
  const isInstallmentPayment = installmentPaymentOption.checked;
  installmentField.hidden = !isInstallmentPayment;
  installmentsSelect.required = isInstallmentPayment;

  if (!isInstallmentPayment) {
    installmentsSelect.value = "";
    installmentPreview.textContent = "";
    return;
  }

  const installmentCount = Number(installmentsSelect.value);
  if (installmentCount) {
    const installmentValue = getCartTotalCents() / 100 / installmentCount;
    installmentPreview.textContent = `${installmentCount}x de ${currency.format(installmentValue)} por mês.`;
  } else {
    installmentPreview.textContent = "Parcelamento disponível em compras a partir de R$ 120,00, em até 3 parcelas mensais.";
  }
}

function updateCart() {
  const count = getCartCount();
  const totalCents = getCartTotalCents();

  cartCount.textContent = String(count);
  cartTitleCount.textContent = `(${count})`;
  cartEmpty.hidden = count > 0;
  cartFooter.hidden = count === 0;
  cartTotal.textContent = currency.format(totalCents / 100);
  cartItems.innerHTML = [...cart.entries()].map(([key, quantity]) => {
    const separatorIndex = key.indexOf("::");
    const productId = key.slice(0, separatorIndex);
    const flavor = key.slice(separatorIndex + 2);
    const product = products.find((item) => item.id === productId);
    return `
      <article class="cart-item">
        <img class="cart-item__image" src="${product.image}" alt="" width="58" height="63" loading="lazy">
        <div>
          <h3 class="cart-item__title">${product.name}</h3>
          <p class="cart-item__price">${currency.format(product.price)} cada</p>
          ${flavor ? `<p class="cart-item__flavor">Sabor: ${flavor}</p>` : ""}
          <div class="quantity-control" aria-label="Quantidade de ${product.name}${flavor ? `, sabor ${flavor}` : ""}">
            <button type="button" data-cart-action="decrease" data-product-key="${key}" aria-label="Diminuir quantidade de ${product.name}">−</button>
            <output>${quantity}</output>
            <button type="button" data-cart-action="increase" data-product-key="${key}" aria-label="Aumentar quantidade de ${product.name}">+</button>
          </div>
        </div>
        <button class="cart-item__remove" type="button" data-cart-action="remove" data-product-key="${key}">Remover</button>
      </article>`;
  }).join("");
  syncInstallmentAvailability();
}

function getSelectedPaymentMethod() {
  return paymentOptions.querySelector('input[name="paymentMethod"]:checked')?.value || "";
}

function animateProductToCart(button) {
  const productImage = button.closest(".product-card").querySelector(".product-image");
  const cartIcon = document.querySelector(".cart-trigger svg");
  const imageRect = productImage.getBoundingClientRect();
  const cartRect = cartIcon.getBoundingClientRect();

  if (!productImage.complete || !productImage.naturalWidth || !imageRect.width || !cartRect.width) return;

  const flyingImage = productImage.cloneNode();
  flyingImage.className = "product-flight";
  flyingImage.setAttribute("aria-hidden", "true");
  Object.assign(flyingImage.style, {
    position: "fixed",
    zIndex: "100",
    top: `${imageRect.top}px`,
    left: `${imageRect.left}px`,
    width: `${imageRect.width}px`,
    height: `${imageRect.height}px`,
    objectFit: "contain",
    background: "#fff",
    outline: "2px solid #a6ef3c",
    outlineOffset: "2px",
    borderRadius: "4px",
    boxShadow: "0 8px 24px rgba(0, 0, 0, .3)",
    pointerEvents: "none",
    transformOrigin: "center"
  });
  document.body.append(flyingImage);

  const offsetX = cartRect.left + cartRect.width / 2 - (imageRect.left + imageRect.width / 2);
  const offsetY = cartRect.top + cartRect.height / 2 - (imageRect.top + imageRect.height / 2);
  const scaleX = cartRect.width / imageRect.width;
  const scaleY = cartRect.height / imageRect.height;
  const destinationTransform = `translate(${offsetX}px, ${offsetY}px) scale(${scaleX}, ${scaleY})`;
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const animation = flyingImage.animate([
    { transform: "translate(0, 0) scale(1)", opacity: 1 },
    {
      transform: destinationTransform,
      opacity: prefersReducedMotion ? .9 : .25,
      offset: prefersReducedMotion ? .85 : .82
    },
    { transform: destinationTransform, opacity: 0 }
  ], {
    duration: prefersReducedMotion ? 520 : 650,
    easing: prefersReducedMotion ? "linear" : "cubic-bezier(.2, .75, .25, 1)",
    fill: "forwards"
  });
  animation.addEventListener("finish", () => flyingImage.remove(), { once: true });
  animation.addEventListener("cancel", () => flyingImage.remove(), { once: true });
}

function updateQuantity(key, action) {
  const current = cart.get(key);
  if (action === "remove" || (action === "decrease" && current === 1)) {
    cart.delete(key);
  } else if (action === "increase") {
    cart.set(key, current + 1);
  } else if (action === "decrease") {
    cart.set(key, current - 1);
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
  const imageButton = event.target.closest("[data-product-image]");
  if (imageButton) {
    const product = products.find((item) => item.id === imageButton.dataset.productImage);
    productImagePreview.src = product.image;
    productImagePreview.alt = product.imageAlt;
    productImageCaption.textContent = [product.name, product.brand, product.size].filter(Boolean).join(" · ");
    productImageDialog.showModal();
    return;
  }

  const button = event.target.closest("[data-add-product]");
  if (!button) return;

  const product = products.find((item) => item.id === button.dataset.addProduct);
  animateProductToCart(button);
  const selectedFlavor = button.closest(".product-card").querySelector("[data-product-flavor]")?.value
    || product.flavors[0]
    || "";
  const cartKey = `${product.id}::${selectedFlavor}`;
  cart.set(cartKey, (cart.get(cartKey) || 0) + 1);
  updateCart();
  cartCount.classList.remove("is-adding");
  void cartCount.offsetWidth;
  cartCount.classList.add("is-adding");
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
  if (button) updateQuantity(button.dataset.productKey, button.dataset.cartAction);
});

paymentOptions.addEventListener("change", () => {
  paymentError.hidden = true;
  updateInstallmentFields();
});
installmentsSelect.addEventListener("change", updateInstallmentFields);

document.querySelector(".cart-trigger").addEventListener("click", () => cartDialog.showModal());
document.querySelectorAll("[data-close-cart]").forEach((button) => button.addEventListener("click", () => cartDialog.close()));
document.querySelectorAll("[data-close-checkout]").forEach((button) => button.addEventListener("click", () => checkoutDialog.close()));
document.querySelector("[data-close-product-image]").addEventListener("click", () => productImageDialog.close());
productImageDialog.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    event.preventDefault();
    productImageDialog.close();
  }
});

cartDialog.addEventListener("click", (event) => {
  if (event.target === cartDialog) cartDialog.close();
});
productImageDialog.addEventListener("click", (event) => {
  if (event.target === productImageDialog) productImageDialog.close();
});
checkoutDialog.addEventListener("click", (event) => {
  if (event.target === checkoutDialog) checkoutDialog.close();
});

document.querySelector("#checkout-button").addEventListener("click", () => {
  const selectedPayment = getSelectedPaymentMethod();
  if (!selectedPayment) {
    paymentError.textContent = "Selecione uma forma de pagamento para continuar.";
    paymentError.hidden = false;
    paymentOptions.querySelector('input[name="paymentMethod"]:not(:disabled)').focus();
    return;
  }

  if (selectedPayment === "credito-parcelado" && !installmentsSelect.value) {
    paymentError.textContent = "Escolha em quantas parcelas mensais deseja pagar.";
    paymentError.hidden = false;
    installmentsSelect.focus();
    return;
  }

  paymentError.hidden = true;
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
  const selectedPayment = getSelectedPaymentMethod();
  const installmentCount = Number(installmentsSelect.value);
  const totalCents = getCartTotalCents();
  if (!name || !address || !selectedPayment) return;
  if (selectedPayment === "credito-parcelado"
    && (totalCents < INSTALLMENT_MINIMUM_CENTS || ![2, 3].includes(installmentCount))) {
    updateInstallmentFields();
    return;
  }

  const orderLines = [...cart.entries()].map(([key, quantity]) => {
    const separatorIndex = key.indexOf("::");
    const productId = key.slice(0, separatorIndex);
    const flavor = key.slice(separatorIndex + 2);
    const product = products.find((item) => item.id === productId);
    const productDetails = [
      product.brand,
      product.size,
      flavor ? `sabor ${flavor}` : ""
    ].filter(Boolean).join(", ");
    return `• ${quantity}x ${product.name}${productDetails ? ` (${productDetails})` : ""} — ${currency.format(product.price * quantity)}`;
  });
  const total = totalCents / 100;
  const paymentLabels = {
    dinheiro: "Dinheiro",
    pix: "Pix",
    debito: "Cartão de débito",
    "credito-vista": "Cartão de crédito à vista",
    "credito-parcelado": `Cartão de crédito parcelado em ${installmentCount}x de ${currency.format(total / installmentCount)} mensais`
  };
  const message = [
    "Oi! Quero confirmar este pedido com a Suplementos Mais:",
    "",
    ...orderLines,
    "",
    `Total do pedido: ${currency.format(total)}`,
    `Forma de pagamento: ${paymentLabels[selectedPayment]}`,
    "A disponibilidade e a forma final de pagamento serão confirmadas pela loja.",
    "",
    `Nome: ${name}`,
    `Endereço para entrega: ${address}`
  ].join("\n");

  window.gtag("event", "whatsapp_checkout", {
    currency: "BRL",
    value: total,
    item_count: getCartCount(),
    items: [...cart.entries()].map(([key, quantity]) => {
      const separatorIndex = key.indexOf("::");
      const productId = key.slice(0, separatorIndex);
      const flavor = key.slice(separatorIndex + 2);
      const product = products.find((item) => item.id === productId);
      return {
        item_id: product.id,
        item_name: product.name,
        ...(flavor ? { item_variant: flavor } : {}),
        price: product.price,
        quantity
      };
    })
  });

  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  cart.clear();
  paymentOptions.querySelectorAll('input[name="paymentMethod"]').forEach((option) => {
    option.checked = false;
  });
  installmentsSelect.value = "";
  updateCart();
  checkoutDialog.close();
});

document.querySelector("#current-year").textContent = String(new Date().getFullYear());
renderProducts();
updateCart();
