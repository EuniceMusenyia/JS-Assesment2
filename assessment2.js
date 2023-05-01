// const books = [
//     { title: 'The Catcher in the Rye', author: 'J.D. Salinger', publicationYear: 1951,
//     isAvailable: true },
//     { title: 'Great Expectations', author: 'Charles Dickens', publicationYear: 1861,
//     isAvailable: false },
//     { title: 'Crime and Punishment', author: 'Fyodor Dostoevsky', publicationYear:
//     1866, isAvailable: true },
//     { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', publicationYear: 1925,
//     isAvailable: false },
//     { title: 'The Odyssey', author: 'Homer', publicationYear: -800, isAvailable: true },
//     ];
    // Write a JavaScript program that performs the following tasks:
// 1. Create a function called getAvailableBooks that returns an array of all available
function getAvailableBooks() {
    let books = [
        {title: 'The Catcher in the Rye', author: 'J.D. Salinger', publicationYear: 1951},
        {title: 'Great Expectations', author: 'Charles Dickens', publicationYear: 1861},
        {title: 'Crime and Punishment', author: 'Fyodor Dostoevsky', publicationYear:1866},
        {title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', publicationYear: 1925},

    ]  
}
console.log(getAvailableBooks.title());

// 2. Create a function getBooksByAuthor that takes an author's name as an argument and
// returns an array of all books by that author.
function getAvailableBooks() {
    let bookAuthor = [
        {title: 'The Catcher in the Rye', author: 'J.D. Salinger', publicationYear: 1951},
        {title: 'Great Expectations', author: 'Charles Dickens', publicationYear: 1861},
        {title: 'Crime and Punishment', author: 'Fyodor Dostoevsky', publicationYear:1866},
        {title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', publicationYear: 1925},

    ] 
    console.log(books.author);
   
    
}
getAvailableBooks()

// 3. Create a function addNewBook that takes a book object as an argument and adds it
// to the library, ensuring that the new book has all required properties (title, author,
// publicationYear, and isAvailable).
function addNewBook() {
    let newBook = [books ({
        title: 'The Odyssey', author: 'Homer', publicationYear: 1980, isAvailable: true
    },)
    ]
    
}
console.log(addNewBook);
// 4. Create a function checkoutBook that takes a book title as an argument and changes
// the book's isAvailable property to false. If the book is not found in the library, the
// function should return a message indicating that the book is not available.
function checkoutBook() {
    const books = [
        { title: 'The Catcher in the Rye', author: 'J.D. Salinger', publicationYear: 1951,
        isAvailable: true },
        { title: 'Great Expectations', author: 'Charles Dickens', publicationYear: 1861,
        isAvailable: false },
        { title: 'Crime and Punishment', author: 'Fyodor Dostoevsky', publicationYear:
        1866, isAvailable: true },
        { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', publicationYear: 1925,
        isAvailable: false },
        { title: 'The Odyssey', author: 'Homer', publicationYear: -800, isAvailable: true },
        ];
        for (let i = 0; i < books.isAvailable; i++) {
            let rtnBook = books[i];
            if (books in books.isAvailable) {
               return("book is available")
                
            }
            else{
              return ("book is not available")
            }
        
    }
  }
    console.log(returnBook());
// 5. Create a function returnBook that takes a book title as an argument and changes the
// book's isAvailable property to true. If the book is not found in the library, the function
// should return a message indicating that the book does not belong to the library.
function returnBook() {
    const books = [
            { title: 'The Catcher in the Rye', author: 'J.D. Salinger', publicationYear: 1951,
            isAvailable: true },
            { title: 'Great Expectations', author: 'Charles Dickens', publicationYear: 1861,
            isAvailable: false },
            { title: 'Crime and Punishment', author: 'Fyodor Dostoevsky', publicationYear:
            1866, isAvailable: true },
            { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', publicationYear: 1925,
            isAvailable: false },
            { title: 'The Odyssey', author: 'Homer', publicationYear: -800, isAvailable: true },
            ];

          for (let i = 0; i < books.isAvailable; i++) {
              let rtnBook = books[i];
              if (books in books.isAvailable) {
                 return("book does not belong to the library")
                  
              }
              else{
                return ("book does not belong to the library")
              }
             
          
      }
    }
      console.log(returnBook());

