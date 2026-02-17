const book ={
  bookArray:[
  {
    id_book: 1,
    name: "Everything You Ever Wanted to Know",
    author: "Upton",
    isbn: "082305649x"
  },
  {
    id_book: 2,
    name: "Drawing Manual Vilppu",
    author: "Zelanshi",
    isbn: "1892053039"
  }
],

getAllBooks()
{
  console.log(this.bookArray);
},

getOneBook(x)
{
  console.log(this.bookArray[x]);
},

addBook(id_book, name, author, isbn)
{
  this.bookArray.push({
    id_book: id_book,
    name: name,
    author: author,
    isbn: isbn
  });
}

};

console.log("Kaikki kirjat: ");
book.getAllBooks();
console.log("Yksi kirja: ");
book.getOneBook(0);
console.log("Lisätään kirja..");
book.addBook(3, "Accounting Concepts", "Albrecht", "1111287856");
console.log("Katsotaan uudestaan kaikki kirjat");
book.getAllBooks();
