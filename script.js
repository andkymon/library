const myLibrary = [];

function Book(title, author, genre, year, readStatus) {
  this.title = title;
  this.author = author;
  this.genre = genre;
  this.year = year;
  this.readStatus = readStatus;
}

function addBookToLibrary(title, author, genre, year, readStatus) {
  myLibrary.push(new Book(title, author, genre, year, readStatus));
}

function generateID(index) {
  const id = document.createElement("td");
  id.textContent = index + 1;
  return id;
}

function generateReadButton(index) {
  const readBtn = document.createElement("button");
  readBtn.textContent = "R";
  readBtn.addEventListener("click", () => {
    myLibrary[index].readStatus = myLibrary[index].readStatus == true ? false : true;
    displayBook();
  });
  return readBtn;
}

function generateRemoveButton(index) {
  const removeBtn = document.createElement("button");
  removeBtn.textContent = "❌";
  removeBtn.addEventListener("click", () => {
    myLibrary.splice(index, 1);
    displayBook();
  });
  return removeBtn;
}

function displayBook() {
  const table = document.querySelector("table");
  const tbody = document.createElement("tbody");
  table.removeChild(table.lastChild);

  myLibrary.forEach((entry, index) => {
    const tableRow = document.createElement("tr");
    tableRow.append(generateID(index));
    for(let key in entry) {
      const field = document.createElement("td");
      if (key == "readStatus") {
        field.textContent = entry[key] == true ? "Read" : "Unread";
      } else {
        field.textContent = entry[key];
      }
      tableRow.append(field);
    }
    tableRow.append(generateReadButton(index));
    tableRow.append(generateRemoveButton(index));
    tbody.append(tableRow);
  });
  table.append(tbody);
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
    if (input.getAttribute("type") == "checkbox") {
      inputData.push(input.checked == true ? true : false); 
    } else {
      inputData.push(input.value);
    }
  });
  addBookToLibrary(...inputData);
  displayBook();
});

addBookToLibrary("To Kill a Mockingbird", "Harper Lee", "Fiction", 2000, true);
addBookToLibrary("1984", "George Orwell", "Dystopian", 1949, false);
addBookToLibrary("Pride and Prejudice", "Jane Austen", "Romance", 1813, true);
addBookToLibrary("The Great Gatsby", "F. Scott Fitzgerald", "Fiction", 1925, false);
addBookToLibrary("Moby-Dick", "Herman Melville", "Adventure", 1851, true);
addBookToLibrary("The Catcher in the Rye", "J.D. Salinger", "Fiction", 1951, false);

displayBook();

