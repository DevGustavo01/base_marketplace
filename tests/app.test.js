const { JSDOM } = require('jsdom');

// Cria um DOM simples para os testes
const dom = new JSDOM(`
<input type="text" class="search-bar" />
<div class="product-grid"></div>
`);

global.document = dom.window.document;
global.window = dom.window;

const { renderProducts, products } = require('../scripts/app');

describe('renderProducts', () => {
  test('exibe apenas produtos que correspondem a busca', () => {
    const query = 'produto 2';
    const filtered = products.filter(p => p.name.toLowerCase().includes(query));
    renderProducts(filtered);

    const cards = document.querySelectorAll('.product-card');
    expect(cards).toHaveLength(1);
    expect(cards[0].querySelector('.product-name').textContent).toBe('Produto 2');
  });

  test('nenhum produto exibido quando não há correspondencia', () => {
    const filtered = products.filter(p => p.name.toLowerCase().includes('nao existe'));
    renderProducts(filtered);

    const cards = document.querySelectorAll('.product-card');
    expect(cards).toHaveLength(0);
  });
});
