const myLibrary = [];

function Book(title, author, year, pages, read) {
  this.title = title;
  this.author = author;
  this.year = year;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {
  document.getElementById('addBookModal').className = 'overlay';
  document.querySelector('.close').onclick = () => {
    document.getElementById('addBookModal').className = 'form-hide';
  };

  toggleRead();

  // Update class of books element based on length of myLibrary
  const books = document.getElementById('books');
  const directChildren = books.children.length;
  if (directChildren >= 3) {
    books.className = 'autofit';
  } else {
    books.className = 'autofill';
  }

  const form = document.querySelector('form');
  form.addEventListener('submit', handleSubmit);
}

function handleSubmit(event) {
  event.preventDefault();

  const bookTitle = document.getElementById('title');
  const bookAuthor = document.getElementById('author');
  const bookYear = document.getElementById('year');
  const bookPages = document.getElementById('pages');
  const bookRead = document.getElementById('read');

  if (bookRead.checked === true) {
    bookRead.value = 'Read';
  } else if (bookRead.checked === false) {
    bookRead.value = 'Not Read';
  }

  const newBook = new Book(
    bookTitle.value,
    bookAuthor.value,
    bookYear.value,
    bookPages.value,
    bookRead.value,
  );

  myLibrary.push(newBook);

  const books = document.getElementById('books');
  const directChildren = books.children.length;

  const div = document.createElement('div');
  div.className = 'test';
  books.appendChild(div);

  if (directChildren >= 3) {
    books.className = 'autofit';
  } else {
    books.className = 'autofill';
  }

  const div1 = document.createElement('div');
  div1.className = 'title';

  // for title
  const title = `${newBook.title}`;
  const words = title.split(' ');
  const capitalizedWords = words.map((word) => word.charAt(0).toUpperCase() + word.slice(1));
  const capitalizedTitle = capitalizedWords.join(' ');

  div1.textContent = capitalizedTitle;

  div.appendChild(div1);

  // for author
  const div2 = document.createElement('div');
  div2.className = 'author';

  const author = `${newBook.author}`;
  const words1 = author.split(' ');
  const capitalizedWords2 = words1.map((word) => word.charAt(0).toUpperCase() + word.slice(1));
  const capitalizedAuthor = capitalizedWords2.join(' ');

  div2.textContent = capitalizedAuthor;
  div.appendChild(div2);

  // for year
  const div3 = document.createElement('div');
  div3.className = 'year';

  div3.textContent = `${newBook.year}`;

  div.appendChild(div3);

  // for pages
  const div4 = document.createElement('div');
  div4.className = 'pages';
  div4.textContent = `${newBook.pages} Pages`;

  div.appendChild(div4);

  // for card buttons
  const cardButtons = document.createElement('div');
  cardButtons.className = 'card-buttons';
  div.appendChild(cardButtons);

  // for read or not read
  const readButton = document.createElement('button');
  readButton.className = 'read';

  if (newBook.read === 'Read') {
    readButton.textContent = 'Read';
  } else {
    readButton.textContent = 'Not Read';
  }

  readButton.textContent = `${newBook.read}`;

  cardButtons.appendChild(readButton);

  // for the svg
  const svg = document.createElement('svg');

  svg.addEventListener('click', () => {
    const bookIndex = Array.from(books.children).indexOf(div);
    removeBook(bookIndex);
  });

  cardButtons.appendChild(svg);

  toggleRead();

  bookTitle.value = null;
  bookAuthor.value = null;
  bookYear.value = null;
  bookPages.value = null;
  bookRead.value = ' ';
  bookRead.checked = false;

  document.getElementById('addBookModal').classList = 'form-hide';
}

function toggleRead() {
  document.querySelectorAll('.read').forEach((button) => {
    button.addEventListener('click', () => {
      // toggle the text between "Read" and "Not Read"
      if (button.textContent === 'Read') {
        button.textContent = 'Not Read';
      } else {
        button.textContent = 'Read';
      }
    });
  });
}

function removeBook(index) {
  document.getElementById('deleteBookModal').className = 'confirm';
  const yes = document.getElementById('yes');
  const no = document.getElementById('no');
  const books = document.getElementById('books');
  const directChildren = books.children.length;

  const clickedDiv = books.children[index];

  yes.addEventListener('click', () => {
    // remove the book from the array
    myLibrary.splice(index, 1);

    // remove the book from the DOM
    books.removeChild(clickedDiv);

    document.getElementById('deleteBookModal').classList = 'form-hide';

    // update the autofill/autofit class on the books element
    if (directChildren >= 3) {
      books.className = 'autofit';
    } else {
      books.className = 'autofill';
    }
  });

  no.addEventListener('click', () => {
    // books.appendChild(div);

    // remove the book from the DOM
    document.getElementById('deleteBookModal').classList = 'form-hide';
  });
}

//   return bookTitle;
//   console.log(bookTitle);

// const theHobbit = new Book('The Hobbit', 'J. R. R. Tolkien', 1937, 237, 'not read yet');
// const theLOTR = new Book(
//   'The Lord of the Rings',
//   'J. R. R. Tolkien',
//   1954,
//   307,
//   'I have read this',
// );
// const theROTK = new Book(
//   'The Return of the King',
//   'J. R. R. Tolkien',
//   1955,
//   400,
//   'I have read this',
// );
// const theKR = new Book('The Kite Runner', 'Khaled Hosseini', 2003, 250, 'not read yet');
// const trust = new Book('Trust', 'Hernan Diaz', 2022, 280, 'I have read this');

// theHobbit.info();
// theLOTR.info();
// theROTK.info();
// theKR.info();
// trust.info();
