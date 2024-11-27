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
addBookToLibrary("1984", "George Orwell", "Dystopian", 1949);
addBookToLibrary("Pride and Prejudice", "Jane Austen", "Romance", 1813);
addBookToLibrary("The Great Gatsby", "F. Scott Fitzgerald", "Fiction", 1925);
addBookToLibrary("Moby-Dick", "Herman Melville", "Adventure", 1851);
addBookToLibrary("The Catcher in the Rye", "J.D. Salinger", "Fiction", 1951);
console.log(myLibrary);