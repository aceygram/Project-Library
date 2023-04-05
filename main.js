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
  document.getElementById('addBookModal').className = 'overlay';
  document.querySelector('.close').onclick = () => {
    document.getElementById('addBookModal').className = 'form-hide';
  };

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

    const books = document.getElementById('books');
    const div = document.createElement('div');
    div.className = 'test';
    books.appendChild(div);

    if (myLibrary.length < 4) {
      books.className = 'autofill';
    } else {
      books.className = 'autofit';
    }

    const div1 = document.createElement('div');
    div1.className = 'title';

    //  });
    //   for (let i = 0; i < myLibrary.length; i++) {
    //   if (i === myLibrary.length) {
    //     return `${myLibrary[i].title}`
    //   }
    //   div1.textContent = `${myLibrary[i].title}`;
    // }

    // for title
    myLibrary.forEach((object, index) => {
      if (index === myLibrary.length) {
        return `${myLibrary[index].title}`;
      }

      const title = `${myLibrary[index].title}`;
      const words = title.split(' ');
      const capitalizedWords = words.map((word) => word.charAt(0).toUpperCase() + word.slice(1));
      const capitalizedTitle = capitalizedWords.join(' ');

      div1.textContent = capitalizedTitle;
      return true;
    });
    div.appendChild(div1);

    // for author
    const div2 = document.createElement('div');
    div2.className = 'author';

    myLibrary.forEach((object, index) => {
      if (index === myLibrary.length) {
        return `${myLibrary[index].author}`;
      }

      const author = `${myLibrary[index].author}`;
      const words = author.split(' ');
      const capitalizedWords = words.map((word) => word.charAt(0).toUpperCase() + word.slice(1));
      const capitalizedAuthor = capitalizedWords.join(' ');

      div2.textContent = capitalizedAuthor;
      return true;
    });
    div.appendChild(div2);

    // for year
    const div3 = document.createElement('div');
    div3.className = 'year';
    myLibrary.forEach((object, index) => {
      if (index === myLibrary.length) {
        return `${myLibrary[index].year}`;
      }

      div3.textContent = `${myLibrary[index].year}`;
      return true;
    });

    div.appendChild(div3);

    // for pages
    const div4 = document.createElement('div');
    div4.className = 'pages';
    myLibrary.forEach((object, index) => {
      if (index === myLibrary.length) {
        return `${myLibrary[index].pages}`;
      }

      div4.textContent = `${myLibrary[index].pages} Pages`;
      return true;
    });
    div.appendChild(div4);

    bookTitle.value = null;
    bookAuthor.value = null;
    bookYear.value = null;
    bookPages.value = null;
    bookRead.value = ' ';
    bookNotRead.value = ' ';
    bookRead.checked = false;
    bookNotRead.checked = false;

    document.getElementById('addBookModal').classList = 'form-hide';
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
