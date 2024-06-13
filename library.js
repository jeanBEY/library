const booksContainer = document.querySelector('#books-container');

const myLibrary = [];

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

        div.classList = 'card'

        div.appendChild(title);
        div.appendChild(author);
        div.appendChild(pages);
        div.appendChild(read_status);

        booksContainer.appendChild(div);
    });
}

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