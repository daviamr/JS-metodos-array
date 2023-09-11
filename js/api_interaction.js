const books_box_content = document.getElementById('livros');
const disponibleBtn = document.getElementById('btnLivrosDisponiveis');
const byPrice = document.getElementById('btnOrdenarPorPreco');
const buttons = document.querySelectorAll('.btn');

const totalValueElement = document.getElementById('valor_total_livros_disponiveis');


//Função para mostrar os livros na página
function showBooks(booksData) { //Primeira vez chamada no main.js, executa e mostra todos os livros
    books_box_content.innerHTML = ''; //Quando um botão é clicado, ele reseta os livros e chama a função novamente com a array da categoria do botao clicado como parâmetro
    booksData.forEach((book) => {
        // let disponibility = availability(book);
        let disponibility = book.quantidade > 0 ? 'livro__imagens' : 'livro__imagens indisponivel';
        let value = book.quantidade == 0 ? book.preco = 0 : book.preco;
        totalValueElement.innerHTML = ''
        books_box_content.innerHTML +=
            `<div class="livro">
                <img class="${disponibility}" src="${book.imagem}" alt="${book.alt}" />
                <h2 class="livro__titulo">${book.titulo}</h2>
                <p class="livro__descricao">${book.autor}</p>
                <p class="livro__preco" id="preco">${value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</p>
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

//Evento adicionado no array que contém todos os botões
buttons.forEach(button => button.addEventListener('click', booksFilter));


function booksFilter() { //Quando chamada
    const button = document.getElementById(this.id); //Verifica qual o id do botão clicado
    const category = button.value; //Obtém o atributo 'value' do botão clicado
    filteredBooks = category == 'disponivel' ? booksData.filter(book => book.quantidade > 0) : booksData.filter(book => book.categoria == category);
    showBooks(filteredBooks);
    if (category == 'disponivel') {
        //evento click chamando a função de ordenação
        displayTotalAmount(filteredBooks);
    } else {
        displayTotalAmount(filteredBooks);
    }
}


byPrice.addEventListener('click', orderByPrice);
//função para ordernar os livros do menor valor para o maior
function orderByPrice() {
    let orderedBooks = booksData.sort((a, b) => a.preco - b.preco)
    showBooks(orderedBooks);
    displayTotalAmount(booksData)
}

//função mostrando o valor total dos livros disponíveis
function displayTotalAmount(booksData) {
    totalValue = booksData.reduce((a, b) => a + b.preco, 0);
    console.table(totalValue.toFixed(2));

    totalValueElement.innerHTML =
        `<div class="livros__disponiveis">
    <p>Todos os livros disponíveis por R$ <span id="valor">${totalValue.toFixed(2)}</span></p>
    </div>`;
}