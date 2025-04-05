const myLibrary = [];

function Book(name, author, pages, read, id) {
    if (!new.target) {
        throw Error("Use 'new' operator to access the constructor.");
    }

    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = id;
}

function addBookToLibrary(name, author, pages, read, id) {
    const newBook = new Book(name, author, pages, read, id);
    myLibrary.push(newBook);
}

function displayBookInLibrary() {
    const bookDetail = document.querySelector(".book.detail");

    for (i=0; i<myLibrary.length; i++) {
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

        const bookId = document.createElement("div");
        bookId.setAttribute("id", "crypto");
        const crypto = myLibrary[i].id;
        bookId.innerHTML = `<strong>UID:</strong> <span class="cryptoText">${crypto}</span>`;
        bookItem.appendChild(bookId);

        const deleteShelf = document.createElement("button");
        deleteShelf.setAttribute("class", "deleteShelf");
        deleteShelf.innerHTML = `<img src="./images/delete.svg" alt="delete">`;
        bookItem.appendChild(deleteShelf);
        
        const swap = document.createElement("button");
        swap.setAttribute("class", "swap");
        swap.textContent = `${read}`.toUpperCase();
        bookItem.appendChild(swap);
    }
}

// Swap Event Listener
document.querySelector(".book.detail").addEventListener("click", function (event) {
    if (event.target.classList.contains("swap")) {
        let swap = event.target;
        let parentChild = swap.closest(".bookItem");
        let bookRead = parentChild.querySelector("#read");

        if (swap.textContent === "READ") {
            swap.textContent = "NOT READ";
            swap.style.backgroundColor = "transparent";
            swap.style.color = "aqua";
            swap.style.border = "solid 2px aqua";
            bookRead.innerHTML = `<strong>Status:</strong> Not Read`;
        } else if (swap.textContent === "NOT READ") {
            swap.textContent = "READ";
            swap.style.backgroundColor = "aqua";
            swap.style.color = "black";
            swap.style.border = "none";
            bookRead.innerHTML = `<strong>Status:</strong> Read`;
        }
    }
});

const body = document.querySelector(".parent");
const newBook = document.querySelector("#newBook");
const buttonElement = document.querySelector(".button");

