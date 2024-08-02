// //bodlogo1 fruitsin elementvvdiin ehnii vseg oldog function.------------------------------------------------
// const firstLetters = (fruits) => {
//   let array = [];
//   fruits.forEach((element) => {
//     array.push(element[0]);
//   });
//   return array;
// };
// const fruits = ["apple", "banana", "cherry"];
// const hariu = firstLetters(fruits);
// console.log(hariu);

// //bodlogo2 array iin elementuudin niilber oldog function.-------------------------------------------------
// const sum = (arr) => {
//   let sum = 0;
//   arr.forEach((element) => {
//     sum += element;
//   });
//   return sum;
// };
// const arr = [22, 4452, 2456, 9887];
// const hariu = sum(arr);
// console.log(hariu);

// const toonuud = [22, 4452, 2456, 9887];
// let sum = 0;
// let array = [];

// toonuud.forEach((el) => {
//   array.push((sum += el));
// });
// console.log(array);

// //bodlogo3 fruitsiin elementvvdin urtiig oldog function-----------------------------------------------------------------------------------

// const fruits = ["apple", "banana", "cherry"];
// const fruits2 = ["dsadasdas", "dsadasdas", "dsadasd"];
// const fruits3 = ["z", "zxc", "czcx"];

// const lengthFunction = (array) => {
//   array.forEach((element) => {
//     console.log(element.length);
//   });
// };

// lengthFunction(fruits3);

// const fruits = ["apple", "banana", "cherries"];
// const fruitsLenght = (fruits) => {
//   let length = [];
//   fruits.forEach((element) => {
//     length.push(element.length);
//   });
//   return length;
// };
// const hariu = fruitsLenght(fruits);
// console.log(hariu);

// //bodlogo4 numbersin tegsh tsipriig oldog function.-------------------------------------------------------
// const numbers = [2, 5, 7, 9, 11, 24];
// const even = (numbers) => {
//   let evennumbers = [];
//   numbers.forEach((element) => {
//     if (element % 2 == 0) {
//       evennumbers.push(element);
//     }
//   });
//   return evennumbers;
// };
// const hariu = even(numbers);
// console.log(hariu);

// // bodlogo5 toonuudin kvadratig oldog function.---------------------------------------------------------
// const toonuud = [1, 2, 3, 4, 5];
// const kvadrat = (toonuud) => {
//   let kvadrat2 = [];
//   toonuud.forEach((element) => {
//     kvadrat2.push(element * element);
//   });
//   return kvadrat2;
// };
// const hariu = kvadrat(toonuud);
// console.log(hariu);

//bodlogo6 jimsnii elementvvdiin goliin useg oldog function.-----------------------------------------------
const jims = ["hello", "bye"];
const goliinuseg = (jims) => {
  let useg = [];
  jims.forEach((element) => {
    useg.push(element / 2);
  });
  return useg;
};
const hariu = goliinuseg(jims);
console.log(hariu);
