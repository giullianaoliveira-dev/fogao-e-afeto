const menuItems = [
  // --- PRATOS FEITOS ---
  {
    id: 1,
    name: "PF Executivo de Bife Acebolado",
    category: "pfs",
    price: 26.9,
    description:
      "Bife de alcatra macio acebolado, arroz branco, feijão fresquinho, batata frita e salada simples.",
    image: "./imagens/prato1.jpg",
  },
  {
    id: 2,
    name: "PF de Strogonoff de Frango",
    category: "pfs",
    price: 24.5,
    description:
      "Strogonoff cremoso de frango com cogumelos, acompanhado de arroz branco bem soltinho e batata palha crocante.",
    image: "./imagens/prato2.jpg",
  },
  {
    id: 3,
    name: "Feijoada Completa da Casa",
    category: "pfs",
    price: 32.0,
    description:
      "Feijoada tradicional com carnes nobres, servida com arroz, couve refogada no alho, farofa caseira e laranjinha.",
    image: "./imagens/prato3.jpeg",
  },
  {
    id: 4,
    name: "PF de Filé de Frango Grelhado",
    category: "pfs",
    price: 22.9,
    description:
      "Filé de frango douradinho na chapa, arroz integral ou branco, feijão e purê de batata caseiro.",
    image: "./imagens/prato4.jpeg",
  },
  {
    id: 5,
    name: "Virado à Paulista",
    category: "pfs",
    price: 28.5,
    description:
      "Tutu de feijão saboroso, bisteca de porco grelhada, ovo frito com gema mole, couve e arroz.",
    image: "./imagens/prato5.jpeg",
  },
  {
    id: 6,
    name: "PF Comercial de Peixe Empanado",
    category: "pfs",
    price: 27.9,
    description:
      "Filé de peixe crocante por fora e macio por dentro, arroz, feijão, pirão temperado e salada verde.",
    image: "./imagens/prato6.jpeg",
  },
  {
    id: 7,
    name: "Macarronada de Espaguete à Bolognesa",
    category: "pfs",
    price: 23.9,
    description:
      "Espaguete ao molho artesanal de tomate com carne moída bem temperada e bastante queijo ralado por cima.",
    image: "./imagens/prato7.jpeg",
  },
  {
    id: 8,
    name: "PF Vegetariano de Omelete Recheada",
    category: "pfs",
    price: 21.9,
    description:
      "Omelete alta com queijo e tomate, acompanhada de arroz, feijão, legumes no vapor e salada.",
    image: "./imagens/prato8.jpeg",
  },

  // --- BEBIDAS ---
  {
    id: 9,
    name: "Água Mineral 500ml (Sem Gás / Com Gás)",
    category: "bebidas",
    price: 4.5,
    description:
      "Água mineral gelada em garrafa 500ml. Escolha com ou sem gás.",
    image: "./imagens/bebida1.jpeg",
  },
  {
    id: 10,
    name: "H2OH! Limão 500ml",
    category: "bebidas",
    price: 7.5,
    description: "Bebida levemente gaseificada com suco natural de limão.",
    image: "./imagens/bebida2.jpeg",
  },
  {
    id: 11,
    name: "Refrigerante Lata 350ml",
    category: "bebidas",
    price: 6.5,
    description: "Coca-Cola, Coca Zero, Guaraná Antarctica, Fanta ou Sprite.",
    image: "./imagens/bebida3.jpeg",
  },
  {
    id: 12,
    name: "Suco Natural de Laranja 500ml",
    category: "bebidas",
    price: 9.0,
    description: "Suco espremido da fruta na hora, bem geladinho.",
    image: "./imagens/bebida4.jpeg",
  },
  {
    id: 13,
    name: "Suco Natural de Maracujá 500ml",
    category: "bebidas",
    price: 9.5,
    description: "Suco natural e refrescante preparado com a fruta bem madura.",
    image: "./imagens/bebida5.jpeg",
  },
  {
    id: 14,
    name: "Suco Natural de Cupuaçu 500ml",
    category: "bebidas",
    price: 10.0,
    description: "Suco cremoso da polpa de cupuaçu natural, super aromático.",
    image: "./imagens/bebida6.jpeg",
  },
  {
    id: 15,
    name: "Vitamina de Banana com Aveia e Mel 500ml",
    category: "bebidas",
    price: 11.0,
    description:
      "Vitamina batida no liquidificador com leite, banana, aveia e toque de mel.",
    image: "./imagens/bebida7.jpeg",
  },

  // --- SOBREMESAS ---
  {
    id: 16,
    name: "Pudim de Leite Condensado Caseiro",
    category: "sobremesas",
    price: 8.9,
    description:
      "Fatia generosa do pudim tradicional da vovó com calda de caramelo.",
    image: "./imagens/sobremesa1.jpeg",
  },
  {
    id: 17,
    name: "Mousse de Maracujá",
    category: "sobremesas",
    price: 7.5,
    description:
      "Mousse leve, aerada e geladinha com sementes da fruta por cima.",
    image: "./imagens/sobremesa2.jpeg",
  },
  {
    id: 18,
    name: "Brownie Caseiro com Sorvete de Creme",
    category: "sobremesas",
    price: 15.9,
    description:
      "Brownie quentinho de chocolate meio amargo servido com uma bola de sorvete de creme.",
    image: "./imagens/sobremesa3.jpeg",
  },
  {
    id: 19,
    name: "Doce de Leite com Queijo Minas",
    category: "sobremesas",
    price: 9.9,
    description:
      "Combinação clássica caseira: doce de leite cremoso acompanhado de fatia de queijo minas frescal.",
    image: "./imagens/sobremesa4.jpeg",
  },
  {
    id: 20,
    name: "Pavê Tradicional de Chocolate",
    category: "sobremesas",
    price: 10.5,
    description:
      "Camadas intercaladas de biscoito, creme de baunilha e cobertura generosa de chocolate.",
    image: "./imagens/sobremesa5.jpeg",
  },
];

