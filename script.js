// const myLibrary = [
//   {
//     id: '100173ea-fd9c-44fb-ae46-922a1366eb02',
//     name: 'The Way of Kings',
//     author: 'Brandon Sanderson',
//     year: 2010,
//     description: 'The Stormlight Archive is an epic fantasy series by Brandon Sanderson. The series is expected to be composed of ten books, in keeping with the series\' symmetrical focus in combinations of ten.However, those ten books will be divided into two groups of five.',
//     cover: 'https://miro.medium.com/v2/resize:fit:4800/format:webp/1*QD5qZosh_aE2VPVSxGYmxQ.jpeg'
//   }
// ];

// Object.setPrototypeOf(myLibrary[0], Book.prototype);

// function Book(name, author, year, description, cover) {
//   this.id = crypto.randomUUID();
//   this.name = name;
//   this.author = author;
//   this.year = year;
//   this.description = description;
//   this.cover = cover;
// }

// Book.prototype.changeReadStatus = function () {
//   this.read = !this.read;
// };

// function addBookToLibrary(name, author, year, description, cover) {
//   myLibrary.push(new Book(name, author, year, description, cover));
// }

// function addBookToPage() {

//   myLibrary.forEach((book) => {

//     const allCards = document.querySelectorAll(".card");
//     let alreadyExists = false;
//     allCards.forEach((bookOnPage) => {
//       if (bookOnPage.id === book.id) {
//         alreadyExists = true;
//       }
//     });
//     if (alreadyExists) return;

//     const newBook = document.createElement("div");
//     newBook.className = "card";
//     const bookName = document.createElement("div");
//     bookName.className = "desc";
//     bookName.textContent = book.name;
//     const bookCover = document.createElement("div");
//     bookCover.className = "img-block";
//     bookCover.style.background = `url(${book.cover}) 358px`;
//     bookCover.style.backgroundSize = `358px`;


//     deleteBook.className = "delete-book";
//     deleteBook.textContent = "Delete";


//     markRead.className = "mark-read";
//     if (book.read) markRead.textContent = "Read";
//     markRead.textContent = "Unread";

//     newBook.id = book.id;

//     newBook.appendChild(bookCover);
//     newBook.appendChild(bookName);
//     bookCover.appendChild(markRead);
//     bookCover.appendChild(deleteBook);


//     const firstChild = bookTable.firstChild;
//     bookTable.insertBefore(newBook, firstChild);
//   });
// }

// function openCardView(found) {
//   const modalHeader = document.querySelector(".modal-header");
//   modalHeader.textContent = found.name;

//   const modalCover = document.querySelector(".modal-img-block")
//   modalCover.style.background = `url(${found.cover}) center`;
//   modalCover.style.backgroundSize = `975px`;

//   const author = document.querySelector(".author");
//   const year = document.querySelector(".year");
//   const description = document.querySelector(".description");

//   author.textContent = "";
//   year.textContent = "";
//   description.textContent = "";

//   function appendLabelAndValue(container, labelText, valueText) {
//     const label = document.createElement('b');
//     label.textContent = labelText;

//     const value = document.createElement('span');
//     value.textContent = valueText;

//     container.appendChild(label);
//     container.appendChild(value);
//   }

//   appendLabelAndValue(author, 'Author: ', found.author);
//   appendLabelAndValue(year, 'Release date: ', found.year);
//   appendLabelAndValue(description, 'Description: ', found.description);

//   dialog.showModal();
// }

// function createNewBookObj() {
//   const formData = new FormData(createBookForm);
//   const data = {};
//   formData.forEach((value, key) => data[key] = value);
//   return data;
// }

// const addButton = document.querySelector(".add-btn");
// const addCards = document.querySelector(".add-cards");
// const bookTable = document.querySelector(".book-container");
// const dialog = document.querySelector('.card-info');
// const newCard = document.querySelector('.new-card')
// const createBookForm = document.querySelector(".createBookForm")
// const deleteBook = document.createElement("button");
// const markRead = document.createElement("button");

// addBookToPage();

// bookTable.addEventListener('click', (e) => {
//   const book = e.target.closest('.card');
//   if (!book) return;
//   if (e.target.closest('button')) return;

//   const found = myLibrary.find(item => item.id === book.id);
//   if (found) openCardView(found);
// });

// addCards.addEventListener("click", () => newCard.showModal());
// addButton.addEventListener("click", () => newCard.showModal());

// createBookForm.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const data = createNewBookObj();
//   addBookToLibrary(data.name, data.author, data.year, data.description, data.cover);
//   addBookToPage();
//   createBookForm.reset();
//   newCard.close();
// })

// markRead.addEventListener('click', (e) => {
//   const book = e.target.closest('.card');
//   const found = myLibrary.find(item => item.id === book.id);
//   if (found.read) {
//     markRead.textContent = "Unread";
//     found.changeReadStatus();
//   } else {
//     markRead.textContent = "Read";
//     found.changeReadStatus();
//   }

// });

// deleteBook.addEventListener('click', (e) => {
//   const book = e.target.closest('.card');
//   const found = myLibrary.find(item => item.id === book.id);
//   myLibrary.pop(found);
//   book.remove();
// })