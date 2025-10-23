const myLibrary = [];

// Create a book object
function Book(author, title, pages, stored) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.stored = stored;
    this.id = crypto.randomUUID();
};

// Add books to library
function addBookToLibrary(author, title, pages, stored) {
    const newBook = new Book(author, title, pages, stored);
    return(myLibrary.push(newBook));
};

// Show library as table in frontend
function displayLibrary() {

    const tableElement = document.querySelector(".library-display");

    myLibrary.map(item => {    
        if (item.stored == false) {    
            tableElement.insertAdjacentHTML("beforeend",`
            <tr>
                <td class="table-row">${item.title}</td>
                <td class="table-row">${item.author}</td>
                <td class="table-row">${item.pages}</td>
            </tr>      
            `);
        }
        item.stored = true;
    });    
};

//Event listener to add books
const form = document.querySelector(".addBookForm");

form.addEventListener("submit", function(e) {
    //Prevent default behaviour -> not sending data to server
    e.preventDefault();

    //Create object with form values
    let formData = new FormData(form);
    formData = Object.fromEntries(formData);

    //Pass values to create book function
    addBookToLibrary(formData.bookAuthor, formData.bookTitle, formData.bookPages, false);
    displayLibrary("new");
});