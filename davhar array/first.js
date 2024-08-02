// //bodlogo1 ner bolon nasiig tusad ni array hadgal.-----------------------------------------------------
// const a = [
//   ["Alice", 30],
//   ["Bob", 25],
//   ["John", 54],
// ];

// const ner = [];
// const nas = [];

// a.forEach((person) => {
//   person.forEach((el) => {
//     if (typeof el === "string") {
//       ner.push(el);
//     } else {
//       nas.push(el);
//     }
//   });
// });
// console.log(ner, nas);

//bodlogo2 30tai taarsan arrayin index bolon hvnii neriig hevle.---------------------------------------
const data = [
  ["Alice", 30],
  ["Bob", 25],
  ["John", 54],
];

let ageIndex, foundItem, itemId;
data.forEach((item, id) => {
  item.forEach((el, index, arr) => {
    if (el === 30) {
      ageIndex = index;
      foundItem = arr;
      itemId = id;
    }
  });
});

const username = foundItem.find((item) => typeof item === "string");
console.log(ageIndex, username, itemId);

// //bodlogo3 sorog toonuud hed hedduger index deer bgag hevle.-------------------------------------------
// const numbers = [3, 7, -1, 8, -3];
// numbers.forEach((sorog) => {
//   if (const< 0){

//   }
// })
//bodlogo4 ['abc','def']->['cba','fed'] bolgoj huvirga.------------------------------------------------
//bodlogo5  hamgiin tvrvvnd taarsan sondgoi toog ol.---------------------------------------------------
//bodlogo6 hamgiin turuund taarsan sondgoi toog ol.----------------------------------------------------
//bodlogo7 hamgiin turuund taarsan palindromig ol.-----------------------------------------------------
//bodlogo8 hamgiin ih davtagdaj baigaa ugtvariig ol.(prefix)-------------------------------------------
//bodlogo9 n toonoos ih toonuudig hevle n=5------------------------------------------------------------
//bodlogo10 a gaar ehelsen stringvvdiig hevle.---------------------------------------------------------
//bodlogo11 baihgvi baigaa toog ol.--------------------------------------------------------------------
