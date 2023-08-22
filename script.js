const table = document.querySelector('.add-book');
const newBookButton = document.querySelector('.new-book-button');
const inputForm = document.querySelector('.input-form');
const clearButton = document.querySelector('.clear-button');
const addButton = document.querySelector('#add-button');
const titleInput = document.querySelector('#title-input');
const authorInput = document.querySelector('#author-input');
const notesInput = document.querySelector('#notes-input');
const pagesInput = document.querySelector('#pages-input');
const genreSelect = document.querySelector('#genre-select');
const readCheck = document.querySelector('#read-input');
//const libraryCard = document.querySelector('.book-card');
const editButton = document.querySelector('.edit-button');
const readIcon = document.querySelector('.read-icon');
//const testImage = document.querySelector('#test-image');

const myLibrary = [
    {
    title: 'The Hobbit',
    author: 'JRR Tolkien',
    pages: '304',
    genre: 'Fantasy/Sci-Fi',
    notes: 'Good Book',
    read: true,
    }
]

updateLibrary();

function updateLibrary() {
    let libraryBook = document.querySelector('.library');
    libraryBook.innerHTML = '';
    for (let i = 0; i < myLibrary.length; i++) {
        let book = myLibrary[i];
        let bookCard = document.createElement('div');
        bookCard.setAttribute('class', 'book-card');
        bookCard.innerHTML = `
        <h3>${book.title}</h3>
        <p>by ${book.author}</p>
        <div class='book-info'>
            <p>Pages: ${book.pages}</p>
            <p>Genre: ${book.genre}</p>
            <p>Notes: ${book.notes}</p>
        </div>
        <img src='img/text-box-outline.svg' alt='notes-icon' onclick='removeBook(${i})'>
        
        <p class='read-status'>${book.read ? 
        bookCard.style.borderColor = 'seagreen': 
        bookCard.style.borderColor = 'red'}
        </p>

        <button class='read-button' onclick='changeRead(${i})'>
        <img class='read-icon' src='img/book-open-page-variant-outline.svg' alt='read-icon'>
        </button>
        <button class='edit-button' onclick='editBook(${i})'>
        <img class='edit-icon' src='img/file-document-edit-outline.svg' alt='edit-icon'>
        </button>
        <button class='remove-button' onclick='removeBook(${i})'>
        <img class='remove-icon' src='img/trash-can-outline.svg' alt='remove-icon'>
        </button>
        `;
        libraryBook.appendChild(bookCard);
        let readIcon = document.querySelector('.read-icon');
        readIcon.addEventListener('click', function() {
            changeRead();
        })
    }
}

function Book(title, author, pages, genre, notes, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.genre = genre;
    this.notes = notes;
    this.read = read;
}

function addBookToLibrary() {
    let title = document.getElementById('title-input').value;
    let author = document.getElementById('author-input').value;
    let pages = document.getElementById('pages-input').value;
    let genre = document.getElementById('genre-select').value;
    let notes = document.getElementById('notes-input').value;
    let read = document.getElementById('read-input').checked;
    //if (document.getElementById('read-input').checked == true) {
    //    read = 'Read';
    //} else {
    //    read = 'Not Read';
    //}

    let newBook = new Book(title, author, pages, genre, notes, read);
    //console.log(newBook);
    myLibrary.push(newBook);
    //console.log(myLibrary);
    updateLibrary();
    clearForm();
}

function clearForm() {
    titleInput.value = '';
    authorInput.value = '';
    pagesInput.value = '';
    genreSelect.value = 0;
    notesInput.value = '';
//    let textarea = document.querySelector('#notes-input');
//        textarea.value = '';
    readCheck.checked = false;
}

function removeBook(index) {
    myLibrary.splice(index, 1);
    updateLibrary();
}

//function editBook(book) {
//    titleInput.value = book.title;
//    authorInput.value = book.author;
//}

Book.prototype.changeRead = function() {
    this.read = !this.read;
}

function changeRead(index) {
    myLibrary[index].changeRead();
    updateLibrary();
}

//Book.prototype.editBook = function() {
//    this.title = titleInput.title;
//}

//function editBook(index) {
//    myLibrary[index].editBook();
//}


//function changeRead(index) {
//    let readIcon = document.getElementById('read-icon');
//    console.log('Hello');
//    if (myLibrary[index].getAttribute('src') === 'img/book-check.svg') {
//        myLibrary[index].setAttribute('src', 'img/book.svg');
//    } else {
//        myLibrary[index].setAttribute('src', 'img/book-check.svg');
//    }
    //if (readIcon.src === '.img/book-check.svg') {
    //    readIcon.src == 'img/book.svg';
    //} else {
    //    readIcon.src == '.img/book-check.svg';
//    }
//}


//readIcon.addEventListener('click', function() {
//    console.log('Hello');
//})

//newBookButton.addEventListener('click', function() {
//    let addBookForm = document.querySelector('.input-form');
//    addBookForm.style.display = 'flex';
//    changeRead();
//})

clearButton.addEventListener('click', function() {
    clearForm();
//    titleInput.value = '';
//    authorInput.value = '';
//    pagesInput.value = '';
//    notesInput.value = '';
//    if (document.getElementById('read-input').checked == true) {
//        document.getElementById('read-input').checked == false
//    }
})

addButton.addEventListener('click', function() {
    event.preventDefault();
    addBookToLibrary();
})

//readIcon.addEventListener('click', function() {
//    changeRead();
//})


//<p class='read-status'>${book.read ? 
//        "<img class='read-icon' src='img/book-check.svg' alt='read-icon'>": 
//        "<img class='read-icon' src='img/book.svg' alt='read-icon'>"}</p>

// <img id='read-icon' onclick='changeRead(${i})' src='img/book-check.svg' alt='read-icon'>