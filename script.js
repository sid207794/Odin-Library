const myLibrary = [];

function Book(name, author, pages, id) {
    if (!new.target) {
        throw Error("Use 'new' operator to access the constructor.");
    }

    this.name = name;
    this.author = author;
    this.pages = pages;
    this.id = id;
}

function addBookToLibrary(name, author, pages, id) {
    const newBook = new Book(name, author, pages, id);
    myLibrary.push(newBook);
}

function displayBookInLibrary() {
    for (i=0; i<myLibrary.length; i++) {
        const bookDetail = document.querySelector(".book.detail");
        
        const bookDetailDiv = document.createElement("div");
        bookDetailDiv.setAttribute("id", `book${i+1}`);
        bookDetailDiv.setAttribute("class", "bookItem");
        bookDetail.appendChild(bookDetailDiv);

        const bookItem = document.querySelector(`#book${i+1}`);
        
        const bookName = document.createElement("div");
        bookName.setAttribute("id", "name");
        const name = myLibrary[i].name;
        bookName.textContent = name;
        bookItem.appendChild(bookName);
    }
}