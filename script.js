const myLibrary = [
  {
    id: '100173ea-fd9c-44fb-ae46-922a1366eb02',
    name: 'The Way of Kings',
    author: 'Brandon Sanderson',
    year: 2010,
    description: 'The Stormlight Archive is an epic fantasy series by Brandon Sanderson. The series is expected to be composed of ten books, in keeping with the series\' symmetrical focus in combinations of ten.However, those ten books will be divided into two groups of five.',
    cover: 'https://miro.medium.com/v2/resize:fit:4800/format:webp/1*QD5qZosh_aE2VPVSxGYmxQ.jpeg'
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

function addBookToPage() {

  myLibrary.forEach((book) => {

    const allCards = document.querySelectorAll(".card");
    let alreadyExists = false;
    allCards.forEach((bookOnPage) => {
      if (bookOnPage.id === book.id) {
        alreadyExists = true;
      }
    });
    if (alreadyExists) return;

    const newBook = document.createElement("div");
    newBook.className = "card";
    const bookName = document.createElement("div");
    bookName.className = "desc";
    bookName.textContent = book.name;
    const bookCover = document.createElement("div");
    bookCover.className = "img-block";
    bookCover.style.background = `url(${book.cover}) 358px`;
    bookCover.style.backgroundSize = `358px`;

    newBook.id = book.id;

    newBook.appendChild(bookCover);
    newBook.appendChild(bookName);

    const firstChild = bookTable.firstChild;
    bookTable.insertBefore(newBook, firstChild);
  });
}

const addButton = document.querySelector(".add-btn");
const addCards = document.querySelector(".add-cards");
const bookTable = document.querySelector(".book-conteiner");
const dialog = document.querySelector('dialog');

addBookToPage();

bookTable.addEventListener('click', (e) => {
  const book = e.target.closest('.card');
  if (!book) return;

  const found = myLibrary.find(item => item.id === book.id);

  if (found) {
    const modalHeader = document.querySelector(".modal-header");
    modalHeader.textContent = found.name;

    const modalCover = document.querySelector(".modal-img-block")
    modalCover.style.background = `url(${found.cover}) center`;
    modalCover.style.backgroundSize = `975px`;



    dialog.showModal();
  }
});