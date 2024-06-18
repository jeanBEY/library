const booksContainer = document.querySelector('#books-container');

const myLibrary = [];

const addButton = document.getElementById("addButton");
const bookDialog = document.getElementById("bookDialog");
const selectBoolean = bookDialog.querySelector("select");
const confirmBtn = bookDialog.querySelector("#confirmBtn");

function Book(title, author, pages, read_status) {
  // the constructor...
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read_status = read_status;
}

function addBookToLibrary(Book) {
  // do stuff here
    myLibrary.push(Book);
}

function renderBooks(myLibrary) {
    myLibrary.forEach(book => {

        const div = document.createElement('div');
        const title = document.createElement('h4');
        const author = document.createElement('p');
        const pages = document.createElement('p');
        const read_status = document.createElement('p');

        title.innerText = `Title: ${book.title}`;
        author.innerText = `Author: ${book.author}`;
        pages.innerText = `Pages: ${book.pages}`;
        read_status.innerText = `Read ?: ${book.read_status}`;

        //may need to add more classes
        div.classList = 'card'

        div.appendChild(title);
        div.appendChild(author);
        div.appendChild(pages);
        div.appendChild(read_status);

        booksContainer.appendChild(div);
    });
}

addButton.addEventListener("click", () => {
    bookDialog.showModal();
});


// "Cancel" button closes the dialog without submitting because of [formmethod="dialog"], triggering a close event.
bookDialog.addEventListener("close", (e) => {
    booksContainer.value = 
        bookDialog.returnVallue === "default" 
        ? "No return value."
        : `ReturnValue: ${bookDialog.returnValue}.`; // Have to check for "default" rather than empty string
});

// Prevent the "confirm" button from the default behavior of submitting the form, and close the dialog with the `close()` method, which triggers the "close" event.
confirmBtn.addEventListener("click", (event) => {
    event.preventDefault(); // We don't want to submit this fake form
    bookDialog.close(selectBoolean.value); // Have to send the select box value here.
  });

/* FOR TESTING ONLY - DELETE BELOW */

let myBook1 = new Book('hello', 'world', 15, true);
addBookToLibrary(myBook1);

let myBook2 = new Book('good', 'afternoon', 15, true);
addBookToLibrary(myBook2);

let myBook3 = new Book('good', 'evening', 15, true);
addBookToLibrary(myBook3);

myLibrary.forEach(book => {
    console.log(book);
});

renderBooks(myLibrary);

/* FOR TESTING ONLY - DELETE ABOVE */