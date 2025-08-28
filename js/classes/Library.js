import { Book } from "./Book.js"

export class Library {
    constructor() {
        this.bookStorage = [new Book(
            '100173ea-fd9c-44fb-ae46-922a1366eb02',
            'The Way of Kings',
            'Brandon Sanderson',
            2010,
            'The Stormlight Archive is an epic fantasy series by Brandon Sanderson. The series is expected to be composed of ten books, in keeping with the series\' symmetrical focus in combinations of ten.However, those ten books will be divided into two groups of five.',
            'https://miro.medium.com/v2/resize:fit:4800/format:webp/1*QD5qZosh_aE2VPVSxGYmxQ.jpeg'
        )]
    }

    addBookToStorage(name, author, year, description, cover) {
        this.bookStorage.push(new Book(name, author, year, description, cover));
    }

    removeBookFromStorage(id) {
        
    }
}