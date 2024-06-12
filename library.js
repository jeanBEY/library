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


/* FOR TESTING ONLY - DELETE BELOW */

let myBook = new Book('hello', 'world', 15, true);
addBookToLibrary(myBook);
myLibrary.forEach(book => {
    console.log(book);
});

/* FOR TESTING ONLY - DELETE ABOVE */