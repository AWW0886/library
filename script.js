const table = document.querySelector('.add-book');
const newBookButton = document.querySelector('.new-book-button');
const inputForm = document.querySelector('.input-form');
const clearButton = document.querySelector('.clear-button');
const addButton = document.querySelector('#add-button');
const titleInput = document.querySelector('#title-input');
const authorInput = document.querySelector('#author-input');
const notesInput = document.querySelector('.notes-input');
const pagesInput = document.querySelector('#pages-input');
const genreSelect = document.querySelector('#genre-select');

const myLibrary = [
    {
    title: 'The Hobbit',
    author: 'JRR Tolkien',
    pages: '304',
    genre: 'Fantasy/Sci-Fi',
    notes: '',
    read: 'Read',
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
        <p>${book.read}</p>
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
    let read;
    if (document.getElementById('read-input').checked == true) {
        read = 'Read';
    } else {
        read = 'Not Read';
    }

    let newBook = new Book(title, author, pages, genre, notes, read);
    console.log(newBook);
    myLibrary.push(newBook);
    console.log(myLibrary);
    updateLibrary();
    clearForm();
}

function clearForm() {
    titleInput.value = '';
    authorInput.value = '';
    pagesInput.value = '';
    notesInput.value = '';
}

function removeBook(index) {
    myLibrary.splice(index, 1);
    updateLibrary();
}

function editBook(book) {
    let addBookForm = document.querySelector('.input-form');
    addBookForm.style.display = 'flex';
    titleInput.value = book.title;
    authorInput.value = book.author;
}

newBookButton.addEventListener('click', function() {
    let addBookForm = document.querySelector('.input-form');
    addBookForm.style.display = 'flex';
})

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