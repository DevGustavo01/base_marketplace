// Simulação de dados
const products = [
    { id: 1, name: "Produto 1", price: 50, image: "assets/images/product1.jpg" },
    { id: 2, name: "Produto 2", price: 75, image: "assets/images/product2.jpg" },
    { id: 3, name: "Produto 3", price: 100, image: "assets/images/product3.jpg" },
];
// Lista de produtos simulada, cada produto contém id, nome, preço e imagem.

// Seleção dos elementos do DOM
const productGrid = typeof document !== 'undefined' ? document.querySelector('.product-grid') : null; // Seleciona o container que exibe os produtos.
const searchBar = typeof document !== 'undefined' ? document.querySelector('.search-bar') : null; // Seleciona a barra de busca.

// Função para renderizar os produtos
function renderProducts(productsToRender) {
    productGrid.innerHTML = ''; // Limpa o conteúdo atual do grid.
    productsToRender.forEach(product => {
        // Gera o HTML para cada produto.
        const productHTML = `
            <div class="product-card">
              <img src="${product.image}" alt="${product.name}" class="product-image">
              <h3 class="product-name">${product.name}</h3>
              <p class="product-price">$${product.price.toFixed(2)}</p>
              <button class="add-to-cart" data-id="${product.id}">Adicionar ao Carrinho</button>
            </div>
        `;
        productGrid.insertAdjacentHTML('beforeend', productHTML); // Insere o HTML do produto no grid.
    });
}

// Event Listener para a barra de busca
if (searchBar) {
    searchBar.addEventListener('input', (e) => {
        const searchValue = e.target.value.toLowerCase(); // Captura o valor digitado pelo usuário e converte para minúsculo.
        const filteredProducts = products.filter(product =>
            product.name.toLowerCase().includes(searchValue) // Filtra produtos cujo nome inclui o texto buscado.
        );
        renderProducts(filteredProducts); // Re-renderiza os produtos com base no filtro.
    });
}

// Inicialização
if (typeof document !== 'undefined') {
    renderProducts(products); // Renderiza todos os produtos ao carregar a página.
}

// Exportação para testes
if (typeof module !== 'undefined') {
    module.exports = { renderProducts, products };
}
