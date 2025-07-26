const myLibrary = [
  {
    id: '100173ea-fd9c-44fb-ae46-922a1366eb02',
    name: 'Book',
    author: 'Ben',
    year: 1999,
    description: 'description',
    cover: 'cover'
  }
];

function Book(name, author, year, description, cover) {
  this.id = crypto.randomUUID();
  this.name = name;
  this.author = author;
  this.year = year;
  this.description = description;
  this.cover = cover;
}

function addBookToLibrary(name, author, year, description, cover) {
  myLibrary.push(new Book(name, author, year, description, cover));
}

function addBookToList() {

  myLibrary.forEach((book) => {
    const article = document.createElement("article");
    article.textContent = `
    Назва: ${book.name},
    Автор: ${book.author}`
    body.appendChild(article);
  });
}

const addButton = document.querySelector(".add-btn");
const addCards = document.querySelector(".add-cards");