let cart = [];

const menuGrid = document.getElementById("menu-grid");
const filterBtns = document.querySelectorAll(".filter-btn");
const cartModal = document.getElementById("cart-modal");
const openCartBtn = document.getElementById("open-cart-btn");
const closeCartBtn = document.getElementById("close-cart-btn");
const cartItemsContainer = document.getElementById("cart-items");
const cartCountElement = document.getElementById("cart-count");
const subtotalValElement = document.getElementById("subtotal-val");
const totalValElement = document.getElementById("total-val");
const checkoutBtn = document.getElementById("checkout-btn");

document.addEventListener("DOMContentLoaded", () => {
  renderMenu(menuItems);
  setupEvents();
});

function renderMenu(items) {
  menuGrid.innerHTML = "";

  items.forEach((item) => {
    const card = document.createElement("div");
    card.classList.add("card");

    const cartItem = cart.find((c) => c.id === item.id);
    const qty = cartItem ? cartItem.quantity : 0;

    card.innerHTML = `
      <img src="${item.image}" alt="${item.name}" class="card-img" onerror="this.onerror=null; this.src='https://placehold.co/400x300/e2e8f0/1e293b?text=Foto+do+Prato';">
      <div class="card-body">
        <h3 class="card-title">${item.name}</h3>
        <p class="card-desc">${item.description}</p>
        <div class="card-footer">
          <span class="card-price">R$ ${item.price.toFixed(2).replace(".", ",")}</span>
          <div class="qty-selector">
            <button class="qty-btn btn-minus" onclick="changeQuantity(${item.id}, -1)">-</button>
            <span class="qty-value" id="qty-${item.id}">${qty}</span>
            <button class="qty-btn btn-plus" onclick="changeQuantity(${item.id}, 1)">+</button>
          </div>
        </div>
      </div>
    `;

    menuGrid.appendChild(card);
  });
}

function setupEvents() {
  // Filtros de Categoria
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const category = btn.getAttribute("data-category");
      if (category === "todos") {
        renderMenu(menuItems);
      } else {
        const filtered = menuItems.filter((item) => item.category === category);
        renderMenu(filtered);
      }
    });
  });

  // Abrir e Fechar Carrinho
  openCartBtn.addEventListener("click", () => cartModal.classList.add("open"));
  closeCartBtn.addEventListener("click", () =>
    cartModal.classList.remove("open"),
  );

  cartModal.addEventListener("click", (e) => {
    if (e.target === cartModal) cartModal.classList.remove("open");
  });

  // Finalizar no WhatsApp
  checkoutBtn.addEventListener("click", sendWhatsApp);
}

