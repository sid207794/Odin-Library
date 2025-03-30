const myLibrary = [];

function Book(name, author, pages, read, id) {
    if (!new.target) {
        throw Error("Use 'new' operator to access the constructor.");
    }

    this.name = name;
    this.author = author;
    this.pages = pages;
    if (read === true) {
        this.read = "Read";
    } else {
        this.read = "Not Read";
    }
    this.id = id;
}

function addBookToLibrary(name, author, pages, read, id) {
    const newBook = new Book(name, author, pages, read, id);
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
        bookName.innerHTML = `<strong>Name:</strong> ${name}`;
        bookItem.appendChild(bookName);

        const bookAuthor = document.createElement("div");
        bookAuthor.setAttribute("id", "author");
        const author = myLibrary[i].author;
        bookAuthor.innerHTML = `<strong>Author:</strong> ${author}`;
        bookItem.appendChild(bookAuthor);

        const bookPages = document.createElement("div");
        bookPages.setAttribute("id", "pages");
        const pages = myLibrary[i].pages;
        bookPages.innerHTML = `<strong>Print Length:</strong> ${pages} pages`;
        bookItem.appendChild(bookPages);

        const bookRead = document.createElement("div");
        bookRead.setAttribute("id", "read");
        const read = myLibrary[i].read;
        bookRead.innerHTML = `<strong>Status:</strong> ${read}`;
        bookItem.appendChild(bookRead);
    }
}

const newBook = document.querySelector("#newBook");
const buttonElement = document.querySelector(".button");

newBook.addEventListener("click", () => {
    const form = document.createElement("div");
    form.setAttribute("class", "hiddenForm");
    buttonElement.appendChild(form);

    const hiddenForm = document.querySelector(".hiddenForm");

    hiddenForm.style.height = "100vh";
    hiddenForm.style.width = "50vw"
    hiddenForm.style.backgroundColor = "white";
    hiddenForm.style.position = "fixed"
    hiddenForm.style.opacity = "0";
    hiddenForm.style.transition = "opacity 0.4s ease-in-out";
    setTimeout(() => {
        hiddenForm.style.opacity = "1";
    }, 10);
});