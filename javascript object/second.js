// //bodlogo1 Huvirgah  "2020 Toyota Coralla" gedeg shig-------------------------------------------------------
// const movie = {
//   title: "Inception",
//   director: "Christopher Nolan",
//   year: 2010,
// };

// //bodlogo2 Huvirgah  "2020 Toyota Coralla" gedeg shig-------------------------------------------------------
// const album = {
//   title: "Abbey Road",
//   artist: "The Beatles",
//   releaseYear: 1969,
// };

// //bodlogo3 Huvirgah  "2020 Toyota Coralla" gedeg shig-------------------------------------------------------
// const album = {
//   title: "Thriller",
//   artist: "Michael Jackson",
//   releaseYear: 1982,
//   genre: "Pop",
//   getSrting: function () {
//     return `${this.genre}`;
//   },
// };

// const text = album.getString();
// console.log(text);

// //bodlogo4 Grade 60aas ih buyu tentsuu baih ueiin humuusiin neriig arrayd hadgal gedeg shig
// // Salary 50000 buyu tentsuu--------------------------------------------------------------------------------------------------------------
// const employees = [
//   { name: "John", salary: 50000 },
//   { name: "Jane", salary: 60000 },
//   { name: "Jim", salary: 45000 },
// ];
// const names = employees
//   .filter((element) => element.salary >= 50000)
//   .map(({ name }) => name);
// console.log(names);

// //bodlogo5
// // Price 1000 aas ihiig--------------------------------------------------------------------------------------------------------------
// const products = [
//   { name: "Laptop", price: 1200 },
//   { name: "Phone", price: 800 },
//   { name: "Tablet", price: 400 },
// ];
// const names = products
//   .filter((element) => element.price > 1000)
//   .map(({ name }) => name);
// console.log(names);

// //bodlogo6
// // title ni type ni number baival ter objectiig ol--------------------------------------------------------------------------------------------------------------
// const books = [
//   { title: 1984, author: "George Orwell" },
//   { title: "Brave New World", author: "Aldous Huxley" },
//   { title: "Fahrenheit 451", author: "Ray Bradbury" },
// ];
// const foundobject = books.find(({ title }) => typeof title === "number");
// console.log(foundobject);

// //bodlogo7 Price 10 aas ih baigaa baraanii nerig hevle. Hervee baihgui bol not found gej hevle. Ternary operator ashiglana gedeg bodlogo shig
//Price 150 aas ihiig--------------------------------------------------------------------------------------------------------------
// const gadgets = [
//   { name: "Smartphone", price: 699 },
//   { name: "Smartwatch", price: 199 },
//   { name: "Bluetooth Speaker", price: 49 },
// ];

// const getGadgets = () => {
// }

// const products = [
//   { name: "Pen", price: 5 },
//   { name: "Eraser", price: 1 },
//   { name: "Notebook", price: 12 },
// ];

// const getProducts = () => {
//   const matchedProducts = products
//     .filter(({ price }) => price > 10)
//     .map(({ name }) => name);

//   return matchedProducts.length ? matchedProducts : "Not found";
// };

// //bodlogo8
// //Price 2 ih buyu tentsuu--------------------------------------------------------------------------------------------------------------
// const groceries = [
//   { name: "Apple", price: 1 },
//   { name: "Milk", price: 3 },
//   { name: "Bread", price: 2 }
// ];

// // bodlogo9
// //Price 100 as ih--------------------------------------------------------------------------------------------------------------
// const furniture = [
//   { name: "Chair", price: 45 },
//   { name: "Table", price: 150 },
//   { name: "Lamp", price: 25 }
// ];

// // bodlogo 10 Hun tus buriin  ovog neriig ashiglaad fullname iig ni hevle gedeg shig------------------------
// const authors = [
//   { firstName: "Mark", lastName: "Twain" },
//   { firstName: "Ernest", lastName: "Hemingway" },
//   { firstName: "Jane", lastName: "Austen" },
// ];
// const fullnames = authors.map((item) => {
//   return `${item.firstName} ${item.lastName}`;
// });
// console.log(fullnames);

// // bodlogo 11 Hun tus buriin  ovog neriig ashiglaad fullname iig ni hevle gedeg shig------------------------
// const students = [
//   { firstName: "Alice", lastName: "Johnson" },
//   { firstName: "Bob", lastName: "Brown" },
//   { firstName: "Carol", lastName: "Davis" },
// ];
// const fullnames = students.map((item) => {
//   return `${item.firstName} ${item.lastName}`;
// });
// console.log(fullnames);

// // bodlogo 12 Hun tus buriin  ovog neriig ashiglaad fullname iig ni hevle gedeg shig------------------------
// const musicians = [
//   { firstName: "Ludwig", lastName: "Beethoven" },
//   { firstName: "Wolfgang", lastName: "Mozart" },
//   { firstName: "Johann", lastName: "Bach" },
// ];
// const fullnames = musicians.map((item) => {
//   return `${item.firstName} ${item.lastName}`;
// });
// console.log(fullnames);

// // Zohiol tus buriig hden jiliin omno zohiogdoj baisniig ni hevle. Hugatsaag ni haruulsan shine keyless update hiine gedeg shig
// // bodlogo 13------------------------------------------------------------------------------------------------
// const movies = [
//   { title: "The Shawshank Redemption", year: 1994 },
//   { title: "The Godfather", year: 1972 },
//   { title: "The Dark Knight", year: 2008 },
// ];
// const updatedMovies = movies.map((movies) => ({
//   writtenYear: new Date().getFullYear() - movies.year,
//   ...movies,
// }));
// console.log(updatedMovies);

// //bodlogo14;------------------------------------------------------------------------------------------------
// const albums = [
//   { title: "Abbey Road", year: 1969 },
//   { title: "The Wall", year: 1979 },
//   { title: "Thriller", year: 1982 },
// ];
// const updatedAlbums = albums.map((albums) => ({
//   WrittenYear: new Date().getFullYear() - albums.year,
//   ...albums,
// }));
// console.log(updatedalbums);

// //bodlogo15------------------------------------------------------------------------------------------------
// const plays = [
//   { title: "Hamlet", year: 1603 },
//   { title: "A Midsummer Night's Dream", year: 1595 },
//   { title: "Death of a Salesman", year: 1949 },
// ];
// const updatedplays = plays.map((plays) => ({
//   WrittenYear: new Date().getFullYear() - plays.year,
//   ...plays,
// }));
// console.log(updatedplays);

// // Duriin id aar ni completed iig update hiih function bich
// // bodlogo16------------------------------------------------------------------------------------------------
// const events = [
//   { id: 1, name: "Conference", attended: true },
//   { id: 2, name: "Workshop", attended: false },
//   { id: 3, name: "Meetup", attended: false },
// ];

// //bodlogo17------------------------------------------------------------------------------------------------
// const appointments = [
//   { id: 1, description: "Dentist appointment", attended: true },
//   { id: 2, description: "Team meeting", attended: false },
//   { id: 3, description: "Lunch with a friend", attended: false },
// ];
