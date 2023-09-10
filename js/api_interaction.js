const books_box_content = document.getElementById('livros');
const frontendBtn = document.getElementById('btnFiltrarLivrosFront');
const backendBtn = document.getElementById('btnFiltrarLivrosBack');
const dataBtn = document.getElementById('btnFiltrarLivrosDados');
const disponibleBtn = document.getElementById('btnLivrosDisponiveis');
const byPrice = document.getElementById('btnOrdenarPorPreco');
const buttons = document.querySelectorAll('.btn');


//Função para mostrar os livros na página
function showBooks(APIdata) {
    books_box_content.innerHTML = '';
    APIdata.forEach((book) => {
        books_box_content.innerHTML +=
            `<div class="livro">
                <img class="livro__imagens" src="${book.imagem}" alt="${book.alt}" />
                <h2 class="livro__titulo">${book.titulo}</h2>
                <p class="livro__descricao">${book.autor}</p>
                <p class="livro__preco" id="preco">${book.preco.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</p>
                <div class="tags">
                    <span class="tag">${book.categoria}</span>
                </div>
            </div >`
    })
}

//Função para aplicar um desconto dinamicamente
function applyDiscount(books) {
    const discount = 0.3;

    booksDataWithDicount = books.map(book => {
        return { ...book, preco: book.preco - (book.preco * discount) }
    })
    return booksDataWithDicount;
}

buttons.forEach(button => button.addEventListener('click', booksFilter));


function booksFilter() {
    const button = document.getElementById(this.id);
    const category = button.value;
    filteredBooks = booksData.filter(book => book.categoria == category);
    showBooks(filteredBooks);
}