function addToCart(id) {
  const product = menuItems.find((item) => item.id === id);
  const existingItem = cart.find((item) => item.id === id);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  updateCartUI();
}

function changeQuantity(itemId, change) {
  let cartItem = cart.find((item) => item.id === itemId);
  const menuItem = menuItems.find((item) => item.id === itemId);

  if (change > 0) {
    addToCart(itemId);
    if (menuItem) {
      showToast(`Adicionado: 1x ${menuItem.name}`);
    }
  } else if (change < 0 && cartItem) {
    if (cartItem.quantity > 1) {
      cartItem.quantity -= 1;
    } else {
      cart = cart.filter((item) => item.id !== itemId);
    }
    updateCartUI();
    if (menuItem) {
      showToast(`Removido: 1x ${menuItem.name}`);
    }
  }

  // Atualiza o contador visual no card
  cartItem = cart.find((item) => item.id === itemId);
  const qtyElement = document.getElementById(`qty-${itemId}`);
  if (qtyElement) {
    qtyElement.textContent = cartItem ? cartItem.quantity : 0;
  }
}

function updateCartUI() {
  const totalCount = cart.reduce((acc, item) => acc + item.quantity, 0);
  cartCountElement.innerText = totalCount;

  cartItemsContainer.innerHTML = "";

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = `<p style="text-align:center; color:#888;">Seu carrinho está vazio.</p>`;
  } else {
    cart.forEach((item) => {
      const row = document.createElement("div");
      row.classList.add("cart-item-row");

      row.innerHTML = `
        <div class="cart-item-info">
          <span class="cart-item-title">${item.name}</span>
          <span class="cart-item-price">R$ ${item.price.toFixed(2).replace(".", ",")}</span>
        </div>
        <div class="cart-item-actions">
          <button class="qty-btn" onclick="changeQuantity(${item.id}, -1)">-</button>
          <span>${item.quantity}</span>
          <button class="qty-btn" onclick="changeQuantity(${item.id}, 1)">+</button>
        </div>
      `;

      cartItemsContainer.appendChild(row);
    });
  }

  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );
  const deliveryFee = subtotal > 0 ? 5.0 : 0.0;
  const total = subtotal + deliveryFee;

  subtotalValElement.innerText = `R$ ${subtotal.toFixed(2).replace(".", ",")}`;
  totalValElement.innerText = `R$ ${total.toFixed(2).replace(".", ",")}`;
}

function sendWhatsApp() {
  if (cart.length === 0) {
    alert("Adicione pelo menos um item ao seu carrinho!");
    return;
  }

  let message = "Olá, Fogão & Afeto! Gostaria de fazer o seguinte pedido:\n\n";

  cart.forEach((item) => {
    message += `• *${item.quantity}x* ${item.name} - R$ ${(item.price * item.quantity).toFixed(2).replace(".", ",")}\n`;
  });

  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );
  const total = subtotal + 5.0;

  message += `\n*Taxa de entrega:* R$ 5,00`;
  message += `\n*Total do Pedido:* R$ ${total.toFixed(2).replace(".", ",")}`;
  message += `\n\n*Endereço de Entrega:* (Preencher aqui)`;

  const encodedMessage = encodeURIComponent(message);
  const phone = "5522999998888";
  window.open(`https://wa.me/${phone}?text=${encodedMessage}`, "_blank");
}

// Função para exibir o aviso flutuante (Toast)
function showToast(message) {
  const toast = document.getElementById("toast-notification");
  if (!toast) return;

  toast.innerHTML = `<i class="fa-solid fa-bag-shopping" style="color: #e5a73c;"></i> ${message}`;
  toast.classList.add("show");

  clearTimeout(window.toastTimeout);
  window.toastTimeout = setTimeout(() => {
    toast.classList.remove("show");
  }, 2500);
}
