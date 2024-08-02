// // bodlogo1 const items=[{ name:'Item1',price:30}, {name:'item2',price:20}, {name: 'Item3', price:50}];
// // uniin niilberiig garga.------------------------------------------------------------------------------------------------------------------
// const items = [
//   { name: "Item1", price: 30 },
//   { name: "item2", price: 20 },
//   { name: "Item3", price: 50 },
// ];

// const prices = items.reduce((sum, item) => sum + item.price, 0);
// console.log(prices);

// // bodlogo2 const books=[{title;'Book1', author:'Author1'}, {title;'Book', author:'Author2'},{title:'Book3', author:'Author3'}];
// // Author bug 1 array hadgalaad garage.--------------------------------------------------------------------------------
// const books = [
//   { title: "Book1", author: "Author1" },
//   { title: "Book", author: "Author2" },
//   { title: "Book3", author: "Author3" },
// ];

// const authors = books.map((el) => el.author);
// console.log(authors);

// // bodlogo3 const users=[{id:1,name:'Alice'},{id:2,name:'Bob'},{id:3,name 'Charlie}];
// // Bob gesen nertei objectig ol.--------------------------------------------------------------------------------------------------------------------
// const users = [
//   { id: 1, name: "Alice" },
//   { id: 2, name: "Bob" },
//   { id: 3, name: "Charlie" },
// ];

// const names = users.find((el) => el.name === "Bob");
// console.log(names);

// //bodlogo4 hun tus buriin ovog neriig ashiglaad fullname iig ni hevle.-------------------------------------
// const people = [
//   { firstName: "John", lastName: "Doe" },
//   { firstName: "Jane", lastName: "Smith" },
//   { firstName: "Emily", lastName: "Jones" },
// ];

// const fullnames = ({ firstName, lastName }) => `${firstName} ${lastName}`;
// // const fullname = people.filter((el) => el.firstName + el.lastname);
// // console.log(fullname);
// const fullname = people.map();
// console.log(fullnames);

// //bodlogo5 duriin id gaar ni completed iig update hiih function bich.-------------------------------------
// const tasks = [
//   { id: 1, description: "Do laundry", completed: false },
//   { id: 2, description: "Clean Dishes", completed: false },
//   { id: 3, description: "Buy Groceries", completed: false },
// ];
// const updateTask = (taskId) => {
//   const foundTask = tasks.find(({ id }) => id === taskId);

//   if (!foundTask) return "Not found";

//   foundTask.completed = true;

//   return tasks;
// };
// console.log(updateTask);

// //bodlogo6 Objectoos duriin keyg ni function parametereer damjuulahad utgiig ni avdag bolgoh.----------------
// const book = {
//   title: "To kill a Mockingbird",
//   author: "Harper Lee",
//   year: 1960,
// };
// const getvalue = (key) => book(key);
// console.log(getvalue);

// // bodlogo7 Grade 60aas ih buyu tentsuu baih uyiin humuusiin neriig arrayd hadgal.---------------------------------
// const students = [
//   { name: "Alice", grade: 85 },
//   { name: "Bob", grade: 59 },
//   { name: "Charlie", grade: 72 },
// ];
// const names = students
//   .filter((element) => element.grade >= 60)
//   .map(({ name }) => name);
// console.log(names);

// //bodlogo8 price 10aas ih baigaa baraanii neriig hevle.Hervee baihgvi bol not found gej hevle.Ternary operator ashiglana.--
// const products = [
//   { name: "Pen", price: 5 },
//   { name: "Notebook", price: 12 },
//   { name: "Eraser", price: 1 },
// ];
// const getProducts = () => {
//   const matchedProduct = products
//     .filter(({ price }) => price > 10)
//     .map(({ name }) => name);
//   return matchedProduct;
// };
// console.log(matchedProduct);

// //bodlogo9 groupleerei jishee ni {engineering:["Alice","Charlie"],Sales:["Bob","David"],HR:"Eve"}---------
// const employees = [
//   { name: "Alice", department: "Engineering" },
//   { name: "Bob", department: "Sales" },
//   { name: "Charlie", department: "Engineering" },
//   { name: "David", department: "Sales" },
//   { name: "Eve", department: "HR" },
// ];
// const groupedemployees = employees.reduce((acc, { department, name }) => {
//   if (!acc[department]) {
//     acc[department] = [];
//   }

//   acc[department].push(name);

//   return acc;
// }, {});
// console.log(groupedemployees);

//bodlogo10 zohiol us bvriig heden jiliin umnu zohiogdoj baisniig ni hevle. Hugatsaag ni haruulsan shine keyless update hiine.

// const books = [
//   { title: "1984", year: 1949 },
//   { title: "The Great Gatsby", year: 1925 },
//   { title: "To Kill a Mockingbird", year: 1960 },
// ];

// const updatedBooks = books.map((books) => ({
//   writtenYear: new Date().getFullYear() - books.year,
//   ...books,
// }));

// console.log(updatedBooks);

// // bodlogo11 yamar jims hden shirheg baigaagar ni hevle.--------------------------------------------------
// const sales = [
//   { product: "Apple", quantity: 10 },
//   { product: "Apple", quantity: 7 },
//   { product: "Banana", quantity: 5 },
//   { product: "Banana", quantity: 3 },
// ];

// const totalQuantities = sales.reduce((acc, { product, quantity }) => {
//   if (acc[product]) {
//     acc[product] += quantity;
//   } else {
//     acc[product] = quantity;
//   }
//   return acc;
// }, {});
// console.log(totalQuantities);

// // bodlogo12 negtgene. Herev email bolon name ni davtssan bol zovhon 1 objectiig ni oruulna.-------------------
// const users1 = [
//   { id: 1, name: "Alice", email: "alice@example.com" },
//   { id: 2, name: "Bob", email: "bob@example.com" },
// ];
// const users2 = [
//   { id: 2, name: "Bob", email: "bob@example.com" },
//   { id: 3, name: "Charlie", email: "charlie@example.com" },
// ];

// const concat = users1.concat(users2).reduce((acc, item) => {
//   const foundItem = acc.find((el) => el?.email === item.email);

//   if (!foundItem) {
//     acc.push(item);
//   }
//   return acc;
// }, []);
// console.log(concat);
