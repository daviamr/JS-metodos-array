////////////////////////////////////////////////////////////////////////////////
// Função criando manualmente a div que contém as informações do livro;

// function createCover(img, alt, title, autor, price, category) {
//     const divBox = document.createElement('div');
//     divBox.classList.add('livro')
//     const image = document.createElement('img');
//     image.classList.add('livro__imagens');
//     image.setAttribute('src', img)
//     image.setAttribute('alt', alt)
//     const h2title = document.createElement('h2');
//     h2title.classList.add('livro__titulo');
//     h2title.innerText = title;
//     const pAutor = document.createElement('p');
//     pAutor.classList.add('livro__descricao')
//     pAutor.innerText = autor
//     const pPrice = document.createElement('p');
//     pPrice.classList.add('livro__preco')
//     pPrice.innerText = price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
//     const divTag = document.createElement('div');
//     divTag.classList.add('tags');
//     const spanTag = document.createElement('span');
//     spanTag.innerText = category
//     spanTag.classList.add('tag')

//     divTag.appendChild(spanTag);
//     divBox.appendChild(image);
//     divBox.appendChild(h2title);
//     divBox.appendChild(pAutor);
//     divBox.appendChild(pPrice);
//     divBox.appendChild(divTag);
//     bookSection.appendChild(divBox);
// }