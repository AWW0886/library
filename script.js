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
const libraryCard = document.querySelector('.library');
const editButton = document.querySelector('.edit-button');
const readIcon = document.querySelector('#read-icon');
const testImage = document.querySelector('#test-image');

const myLibrary = [
    {
    title: 'The Hobbit',
    author: 'JRR Tolkien',
    pages: '304',
    genre: 'Fantasy/Sci-Fi',
    notes: 'Good Book',
    read: "READ",
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
        <p>${book.author}</p>
        <p>${book.pages}</p>
        <p>${book.genre}</p>
        <p>${book.notes}</p>
        <img src='img/text-box-outline.svg' alt='notes-icon' onclick='removeBook(${i})'>
        <p class='read-status'>${book.read ? 'READ' : 'NOT READ YET'}</p>
        <img id='read-icon' onclick='changeRead(${i})' src='img/book-check.svg' alt='read-icon'>
        <button class='read-button' onclick='changeRead(${i})'>Read/Not Read
        </button>
        <button class='edit-button' onclick='editBook(${i})'>Edit
        </button>
        <button class='remove-button' onclick='removeBook(${i})'>Remove
        </button>
        `;
        libraryBook.appendChild(bookCard);
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
}

function removeBook(index) {
    myLibrary.splice(index, 1);
    updateLibrary();
}

function editBook(book) {
    titleInput.value = book.title;
    authorInput.value = book.author;
}

Book.prototype.changeRead = function() {
    this.read = !this.read;
}

function changeRead(index) {
    myLibrary[index].changeRead();
    updateLibrary();
}

//function changeRead(index) {
//    let readIcon = document.getElementById('read-icon');
//    console.log('Hello');
//    if (readIcon.getAttribute('src') === 'img/book-check.svg') {
//        readIcon.setAttribute('src', 'img/book.svg');
//    } else {
//        readIcon.setAttribute('src', 'img/book-check.svg');
//    }
    //if (readIcon.src === '.img/book-check.svg') {
    //    readIcon.src == 'img/book.svg';
    //} else {
    //    readIcon.src == '.img/book-check.svg';
    //}
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