newBook.addEventListener("click", () => {
    const form = document.createElement("div");
    form.setAttribute("class", "hiddenForm");
    buttonElement.appendChild(form);

    const blurBg = document.createElement("div");
    blurBg.setAttribute("class", "blur");
    buttonElement.appendChild(blurBg);

    const hiddenForm = document.querySelector(".hiddenForm");

    hiddenForm.style.height = "50vh";
    hiddenForm.style.width = "50vw"
    hiddenForm.style.backgroundColor = "#111111";
    hiddenForm.style.borderRadius = "15px";
    hiddenForm.style.position = "fixed";
    hiddenForm.style.top = "50%";
    hiddenForm.style.left = "50%";
    hiddenForm.style.transform = "translate(-50%, -50%)";
    hiddenForm.style.border = "dashed white";
    hiddenForm.style.opacity = "0";
    hiddenForm.style.transition = "opacity 0.4s ease-in-out";
    hiddenForm.style.zIndex = "9997";
    setTimeout(() => {
        hiddenForm.style.opacity = "1";
    }, 10);

    const blur = document.querySelector(".blur");

    blur.style.height = "300vh";
    blur.style.width = "300vw";
    blur.style.backgroundColor = "#22222250";
    blur.style.backdropFilter = "blur(10px)"
    blur.style.position = "fixed"
    blur.style.top = "0";
    blur.style.left = "0";
    blur.style.opacity = "0";
    blur.style.transition = "opacity 0.3s ease-in-out";
    blur.style.zIndex = "9996"
    setTimeout(() => {
        blur.style.opacity = "1";
    }, 10);

    const formHeading = document.createElement("div");
    formHeading.setAttribute("class", "formTitle");
    formHeading.textContent = "BOOK DETAILS";

    const formReceiptHeading = document.createElement("div");
    formReceiptHeading.setAttribute("class", "receipt");
    formReceiptHeading.textContent = "RECEIPT";

    const closeButton = document.createElement("button");
    closeButton.setAttribute("id", "close");
    closeButton.innerHTML = `<img src="./images/close.svg" alt="close">`;

    const addtoLibrary = document.createElement("button");
    addtoLibrary.setAttribute("class", "finalAdd");
    addtoLibrary.textContent = "ADD TO LIBRARY";

    const formElement = document.createElement("form");

    // Input Name
    const bookNameInput = document.createElement("div");
    bookNameInput.setAttribute("id", "inputName");

    const labelName = document.createElement("label");
    labelName.setAttribute("for", "bookName");
    labelName.setAttribute("id", "labelName");
    labelName.textContent = "BOOK NAME";

    const inputName = document.createElement("input");
    inputName.setAttribute("type", "text");
    inputName.setAttribute("id", "bookName");
    inputName.setAttribute("name", "bookName");
    inputName.setAttribute("placeholder", "The Lord of the Rings");
    inputName.setAttribute("required", "");

    const spanName = document.createElement("span");
    spanName.setAttribute("id", "spanName");

    // Input Author
    const bookAuthorInput = document.createElement("div");
    bookAuthorInput.setAttribute("id", "inputAuthor");

    const labelAuthor = document.createElement("label");
    labelAuthor.setAttribute("for", "bookAuthor");
    labelAuthor.setAttribute("id", "labelAuthor");
    labelAuthor.textContent = "AUTHOR";

    const inputAuthor = document.createElement("input");
    inputAuthor.setAttribute("type", "text");
    inputAuthor.setAttribute("id", "bookAuthor");
    inputAuthor.setAttribute("name", "bookAuthor");
    inputAuthor.setAttribute("placeholder", "J.R.R. Tolkien");
    inputAuthor.setAttribute("required", "");

    const spanAuthor = document.createElement("span");
    spanAuthor.setAttribute("id", "spanAuthor");

    // Input Pages
    const bookPagesInput = document.createElement("div");
    bookPagesInput.setAttribute("id", "inputPages");

    const labelPages = document.createElement("label");
    labelPages.setAttribute("for", "bookPages");
    labelPages.setAttribute("id", "labelPages");
    labelPages.textContent = "PRINT LENGTH";

    const inputPages = document.createElement("input");
    inputPages.setAttribute("type", "number");
    inputPages.setAttribute("id", "bookPages");
    inputPages.setAttribute("name", "bookPages");
    inputPages.setAttribute("placeholder", "1216");
    inputPages.setAttribute("min", "1");
    inputPages.setAttribute("required", "");

    const spanPages = document.createElement("span");
    spanPages.setAttribute("id", "spanPages");

    // Input Read
    const bookReadInput = document.createElement("div");
    bookReadInput.setAttribute("id", "inputRead");

    const fieldset = document.createElement("fieldset");
    const legend = document.createElement("legend");
    legend.textContent = "STATUS";

    const labelRead = document.createElement("label");
    labelRead.setAttribute("for", "bookRead");
    labelRead.textContent = "READ";

    const inputRead = document.createElement("input");
    inputRead.setAttribute("type", "radio");
    inputRead.setAttribute("id", "bookRead");
    inputRead.setAttribute("name", "status");
    inputRead.setAttribute("value", "Read");
    inputRead.setAttribute("required", "");

    const labelNotRead = document.createElement("label");
    labelNotRead.setAttribute("for", "bookNotRead");
    labelNotRead.textContent = "NOT READ";

    const inputNotRead = document.createElement("input");
    inputNotRead.setAttribute("type", "radio");
    inputNotRead.setAttribute("id", "bookNotRead");
    inputNotRead.setAttribute("name", "status");
    inputNotRead.setAttribute("value", "Not Read");
    inputNotRead.setAttribute("required", "");

    // Add Book Button
    const addToList = document.createElement("button");
    addToList.classList.add("addBook");
    addToList.setAttribute("type", "submit");
    addToList.textContent = "Add Book >";

    // Delete Button Receipt
    const deleteMaster = document.createElement("button");
    deleteMaster.setAttribute("id", "master");
    deleteMaster.innerHTML = `<img class = "notRed" src="./images/trash-can-outline.svg" alt="Select Delete Switch">`;
    
    hiddenForm.appendChild(formHeading);
    hiddenForm.appendChild(formReceiptHeading);
    hiddenForm.appendChild(addtoLibrary);
    hiddenForm.appendChild(deleteMaster);
    hiddenForm.appendChild(closeButton);
    hiddenForm.appendChild(formElement);
    formElement.appendChild(bookNameInput);
    formElement.appendChild(bookAuthorInput);
    formElement.appendChild(bookPagesInput);
    formElement.appendChild(fieldset);
    fieldset.appendChild(legend);
    fieldset.appendChild(bookReadInput);
    bookNameInput.appendChild(labelName);
    bookNameInput.appendChild(inputName);
    bookNameInput.appendChild(spanName);
    bookAuthorInput.appendChild(labelAuthor);
    bookAuthorInput.appendChild(inputAuthor);
    bookAuthorInput.appendChild(spanAuthor);
    bookPagesInput.appendChild(labelPages);
    bookPagesInput.appendChild(inputPages);
    bookPagesInput.appendChild(spanPages);
    bookReadInput.appendChild(labelRead);
    bookReadInput.appendChild(inputRead);
    bookReadInput.appendChild(labelNotRead);
    bookReadInput.appendChild(inputNotRead);
    formElement.appendChild(addToList);
    
    // Close Button
    const closeHiddenForm = document.querySelector("#close");

    closeHiddenForm.addEventListener("click", () => {
        hiddenForm.style.opacity = "1";
        hiddenForm.style.transition = "opacity 0.4s ease-in-out";
        setTimeout(() => {
            hiddenForm.style.opacity = "0";
        }, 10);

        blur.style.opacity = "1";
        blur.style.transition = "opacity 0.3s ease-in-out";
        setTimeout(() => {
            blur.style.opacity = "0";
        }, 10);

        setTimeout(() => {
            hiddenForm.remove();
            blur.remove();
        }, 120);
    });

    // Label Resize
    const inputN = document.querySelector("form div input#bookName");
    const inputA = document.querySelector("form div input#bookAuthor");
    const inputP = document.querySelector("form div input#bookPages");
    const labelN = document.querySelector("form div label#labelName");
    const labelA = document.querySelector("form div label#labelAuthor");
    const labelP = document.querySelector("form div label#labelPages");

    inputN.addEventListener("focus", () => {
        labelN.classList.add("smallSize");

        inputN.addEventListener("blur", () => {
            if (!inputN.value) {
                labelN.classList.remove("smallSize");
            }
        });
    });

    inputA.addEventListener("focus", () => {
        labelA.classList.add("smallSize");

        inputA.addEventListener("blur", () => {
            if (!inputA.value) {
                labelA.classList.remove("smallSize");
            }
        });
    });

    inputP.addEventListener("focus", () => {
        labelP.classList.add("smallSize");

        inputP.addEventListener("blur", () => {
            if (!inputP.value) {
                labelP.classList.remove("smallSize");
            }
        });
    });

    // Receipt
    const bookReceipt = document.createElement("div");
    bookReceipt.setAttribute("id", "receiptItems");
    hiddenForm.appendChild(bookReceipt);

    function addBookToReceipt() {
        let i = myLibrary.length;
        const bookReceiptDiv = document.createElement("div");
        bookReceiptDiv.setAttribute("id", `bookR${i}`);
        bookReceiptDiv.setAttribute("class", "bookRItem");
        bookReceipt.appendChild(bookReceiptDiv);

        const bookReceiptName = document.createElement("div");
        bookReceiptName.setAttribute("id", "name");
        const name = myLibrary[i-1].name;
        bookReceiptName.innerHTML = `<strong>Name:</strong> ${name}`;
        bookReceiptDiv.appendChild(bookReceiptName);

        const bookReceiptAuthor = document.createElement("div");
        bookReceiptAuthor.setAttribute("id", "author");
        const author = myLibrary[i-1].author;
        bookReceiptAuthor.innerHTML = `<strong>Author:</strong> ${author}`;
        bookReceiptDiv.appendChild(bookReceiptAuthor);

        const bookReceiptRead = document.createElement("div");
        bookReceiptRead.setAttribute("id", "read");
        const read = myLibrary[i-1].read;
        bookReceiptRead.innerHTML = `<strong>Status:</strong> ${read}`;
        bookReceiptDiv.appendChild(bookReceiptRead);

        const bookReceiptId = document.createElement("div");
        bookReceiptId.setAttribute("id", "crypto");
        const crypto = myLibrary[i-1].id;
        bookReceiptId.innerHTML = `<strong>UID:</strong> <span class="cryptoText">${crypto}</span>`;
        bookReceiptDiv.appendChild(bookReceiptId);

        const deleteElement = document.createElement("button");
        deleteElement.setAttribute("class", "deleteReceipt");
        deleteElement.innerHTML = `<img class="image" src="./images/delete.svg" alt="delete">`;
        bookReceiptDiv.appendChild(deleteElement);
    }

    // Submit/Reset Form Button Event Listener
    formElement.addEventListener("submit", function (event) {
        const selectedRadio = document.querySelector('input[name="status"]:checked');
        const inputR = selectedRadio ? selectedRadio.value : null;
        addBookToLibrary(inputN.value, inputA.value, inputP.value, inputR, crypto.randomUUID());
        addBookToReceipt();
        event.preventDefault();
        event.target.reset();
    });

    // Add To Library Button Event Listener
    const bookDetail = document.querySelector(".book.detail");

    addtoLibrary.addEventListener("click", () => {
        if (bookReceipt.children.length !== 0) {
            if (bookDetail.hasChildNodes()) {
                bookDetail.replaceChildren();
            }

            displayBookInLibrary();

            hiddenForm.style.opacity = "1";
            hiddenForm.style.transition = "opacity 0.4s ease-in-out";
            setTimeout(() => {
                hiddenForm.style.opacity = "0";
            }, 10);

            blur.style.opacity = "1";
            blur.style.transition = "opacity 0.3s ease-in-out";
            setTimeout(() => {
                blur.style.opacity = "0";
            }, 10);

            setTimeout(() => {
                hiddenForm.remove();
                blur.remove();
            }, 120);
        }
    });

    // Master Delete Event Listener
    const trashMaster = document.querySelector(".notRed");

    const blurReceipt = document.createElement("div");
    blurReceipt.classList.add("unblur");
    hiddenForm.appendChild(blurReceipt);

    trashMaster.addEventListener("click", () => {
        if (bookReceipt.children.length !== 0 || bookReceipt.children.length === 0) {
            trashMaster.classList.toggle("red");
        
            const receiptElement = document.querySelectorAll(".bookRItem");
            const deleteRCard = document.querySelectorAll(".deleteReceipt");

            blurReceipt.classList.toggle("blurR");

            receiptElement.forEach(card => {
                card.classList.toggle("redItem");
            });

            deleteRCard.forEach(Rcard => {
                Rcard.classList.toggle("trashReveal");
            });

            bookReceipt.classList.toggle("receiptItemsRed");

            // Delete Receipt
            const deletefinalR = document.querySelectorAll(".deleteReceipt .image");

            deletefinalR.forEach(cardR => {
                cardR.addEventListener("click", () => {
                    if (bookReceipt.children.length === 1) {
                        bookReceipt.replaceChildren();
                        myLibrary.length = 0;
                        trashMaster.classList.toggle("red");
                        blurReceipt.classList.toggle("blurR");
                        receiptElement.forEach(card => {
                            card.classList.toggle("redItem");
                        });
                        
                        deleteRCard.forEach(Rcard => {
                            Rcard.classList.toggle("trashReveal");
                        });
            
                        bookReceipt.classList.toggle("receiptItemsRed");
                    } else {
                        let parentR = cardR.parentElement;
                        let gParentR = parentR.parentElement.id;
                        let cryptoTextR = document.querySelector(`#${gParentR} .cryptoText`);
                        let cryptoTextContentR = cryptoTextR.textContent;
                        console.log(gParentR);
    
                        const itemIndex = myLibrary.findIndex(item => item.id === cryptoTextContentR);
                        myLibrary.splice(itemIndex, 1);
                        
                        let gParentRemove = document.querySelector(`#${gParentR}`);
                        gParentRemove.remove();

                        const children = Array.from(bookReceipt.children);
                        children.forEach((child, index) => {
                            const newId = `bookR${index+1}`;
                            child.id = newId;
                        });
                    }
                });
            });
        }
    });
});

