// LISTA BASE INICIAL OFICIAL DO CARDÁPIO
const defaultMenuItems = [
  // --- PRATOS FEITOS (PFs) ---
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

  // --- APERITIVOS / PETISCOS ---
  {
    id: 21,
    name: "Porção de Mini Pastéis Crocantes (8 un)",
    category: "aperitivos",
    price: 26.9,
    description:
      "8 mini pastéis super crocantes (serve até 2 pessoas). Escolha os sabores na observação: Camarão, Presunto e Queijo, Carne ou Frango.",
    image: "./imagens/petisco1.jfif",
  },
  {
    id: 22,
    name: "Iscas de Peixe com Molho Tártaro (300g)",
    category: "aperitivos",
    price: 36.9,
    description:
      "Tirinhas de filé de peixe empanadas na hora, douradinhas e bem crocantes. Acompanha molho tártaro artesanal e fatias de limão.",
    image: "./imagens/petisco2.jfif",
  },
  {
    id: 23,
    name: "Batata Frita com Queijo e Bacon (400g)",
    category: "aperitivos",
    price: 24.9,
    description:
      "Porção generosa de batata frita bem quentinha, coberta com queijo derretido e cubinhos de bacon crocante.",
    image: "./imagens/petisco3.jfif",
  },
  {
    id: 24,
    name: "Torresmo Caseiro Crocante (250g)",
    category: "aperitivos",
    price: 22.9,
    description:
      "Torresmo pururucado bem crocante por fora e macio por dentro. Acompanha pimentinha da casa e fatias de limão.",
    image: "./imagens/petisco4.jfif",
  },
  {
    id: 25,
    name: "Bolinho de Bacalhau Tradicional (6 un)",
    category: "aperitivos",
    price: 32.9,
    description:
      "6 bolinhos artesanais recheados com bacalhau desfiado, batata e cheiro-verde fresco.",
    image: "./imagens/petisco5.jfif",
  },
  {
    id: 26,
    name: "Tábua de Frios e Azeitonas",
    category: "aperitivos",
    price: 28.9,
    description:
      "Queijo minas frescal em cubos, presunto fatiado, salame picante, ovos de codorna e azeitonas pretas temperadas no azeite.",
    image: "./imagens/petisco6.jfif",
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
    price: 11.9,
    description:
      "Fatia bem servida e lisinha do pudim tradicional da vovó, coberto com bastante calda artesanal de caramelo.",
    image: "./imagens/sobremesa1.jpeg",
  },
  {
    id: 17,
    name: "Mousse de Maracujá Cremosa (150g)",
    category: "sobremesas",
    price: 9.9,
    description:
      "Mousse leve, super aerada e refrescante, feita com a fruta natural e coberta com calda de sementes.",
    image: "./imagens/sobremesa2.jpeg",
  },
  {
    id: 18,
    name: "Brownie Caseiro com Sorvete de Creme",
    category: "sobremesas",
    price: 17.9,
    description:
      "Brownie macio e quentinho de chocolate meio amargo, servido com uma bola generosa de sorvete de creme.",
    image: "./imagens/sobremesa3.jpeg",
  },
  {
    id: 19,
    name: "Doce de Leite com Queijo Minas",
    category: "sobremesas",
    price: 12.9,
    description:
      "A clássica combinação mineira: fatias de queijo minas frescal acompanhadas de doce de leite cremoso artesanal.",
    image: "./imagens/sobremesa4.jpeg",
  },
  {
    id: 20,
    name: "Pavê Tradicional de Chocolate (Fatia)",
    category: "sobremesas",
    price: 13.9,
    description:
      "Camadas intercaladas de biscoito macio, creme de baunilha aveludado e uma cobertura generosa de ganache de chocolate.",
    image: "./imagens/sobremesa5.jpeg",
  },
  {
    id: 27,
    name: "Bolo de Rolo Pernambucano",
    category: "sobremesas",
    price: 13.9,
    description:
      "Fatia fofinha da receita tradicional com finas camadas de massa leve e goiabada derretida. Servida quentinha.",
    image: "./imagens/sobremesa6.jfif",
  },
];

// Garante o carregamento dos itens base sem perder os pratos originais
function getMenuItems() {
  const stored = localStorage.getItem("fogaoAfeto_menu");
  if (!stored) {
    localStorage.setItem("fogaoAfeto_menu", JSON.stringify(defaultMenuItems));
    return defaultMenuItems;
  }
  return JSON.parse(stored);
}

let menuItems = getMenuItems();
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
  if (!menuGrid) return;
  menuGrid.innerHTML = "";

  if (items.length === 0) {
    menuGrid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: #666; font-weight: 700;">Nenhum prato encontrado nesta categoria.</p>`;
    return;
  }

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
          <span class="card-price">R$ ${Number(item.price).toFixed(2).replace(".", ",")}</span>
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
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const category = btn.getAttribute("data-category");
      menuItems = getMenuItems();
      if (category === "todos") {
        renderMenu(menuItems);
      } else {
        const filtered = menuItems.filter((item) => item.category === category);
        renderMenu(filtered);
      }
    });
  });

  if (openCartBtn)
    openCartBtn.addEventListener("click", () =>
      cartModal.classList.add("open"),
    );
  if (closeCartBtn)
    closeCartBtn.addEventListener("click", () =>
      cartModal.classList.remove("open"),
    );

  if (cartModal) {
    cartModal.addEventListener("click", (e) => {
      if (e.target === cartModal) cartModal.classList.remove("open");
    });
  }

  if (checkoutBtn) checkoutBtn.addEventListener("click", sendWhatsApp);
}

function addToCart(id) {
  menuItems = getMenuItems();
  const product = menuItems.find((item) => item.id === id);
  const existingItem = cart.find((item) => item.id === id);

  if (existingItem) {
    existingItem.quantity += 1;
  } else if (product) {
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

  cartItem = cart.find((item) => item.id === itemId);
  const qtyElement = document.getElementById(`qty-${itemId}`);
  if (qtyElement) {
    qtyElement.textContent = cartItem ? cartItem.quantity : 0;
  }
}

function updateCartUI() {
  if (!cartCountElement) return;
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
          <span class="cart-item-price">R$ ${Number(item.price).toFixed(2).replace(".", ",")}</span>
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
