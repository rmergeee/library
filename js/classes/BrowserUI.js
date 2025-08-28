import { Library } from "./Library.js"

export class BrowserUI {
    constructor() {
        this.library = new Library();
    }

    addBookToPage() {

        this.library.bookStorage.forEach((book) => {

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


            this.deleteBook.className = "delete-book";
            this.deleteBook.textContent = "Delete";


            this.markRead.className = "mark-read";
            if (book.read) {
                this.markRead.textContent = "Read";
            } else {
                this.markRead.textContent = "Unread";
            }

            newBook.id = book.id;

            newBook.appendChild(bookCover);
            newBook.appendChild(bookName);
            bookCover.appendChild(this.markRead);
            bookCover.appendChild(this.deleteBook);


            const firstChild = this.bookTable.firstChild;
            this.bookTable.insertBefore(newBook, firstChild);
        });
    }

    createNewBookObj() {
        const formData = new FormData(this.createBookForm);
        const data = {};
        formData.forEach((value, key) => data[key] = value);
        return data;
    }

    openCardView(found) {
        const modalHeader = document.querySelector(".modal-header");
        modalHeader.textContent = found.name;

        const modalCover = document.querySelector(".modal-img-block")
        modalCover.style.background = `url(${found.cover}) center`;
        modalCover.style.backgroundSize = `975px`;

        const author = document.querySelector(".author");
        const year = document.querySelector(".year");
        const description = document.querySelector(".description");

        author.textContent = "";
        year.textContent = "";
        description.textContent = "";

        function appendLabelAndValue(container, labelText, valueText) {
            const label = document.createElement('b');
            label.textContent = labelText;

            const value = document.createElement('span');
            value.textContent = valueText;

            container.appendChild(label);
            container.appendChild(value);
        }

        appendLabelAndValue(author, 'Author: ', found.author);
        appendLabelAndValue(year, 'Release date: ', found.year);
        appendLabelAndValue(description, 'Description: ', found.description);

        this.dialog.showModal();
    }

    initializeElements() {
        this.addButton = document.querySelector(".add-btn");
        this.addCards = document.querySelector(".add-cards");
        this.bookTable = document.querySelector(".book-container");
        this.dialog = document.querySelector('.card-info');
        this.newCard = document.querySelector('.new-card')
        this.createBookForm = document.querySelector(".createBookForm")
        this.deleteBook = document.createElement("button");
        this.markRead = document.createElement("button");
    }

    attachEventListeners() {

        this.bookTable.addEventListener('click', (e) => {
            const book = e.target.closest('.card');
            if (!book) return;
            if (e.target.closest('button')) return;

            const found = this.library.bookStorage.find(item => item.id === book.id);
            if (found) this.openCardView(found);
        });

        this.addCards.addEventListener("click", () => this.newCard.showModal());
        this.addButton.addEventListener("click", () => this.newCard.showModal());

        this.createBookForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const data = this.createNewBookObj();
            this.library.addBookToStorage(data.name, data.author, data.year, data.description, data.cover);
            this.addBookToPage();
            this.createBookForm.reset();
            this.newCard.close();
        })

        this.markRead.addEventListener('click', (e) => {
            const book = e.target.closest('.card');
            const found = this.library.bookStorage.find(item => item.id === book.id);
            if (found.read) {
                this.markRead.textContent = "Unread";
                found.changeReadStatus();
            } else {
                this.markRead.textContent = "Read";
                found.changeReadStatus();
            }

        });

        this.deleteBook.addEventListener('click', (e) => {
            const book = e.target.closest('.card');
            const found = this.library.bookStorage.find(item => item.id === book.id);
            const index = this.library.bookStorage.findIndex(item => item.id === found.id);
            this.library.bookStorage.splice(index, 1);
            book.remove();
        })

    }



    render() {

    }

    init() {
        this.initializeElements();
        this.attachEventListeners();
        this.render();
    }
}