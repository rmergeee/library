class Book {
    constructor(name, author, year, description, cover) {
        this.id = crypto.randomUUID();
        this.name = name;
        this.author = author;
        this.year = year;
        this.description = description;
        this.cover = cover;
        this.read = false;
    }

    changeReadStatus() {
        this.read = !this.read;
    }
}