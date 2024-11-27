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
  const tbody = document.createElement("tbody");
  table.removeChild(table.lastChild);

  myLibrary.forEach((entry, index) => {
    const tableRow = document.createElement("tr");
    const id = document.createElement("td");
    id.textContent = index + 1;
    tableRow.append(id);

    for(let key in entry) {
      const field = document.createElement("td");
      field.textContent = entry[key];
      tableRow.append(field);
    }
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "❌";
    removeBtn.addEventListener("click", () => {
      myLibrary.splice(index, 1);
      displayBook();
    });
    tableRow.append(removeBtn);
    tbody.append(tableRow);
  });
  table.append(tbody);
  console.log(myLibrary);
}

const formDialog = document.querySelector(".form-dialog");
const openFormBtn = document.querySelector(".open-form");
const closeFormBtn = document.querySelector(".close-form");
const submitFormBtn = document.querySelector(".submit-form");

openFormBtn.addEventListener("click", () => {
  formDialog.showModal();
});
closeFormBtn.addEventListener("click", () => {
  formDialog.close();
});
submitFormBtn.addEventListener("click", (event) => {
  const inputs = document.querySelectorAll("input");
  const inputData = [];
  inputs.forEach((input) => {
    inputData.push(input.value);
  });
  addBookToLibrary(...inputData);
  displayBook();
});

addBookToLibrary("To Kill a Mockingbird", "Harper Lee", "Fiction", 2000);
addBookToLibrary("1984", "George Orwell", "Dystopian", 1949);
addBookToLibrary("Pride and Prejudice", "Jane Austen", "Romance", 1813);
addBookToLibrary("The Great Gatsby", "F. Scott Fitzgerald", "Fiction", 1925);
addBookToLibrary("Moby-Dick", "Herman Melville", "Adventure", 1851);
addBookToLibrary("The Catcher in the Rye", "J.D. Salinger", "Fiction", 1951);

displayBook();

