const myLibrary = [];

// Create a book object
function Book(author, title, pages ) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.id = crypto.randomUUID();
};

// Add books to library
function addBookToLibrary(author, title, pages) {
    const newBook = new Book(author, title, pages);
    return(myLibrary.push(newBook));
};

//Clear table
function clearTable() {
    document.querySelector(".table-row").remove();
};

// Show library as table in frontend
function displayLibrary() {

    clearTable();

    const tableElement = document.querySelector(".library-display");

    myLibrary.map(item => {
        tableElement.insertAdjacentHTML("beforeend",`
        <tr class="table-row">
            <td class="table-row">${item.title}</td>
            <td class="table-row">${item.author}</td>
            <td class="table-row">${item.pages}</td>
        </tr>      
        `);
    });
     
};

//Event listener to add books
const form = document.querySelector(".addBookForm");

form.addEventListener("submit", function(e) {
    //Prevent default behaviour -> sending Data to server
    e.preventDefault();

    //Create object with form values
    let formData = new FormData(form);
    formData = Object.fromEntries(formData);

    //Pass values to create book function
    addBookToLibrary(formData.bookAuthor, formData.bookTitle, formData.bookPages);
    displayLibrary("new");
});

addBookToLibrary("John Smith", "How to code", 320);
addBookToLibrary("J.K. Rowling", "Harry Potter 1", 413);
addBookToLibrary("Robert W. Chambers", "The King in Yellow", 310);
addBookToLibrary("Paolo Coelho", "Nathan the wise", 230);

console.log(myLibrary);

displayLibrary();