// Delete Button Home  
const bodyParent = document.querySelector(".parent .lineHR");

const masterFloat = document.createElement("div");
masterFloat.setAttribute("class", "masterFloat");
bodyParent.appendChild(masterFloat);

const deleteMasterHome = document.createElement("button");
deleteMasterHome.setAttribute("id", "masterHome");
deleteMasterHome.innerHTML = `<img class = "notRedHome" src="./images/trash-can-outline.svg" alt="Select Delete Switch">`;
masterFloat.appendChild(deleteMasterHome);

// Delete Home Event Listener
const trashMasterHome = document.querySelector(".notRedHome");
const bookDetail = document.querySelector(".book.detail");

const blurHome = document.createElement("div");
blurHome.classList.add("unblurHome");
body.appendChild(blurHome);

trashMasterHome.addEventListener("click", () => {
    if (bookDetail.children.length !== 0 || bookDetail.children.length === 0) {
        trashMasterHome.classList.toggle("redHome");
    
        const homeElement = document.querySelectorAll(".bookItem");
        const deleteHomeCard = document.querySelectorAll(".deleteShelf");
        const phase = document.querySelectorAll(".swap");

        blurHome.classList.toggle("blurHome");

        homeElement.forEach(cardHome => {
            cardHome.classList.toggle("redItemHome");
        });

        deleteHomeCard.forEach(homeCard => {
            homeCard.classList.toggle("trashRevealHome");
        });

        phase.forEach(stat => {
            stat.classList.toggle("phase");
        });

        // Delete Receipt
        const deletefinalHome = document.querySelectorAll(".deleteShelf img");

        deletefinalHome.forEach(cardH => {
            cardH.addEventListener("click", () => {
                if (bookDetail.children.length === 1) {
                    bookDetail.replaceChildren();
                    myLibrary.length = 0;
                    trashMasterHome.classList.toggle("redHome");
                    blurHome.classList.toggle("blurHome");
                    homeElement.forEach(cardHome => {
                        cardHome.classList.toggle("redItemHome");
                    });
            
                    deleteHomeCard.forEach(homeCard => {
                        homeCard.classList.toggle("trashRevealHome");
                    });
                } else {
                    let parentH = cardH.parentElement;
                    let gParentH = parentH.parentElement.id;
                    let cryptoTextH = document.querySelector(`#${gParentH} .cryptoText`);
                    let cryptoTextContentH = cryptoTextH.textContent;

                    const itemIndexH = myLibrary.findIndex(itemH => itemH.id === cryptoTextContentH);
                    myLibrary.splice(itemIndexH, 1);
                    
                    let gParentRemoveH = document.querySelector(`#${gParentH}`);
                    gParentRemoveH.remove();

                    const childrenH = Array.from(bookDetail.children);
                    childrenH.forEach((childH, indexH) => {
                        const newIdH = `book${indexH+1}`;
                        childH.id = newIdH;
                    });
                }
            });
        });
    }
});

console.log(myLibrary);