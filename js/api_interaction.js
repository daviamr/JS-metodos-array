const books_box_content = document.getElementById('livros');
const byPrice = document.getElementById('btnOrdenarPorPreco');
const buttons = document.querySelectorAll('.btn');
const totalValueElement = document.getElementById('valor_total_livros_disponiveis');

//função para mostrar os livros na página;
function showBooks(booksData) { //primeira vez chamada no main.js, executa e mostra todos os livros;
    books_box_content.innerHTML = '';
    booksData.forEach((book) => {
        //condicional aplicando a classe indisponivel caso a quantidade seja >= 0;
        let disponibility = book.quantidade > 0
            ? 'livro__imagens'
            : 'livro__imagens indisponivel';
        //condicional aplicando o valor 0 à livros indisponíveis, para não atrapalhar a devolução do valor final no reduce() na func displayTotalAmount();
        let value = book.quantidade == 0
            ? book.preco = 0
            : book.preco;

        totalValueElement.innerHTML = '';
        books_box_content.innerHTML +=
            `<div class="livro">
                <img class="${disponibility}" src="${book.imagem}" alt="${book.alt}" />
                <h2 class="livro__titulo">${book.titulo}</h2>
                <p class="livro__descricao">${book.autor}</p>
                <p class="livro__preco" id="preco">${value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</p>
                <div class="tags">
                    <span class="tag">${book.categoria}</span>
                </div>
            </div >`;
    })
}

//evento adicionado no array que contém todos os botões;
buttons.forEach(button => button.addEventListener('click', booksFilter));

function booksFilter() { //quando chamada
    const button = document.getElementById(this.id); //verifica qual o id do botão clicado;
    const category = button.value; //obtém o valor atributo 'value' do botão clicado;

    filteredBooks = category == 'disponivel'
        ? booksData.filter(book => book.quantidade > 0)
        : booksData.filter(book => book.categoria == category);

    showBooks(filteredBooks); //mostra os livros filtrados;
    displayTotalAmount(filteredBooks); //mostra o valor total dos livros filtrados;
}

//evento click chamando a função de ordenação;
byPrice.addEventListener('click', orderByPrice);

//função para ordernar os livros do menor valor para o maior;
function orderByPrice() {
    let orderedBooks = booksData.sort((a, b) => a.preco - b.preco);
    showBooks(orderedBooks);
    displayTotalAmount(orderedBooks);
}

//função mostrando o valor total dos livros disponíveis;
function displayTotalAmount(booksData) {
    totalValue = booksData.reduce((acc, book) => acc + book.preco, 0);
    //booksData.reduce(acumulador, livro) acumulador + valor livro, acumulador começando com 0 e segue acumulando o valor de cada livro;
    //reduce() basicamente reduz todo um array em um único valor final;

    totalValueElement.innerHTML =
        `<div class="livros__disponiveis">
            <p>
                Todos os livros disponíveis por R$ 
                <span id="valor">${totalValue.toFixed(2)}</span>
            </p>
        </div>`;
}

//função para aplicar um desconto dinamicamente;
function applyDiscount(books) {
    const discount = 0.3; //em % (1 = 100%)

    booksDataWithDicount = books.map(book => {
        return { ...book, preco: book.preco - (book.preco * discount) }
    })
    return booksDataWithDicount;
}