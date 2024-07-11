
const modal_container = document.querySelector('#modal_container');
const modal = document.querySelector('#modal')
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const pages = document.querySelector('#pages');
const read_status = document.querySelector('#read_status');

const open_modal = document.querySelector("#open_modal");
const close_modal = document.querySelector("#close_modal");

const booksContainer = document.querySelector('#books_container');

const myLibrary = [];

//Constructor
function Book(title, author, pages, read_status) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read_status = read_status;
}

//Add book to library - MAY DELETE THIS
function addBookToLibrary(Book) {
    myLibrary.push(Book);
}

// Clears the form input
function clearForm() {
    title.value = '';
    author.value = '';
    pages.value = '';
    read_status.checked = false;
}

//Show library
function printBooks() {
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

//Click Events
open_modal.addEventListener('click', () =>{
    modal_container.classList.add('show');
});

close_modal.addEventListener('click', () =>{
    modal_container.classList.remove('show');
});

modal.addEventListener('submit', (e)=> {
    modal_container.classList.remove('show');
    e.preventDefault();
    const book = new Book(title.value, author.value, pages.value, read_status.checked);
    myLibrary.push(book);
    clearForm();
    printBooks();
});


//NEED TO FIGURE OUT WHY THE SUBMIT BUTTON IS NOT ADDING BOOK TO ARRAY

let myBook1 = new Book('hello', 'world', 15, true);
addBookToLibrary(myBook1);

let myBook2 = new Book('good', 'afternoon', 15, true);
addBookToLibrary(myBook2);

let myBook3 = new Book('good', 'evening', 15, true);
addBookToLibrary(myBook3);

printBooks();


/* FOR TESTING ONLY - DELETE BELOW */
/***

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

***/
/* FOR TESTING ONLY - DELETE ABOVE */
