const myLibrary = [];

function Book(title, author, year, pages, read, notRead) {
  this.title = title;
  this.author = author;
  this.year = year;
  this.pages = pages;
  this.read = read;
  this.notRead = notRead;
  //   this.info = () => {
  //     console.log(`${title} by ${author} in the year ${year}, ${pages} pages, ${read}.`);
  //   };
}

function addBookToLibrary() {
  function handleSubmit(event) {
    event.preventDefault();

    const bookTitle = document.getElementById('title');
    const bookAuthor = document.getElementById('author');
    const bookYear = document.getElementById('year');
    const bookPages = document.getElementById('pages');
    const bookRead = document.getElementById('read');
    const bookNotRead = document.getElementById('not-read');

    if (bookRead.checked === true && bookNotRead.checked === true) {
      throw new Error('Please mark only one checkbox either Yes or No');
    } else if (bookRead.checked === true) {
      bookRead.value = true;
      bookNotRead.value = false;
      // return document.getElementById("result").innerHTML = y;
    } else if (bookNotRead.checked === true) {
      bookRead.value = false;
      bookNotRead.value = true;
      // return document.getElementById("result").innerHTML = n;
    } else {
      throw new Error('*Please mark any of checkbox');
    }

    const newBook = new Book(
      bookTitle.value,
      bookAuthor.value,
      bookYear.value,
      bookPages.value,
      bookRead.value,
      bookNotRead.value,
    );

    // if (bookRead.value === true)

    myLibrary.push(newBook);

    console.log(myLibrary);

    bookTitle.value = ' ';
    bookAuthor.value = ' ';
    bookYear.value = ' ';
    bookPages.value = ' ';
    bookRead.value = ' ';
    bookNotRead.value = ' ';
    bookRead.checked = false;
    bookNotRead.checked = false;
  }

  const form = document.querySelector('form');
  form.addEventListener('submit', handleSubmit);
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
