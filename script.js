const myLibrary = [];

function Book(title, author, genre, year) {
  this.title = title;
  this.author = author;
  this.genre = genre;
  this.year = year;
}

function addBookToLibrary(title, author, genre, year) {
  myLibrary.push(new Book(title, author, genre, year));
}

addBookToLibrary("To Kill a Mockingbird", "Harper Lee", "Fiction", 2000);
console.log(myLibrary);