const table = document.querySelector('.add-book');
const newBookButton = document.querySelector('.new-book-button');
const cancelButton = document.querySelector('.cancel-button');
const addButton = document.querySelector('#add-button');
const titleInput = document.querySelector('#title-input');
const authorInput = document.querySelector('#author-input');
const pagesInput = document.querySelector('#pages-input');

const myLibrary = [
    {
    title: 'The Hobbit',
    author: 'JRR Tolkien',
    pages: 304,
    genre: 'Fantasy/Sci-Fi',
    read: 'Read',
    }
]

function updateTable() {
    myLibrary.forEach(book => {
        let row = document.createElement('tr');
        Object.keys(book).forEach(elem => {
            let td = document.createElement('td');
        })
    })
}

function Book(title, author, pages, genre, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.genre = genre;
    this.read = read;
}

function addBook() {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const genre = document.getElementById('genre').value;
    const pages = document.getElementById('pages').value;
    let read;
    if (document.getElementById('read-input').checked == true) {
        read = 'Read';
    } else {
        read = 'Not Read';
    }

    const newBook = new Book(title, author, genre, pages, read);
    myLibrary.push(newBook);
}

newBookButton.addEventListener('click', function() {
    let addBookForm = document.querySelector('.input-form');
    addBookForm.style.display = 'flex';
})

cancelButton.addEventListener('click', function() {
    let addBookForm = document.querySelector('.input-form');
    console.log(addBookForm)
    addBookForm.style.display = 'none';
})