const itemsGrid = document.getElementById("items_grid");
const itemSearch = document.getElementById("item_search");
const itemsCount = document.getElementById("items_count");
const filterButtons = document.querySelectorAll(".filter_button");
const clearFiltersButton = document.getElementById("clear_filters");
const emptyState = document.getElementById("empty_state");
const itemModal = document.getElementById("item_modal");
const modalItemContent = document.getElementById("modal_item_content");
const modalClose = document.getElementById("modal_close");
const modalBackdrop = document.getElementById("modal_backdrop");

let selectedCategory = "todos";

const categoryNames = {
    recursos: "Recursos",
    materiais: "Materiais",
    tecnologia: "Tecnologia",
    ferramentas: "Ferramentas",
    equipamentos: "Equipamentos",
    consumiveis: "Consumíveis",
    veiculos: "Veículos",
    modulos: "Módulos",
    base: "Base",
    energia: "Energia",
    alienigenas: "Alienígenas",
    especiais: "Especiais"
};

function normalizeText(text) {
    return String(text)
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase();
}

function renderItems() {
    const searchTerm = normalizeText(itemSearch.value);

    const filteredItems = items.filter((item) => {
        const matchesCategory =
            selectedCategory === "todos" ||
            item.categoria === selectedCategory;

        const content = normalizeText(
            `${item.nome} ${item.categoria} ${item.descricao} ${item.receita} ${item.localizacao}`
        );

        return matchesCategory && content.includes(searchTerm);
    });

    itemsGrid.innerHTML = "";

    itemsCount.textContent =
        `${filteredItems.length} de ${items.length} itens encontrados`;

    emptyState.classList.toggle(
        "hidden",
        filteredItems.length > 0
    );

    filteredItems.forEach((item) => {
        const card = document.createElement("button");

        card.type = "button";
        card.className = "item_card";

        card.innerHTML = `
            <div class="item_card_top">
                <div class="item_icon">${item.icone}</div>
                <span class="item_category">
                    ${categoryNames[item.categoria] || item.categoria}
                </span>
            </div>

            <div>
                <h2>${item.nome}</h2>
                <p>${item.descricao}</p>
            </div>

            <span class="item_more">VER DETALHES →</span>
        `;

        card.addEventListener("click", () => {
            openModal(item);
        });

        itemsGrid.appendChild(card);
    });
}

function openModal(item) {
    modalItemContent.innerHTML = `
        <div class="modal_header">
            <div class="item_icon">${item.icone}</div>

            <div>
                <h2 id="modal_title">${item.nome}</h2>
                <p>${categoryNames[item.categoria] || item.categoria}</p>
            </div>
        </div>

        <p class="modal_description">
            ${item.descricao}
        </p>

        <div class="modal_information">
            <div class="info_block">
                <span>Receita ou obtenção</span>
                <p>${item.receita}</p>
            </div>

            <div class="info_block">
                <span>Onde encontrar</span>
                <p>${item.localizacao}</p>
            </div>

            <div class="info_block">
                <span>Desbloqueio</span>
                <p>${item.desbloqueio}</p>
            </div>
        </div>
    `;

    itemModal.classList.remove("hidden");
    document.body.style.overflow = "hidden";
}

function closeModal() {
    itemModal.classList.add("hidden");
    document.body.style.overflow = "";
}

function setActiveCategory(category) {
    selectedCategory = category;

    filterButtons.forEach((button) => {
        button.classList.toggle(
            "active",
            button.dataset.category === category
        );
    });

    renderItems();
}

itemSearch.addEventListener("input", renderItems);

filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
        setActiveCategory(button.dataset.category);
    });
});

clearFiltersButton.addEventListener("click", () => {
    itemSearch.value = "";
    setActiveCategory("todos");
});

modalClose.addEventListener("click", closeModal);
modalBackdrop.addEventListener("click", closeModal);

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        closeModal();
    }
});

renderItems();