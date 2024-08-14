
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

//Render library to page
function renderLibrary(){
    const books = document.querySelectorAll('.book');
    books.forEach(book => booksContainer.removeChild(book));

    for(let i=0; i < myLibrary.length; i++){
        createBooks(myLibrary[i]);
    }
}

//Create library
function createBooks(book) {

    const book_div = document.createElement('div');
    const title = document.createElement('h4');
    const author = document.createElement('p');
    const pages = document.createElement('p');
    const read_button = document.createElement('button');
    const remove_button = document.createElement('button');

    title.innerText = `Title: ${book.title}`;
    author.innerText = `Author: ${book.author}`;
    pages.innerText = `Pages: ${book.pages}`;
    
    read_button.classList.add('read_button')
    
    remove_button.textContent = 'Remove';
    remove_button.setAttribute('id', 'remove_button');

    //may need to add more classes
    book_div.classList = 'book'

    book_div.appendChild(title);
    book_div.appendChild(author);
    book_div.appendChild(pages);
    book_div.appendChild(read_button);
    if(book.read_status===false){
        read_button.textContent = 'Not Read';
        read_button.style.backgroundColor = '#a75265';
    }
    else {
        read_button.textContent = 'Read';
        read_button.style.backgroundColor = '#ec7263';
    }
    book_div.appendChild(remove_button);

    remove_button.addEventListener('click', () => {
        myLibrary.splice(myLibrary.indexOf(book),1);
        renderLibrary();
    });

    read_button.addEventListener('click', () =>{
        book.read_status = !book.read_status;
        renderLibrary();
    });

    booksContainer.appendChild(book_div);
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
    renderLibrary();
});


//NEED TO FIGURE OUT WHY THE SUBMIT BUTTON IS NOT ADDING BOOK TO ARRAY

let myBook1 = new Book('Harry Potter', 'J.K. Rowling', 15, false);
addBookToLibrary(myBook1);

let myBook2 = new Book('The Lord of the Rings', 'J.R.R. Tolkien', 15, false);
addBookToLibrary(myBook2);

let myBook3 = new Book('The Great Gatsby', 'F. Scott Fitzgerald', 15, true);
addBookToLibrary(myBook3);

renderLibrary();


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
