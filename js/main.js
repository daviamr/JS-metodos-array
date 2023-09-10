const endpointApi = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';

let booksData = [];

async function getBookData() {
    const res = await fetch(endpointApi);
    booksData = await res.json();

    // let booksDataWithDicount = applyDiscount(booksData);
    showBooks(booksData);
}
getBookData();