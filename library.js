const myLibrary = [];

function Book(author, title, pages ) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.id = crypto.randomUUID();
}

function addBookToLibrary(author, title, pages) {
    const newBook = new Book(author, title, pages);
    return(myLibrary.push(newBook));  
}

function displayLibrary() {
    const tableElement = document.querySelector(".library-display");

    myLibrary.map(item => {
        tableElement.insertAdjacentHTML("beforeend",`
        <tr>
            <td>${item.author}</td>
            <td>${item.title}</td>
            <td>${item.pages}</td>
        </tr>      
        `);
    });
}


addBookToLibrary("John Smith", "How to code", 320);
addBookToLibrary("J.K. Rowling", "Harry Potter 1", 413);
addBookToLibrary("Robert W. Chambers", "The King in Yellow", 310);
addBookToLibrary("Paolo Coelho", "Nathan the wise", 230);

console.log(myLibrary);

displayLibrary();