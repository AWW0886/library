//const table = document.querySelector('.add-book');
//const newBookButton = document.querySelector('.new-book-button');
const inputForm = document.querySelector('.input-form');
const clearButton = document.querySelector('.clear-button');
const addButton = document.querySelector('#add-button');
const titleInput = document.querySelector('#title-input');
const authorFirstInput = document.querySelector('#authorfirst-input');
const authorLastInput = document.querySelector('#authorlast-input');
const notesInput = document.querySelector('#notes-input');
const pagesInput = document.querySelector('#pages-input');
const genreSelect = document.querySelector('#genre-select');
const readCheck = document.querySelector('#read-input');
const editButton = document.querySelector('.edit-button');
const readIcon = document.querySelector('.read-icon');
const notesIcon = document.querySelector('.notes-icon');
const menuIcon = document.querySelector('.menu-icon');

const myLibrary = [
//    {
//    title: 'The Hobbitj skfjns sfjs jdfn sdfsj sdfsd sdfsd',
//    authorfirst: 'JRR',
//    authorlast: 'Tolkien',
//    pages: '304',
//    genre: 'Fantasy/Sci-Fi',
//    notes: 'Good Book',
//    read: true
//    }
];

updateLibrary();

function updateLibrary() {
    let libraryBook = document.querySelector('.library');
    libraryBook.innerHTML = '';
    for (let i = 0; i < myLibrary.length; i++) {
        let book = myLibrary[i];
        let bookCard = document.createElement('div');
        bookCard.setAttribute('class', 'book-card');
        bookCard.innerHTML = `
        <h3 class='card-title'>${book.title}</h3>
        <p class='card-author'>by ${book.authorfirst} ${book.authorlast}</p>
        <div class='card-bottom-row'>
            <div class='book-info'>
                <p>Pages: ${book.pages}</p>
                <p>Genre: ${book.genre}</p>
                <p class='notes'>Notes: ${book.notes}</p>
            </div>
        
            <p class='card-background'>${book.genre === 'Fantasy/Sci-Fi' ?
            bookCard.style.backgroundColor = 'powderblue':
            book.genre === "Non-Fiction" ?
            bookCard.style.backgroundColor = 'rosybrown':
            book.genre === "Romance" ?
            bookCard.style.backgroundColor = 'lightpink':
            book.genre === "Suspense/Thriller" ?
            bookCard.style.backgroundColor = 'thistle':
            book.genre === "Young Adult" ? 
            bookCard.style.backgroundColor= 'lightyellow':
            book.genre === "Other" ?
            bookCard.style.backgroundColor = 'mediumaquamarine':
            bookCard.style.backgroundColor = '#e3e3e3'}
            </p>

            <p class='read-status'>${book.read ? 
            bookCard.style.borderLeftColor= '#f95959': 
            bookCard.style.borderTopColor = '#352f44',
            bookCard.style.borderRightColor = '#352f44',
            bookCard.style.borderBottomColor = '#352f44'}
            </p>
            <div class='card-icon-container'>
                <img class='notes-icon' onclick='showHide(${i})' src='img/text-box-outline.svg' alt='notes-icon' title='Notes'>
                <img class='read-icon' onclick='changeRead(${i})' src='img/book-open-page-variant-outline.svg' alt='read-icon' title='Read/Not Read'>
                <img class='edit-icon' onclick='editBook(${i})'src='img/file-document-edit-outline.svg' alt='edit-icon' title='Edit'>
                <img class='remove-icon' onclick='removeBook(${i})' src='img/trash-can-outline.svg' alt='remove-icon' title='Remove'>
            </div>
        </div>
        `;
        libraryBook.appendChild(bookCard);
    }
}

function Book(title, authorfirst, authorlast, pages, genre, notes, read) {
    this.title = title;
    this.authorfirst = authorfirst;
    this.authorlast = authorlast;
    this.pages = pages;
    this.genre = genre;
    this.notes = notes;
    this.read = read;
}

function addBookToLibrary() {
    let title = document.getElementById('title-input').value;
    let authorfirst = document.getElementById('authorfirst-input').value;
    let authorlast = document.getElementById('authorlast-input').value;
    let pages = document.getElementById('pages-input').value;
    let genre = document.getElementById('genre-select').value;
    let notes = document.getElementById('notes-input').value;
    let read = document.getElementById('read-input').checked;

    let newBook = new Book(title, authorfirst, authorlast, pages, genre, notes, read);
    myLibrary.push(newBook);
    updateLibrary();
    clearForm();
}

function clearForm() {
    titleInput.value = '';
    authorFirstInput.value = '';
    authorLastInput.value = '';
    pagesInput.value = '';
    genreSelect.value = 0;
    notesInput.value = '';
    readCheck.checked = false;
}

function removeBook(index) {
    myLibrary.splice(index, 1);
    updateLibrary();
}

function showHide() {
    let notesInfo = document.querySelector('.notes');
    if (notesInfo.style.display === 'block') {
        notesInfo.style.display = 'none';
    } else {
        notesInfo.style.display = 'block';
    }
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

//function showHideForm() {
//    let inputForm = document.querySelector('.input-form');
//        if (inputForm.style.display === 'flex') {
//            inputForm.style.display = 'none';
//        } else {
//            inputForm.style.display = 'flex';
//        }
//}

//menuIcon.addEventListener('click', e => {
//    showHideForm();
//})

//newBookButton.addEventListener('click', e => {
//    let addBookForm = document.querySelector('.input-form');
//    addBookForm.style.display = 'flex';
//    changeRead();
//})

addButton.addEventListener('click', e => {
    event.preventDefault();
    addBookToLibrary();
})

clearButton.addEventListener('click', e => {
    clearForm();
})

//notesIcon.addEventListener('click', e => {
//    showHide();
//})

//readIcon.addEventListener('click', e => {
//    changeRead();
//})