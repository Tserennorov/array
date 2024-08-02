// //Map
// //bodlogo1 tus bvriin kvadrat olj array butsaa. function ashiglana.-----------------------------
// const numbers = [1, 2, 3, 4, 5];
// const squares = numbers.map((el) => el * el);
// console.log(squares);

// //bodlogo2 too tus bvriin 20%tai tentseh utgiig uurt ni nemj array butsaa.----------------------
// const prices = [100, 200, 300, 400];
// const twenypercent = prices.map((el) => (el / 100) * 20 + el);
// console.log(twenypercent);

// //bodlogo3 too tus bvriin 10%iin hungulultiig olj array butsaa.------------------------------------
// const prices = [100, 200, 300, 400];
// const tenpercentdiscount = prices.map((el) => el - (el / 100) * 10);
// console.log(tenpercentdiscount);

// //find
// //bodlogo4 const number-aas 3iin too hed deh index deer baigaag ol.---------------------------------
// const numbers = [1, 2, 3, 4, 5];
// const findnumber = numbers.findIndex((el) => el === 3);
// console.log(findnumber);

// //bodlogo5 const number aas 3aas busad toonuudig avah.------------------------------------------------
// const numbers = [1, 2, 3, 4, 5];
// const findnumber = numbers.filter((el) => el !== 3);
// console.log(findnumber);

// //bodlogo6 const number aas dund ni baigaa toog olj 10t urjin numberaa butsaa.--------------------------
// const numbers = [1, 2, 3, 4, 5];
// const findnumber = numbers.findIndex(((el) => el % 2) * 10);
// console.log(findnumber);

// //filter
// //bodlogo7 sondgoi toonuudig ol.-------------------------------------------------------------------
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const sondgoi = numbers.filter((el) => el % 2 == 1);
// console.log(sondgoi);

// // bodlogo8 J usgeer ehelsen nerssig olj butsaa.---------------------------------------------------------
// const names = ["John", "Jane", "James", "Alice", "Bob"];
// const J = [];
// const Juseg = names.filter((el) => el[0]);
// const a = J.push(el[0]);
// console.log(a);

// //bodlogo9 345aas baga bolon ih toonuudiig ylgaj avch 2 array butsaa.-----------------------------------
// const prices = [120, 344, 200, 323, 411, 405, 20, 40, 504, 993];
// const ih = prices.filter((el) => el > 345);
// console.log(ih);
// const baga = prices.filter((el) => el < 345);
// console.log(baga);

// bodlogo10 7 usegtei string iig ol.---------------------------------------------------------------------
const strings = ["apple", "bananaa", "cherry", "blueberry", "date"];
const newArr = [];
const found = strings.filter((item) => item.length === 7);
newArr.push(found);
console.log(newArr);

//bodlogo11 shaganaltai bodlogo foreach ashiglan function bichne. const=[1,1,1,1,1,1,1]
//shine mor avah string/n----------------------------------------------------------------------------------
