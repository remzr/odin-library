const myLibrary = [];

function Book(author, title, pages ) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.id = crypto.randomUUID();
}

function addBookToLibrary() {
    //take Params, creat a book then store it in the array
}

const book1 = new Book("John Smith", "How to code", 320);

console.log(book1);