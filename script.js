const table = document.querySelector('.add-book');
const newBookButton = document.querySelector('.new-book-button');
const inputForm = document.querySelector('.input-form');
const cancelButton = document.querySelector('.cancel-button');
const addButton = document.querySelector('#add-button');
const titleInput = document.querySelector('#title-input');
const authorInput = document.querySelector('#author-input');
const pagesInput = document.querySelector('#pages-input');
const genreSelect = document.querySelector('#genre-select');

const myLibrary = [
    {
    title: 'The Hobbit',
    author: 'JRR Tolkien',
    pages: '304',
    genre: 'Fantasy/Sci-Fi',
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
        ${book.title}
        ${book.author}
        ${book.pages}
        ${book.genre}
        ${book.read}
        <button class='remove-button' onclick='removeBook(${i})'>Remove
        </button>
        `;
        libraryBook.appendChild(bookCard);
    }
}

function Book(title, author, pages, genre, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.genre = genre;
    this.read = read;
}

function addBookToLibrary() {
    let title = document.getElementById('title-input').value;
    let author = document.getElementById('author-input').value;
    let pages = document.getElementById('pages-input').value;
    let genre = document.getElementById('genre-select').value;
    let read;
    if (document.getElementById('read-input').checked == true) {
        read = 'Read';
    } else {
        read = 'Not Read';
    }

    let newBook = new Book(title, author, pages, genre, read);
    console.log(newBook);
    myLibrary.push(newBook);
    console.log(myLibrary);
    updateLibrary();
}

function removeBook(index) {
    myLibrary.splice(index, 1);
    updateLibrary();
}

newBookButton.addEventListener('click', function() {
    let addBookForm = document.querySelector('.input-form');
    addBookForm.style.display = 'flex';
})

cancelButton.addEventListener('click', function() {
    let addBookForm = document.querySelector('.input-form');
    addBookForm.style.display = 'none';
})

inputForm.addEventListener('submit', function() {
    event.preventDefault();
    addBookToLibrary();
})