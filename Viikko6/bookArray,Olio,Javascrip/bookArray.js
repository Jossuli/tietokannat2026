const bookArray = [
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
];

console.log("Tietotyyppi: ",typeof bookArray);
console.log("Koko sisältö: ", bookArray);
console.log("Ensimmäinen rivi: ",bookArray[0]);
console.log("Ensimmäinen kirjan nimi: ",bookArray[0].name);
console.log("Rivien määrä: ",bookArray.length);
console.log("Kaikkien kirjojen nimet: ");
bookArray.forEach(book => console.log(book.name));