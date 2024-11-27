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

function displayBook() {
    const table = document.querySelector("table");
    for (const index of myLibrary.keys()) {
        const tableRow = document.createElement("tr");
        const id = document.createElement("td");
        const title = document.createElement("td");
        const author = document.createElement("td");
        const genre = document.createElement("td");
        const year = document.createElement("td");

        id.textContent = index + 1;
        title.textContent = myLibrary[index].title;
        author.textContent = myLibrary[index].author;
        genre.textContent = myLibrary[index].genre;
        year.textContent = myLibrary[index].year;

        tableRow.append(id, title, author, genre, year);
        table.append(tableRow);
    }
}

addBookToLibrary("To Kill a Mockingbird", "Harper Lee", "Fiction", 2000);
addBookToLibrary("1984", "George Orwell", "Dystopian", 1949);
addBookToLibrary("Pride and Prejudice", "Jane Austen", "Romance", 1813);
addBookToLibrary("The Great Gatsby", "F. Scott Fitzgerald", "Fiction", 1925);
addBookToLibrary("Moby-Dick", "Herman Melville", "Adventure", 1851);
addBookToLibrary("The Catcher in the Rye", "J.D. Salinger", "Fiction", 1951);
console.log(myLibrary);
displayBook();