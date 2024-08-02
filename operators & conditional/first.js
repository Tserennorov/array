// //bodlogo1 ugugdsun gurvaljnii perimetrig ol.--------------------------------------------------------
// const a = 5;
// const b = 6;
// const c = 7;

// a + b + c;
// console.log(a + b + c);

// //bodlogo2 1,3,5,7,8.7 buhel toonii niilberig ol.----------------------------------------------------
// const aa = 1;
// const bb = 3;
// const cc = 5;
// const dd = 7;
// const ee = 8.7;

// ww = aa + bb + cc + dd + ee;
// www = ww % 2;
// wwe = ww - www;

// console.log(wwe);

// //bodlogo3 ugugdsun tegsh untsugtiin talbai ba perimetrig ol.----------------------------------------

// const urt = 10;
// const urgun = 5;

// const talbai = urt * urgun;
// console.log(talbai);

// const perimeter = (urt + urgun) * 2;
// console.log(perimeter);

// // bodlogo4 ugugdsun 98 sekundig minut sekund bolgo.-------------------------------------------------

// const second = 98;
// const minute = parseInt(second / 60);
// const seconds = second % 60;

// console.log(minute, seconds);

// // bodlogo5 ugugdsun 1297 sekundig tsag minut sekund bolgo.------------------------------------------
// const hour3 = 0;
// const second3 = 1297;
// const minute3 = parseInt(second3 / 60);
// const seconds3 = second3 % 60;

// console.log(hour3, minute3, seconds3);

// // bodlogo6 ugugdsun 875 minut, 88sekundig sekund ruu shiljuul.--------------------------------------

// const a3 = 875;
// const a4 = a3 * 60;
// const a5 = a4 + 88;
// console.log(a5);

// // bodlogo7 ugugdsun 83 tsag, 84 minut, 85sekundiig sekund ruu shiljuul.-----------------------------

// const hour = 83;
// const minuteb = 84;
// const secondb = 85;

// const secondall = (hour * 60 + minuteb) * 60 + secondb;
// console.log(secondall);

// //bodlogo8 ugugdsun 38 tsagiig honog tsagt shiljvvl.-------------------------------------------------
// const hour = 38;
// const day = parseInt(hour / 24);
// const hours = hour % 24;
// console.log(day, hours);

// //bodlogo9 ugugdsun 4 honog, 40 tsagiig tsagt shiljvvl.----------------------------------------------
// const dayd = 4;
// const hourd = 40;

// const hourdall = dayd * 24 + 40;
// console.log(hourdall);

// //bodlogo10 ugugdsun 106 sariig jil sar ruu shiljvvl.------------------------------------------------
// const month = 106;
// const year = parseInt(month / 12);
// const months = 106 % 12;
// console.log(year, months);

// //bodlogo11 ugugdsun 90 jil, 98sariig sard shiljvvl.-------------------------------------------------
// const year = 90;
// const month = 98;
// const months = year * 12 + 98;
// console.log(months);

// // bodlogo12 ugugdsun 4 toonii bagiig ol.(9,3,2,8).--------------------------------------------------

// const q = 9;
// const w = 3;
// const e = 2;
// const r = 8;
// let min = q;
// if (min > q) {
//   min = q;
// }
// if (min > w) {
//   min = w;
// }
// if (min > e) {
//   min = e;
// }
// if (min > r) {
//   min = r;
// }

// console.log(min);

// //bodlogo13 ugugdsun 4 toonii 5-aas baga tooonuudin urjverig ol.(2,9,4,3)---------------------------

// const a = 2;
// const b = 9;
// const c = 4;
// const d = 3;
// let mult = 1;
// let count = 0;
// if (a < 5) {
//   mult = mult * a;
//   count++;
// }
// if (b < 5) {
//   mult = mult * b;
//   count++;
// }
// if (c < 5) {
//   mult = mult * c;
//   count++;
// }
// if (d < 5) {
//   mult = mult * d;
//   count++;
// }
// if (count >= 2) {
//   console.log(mult);
// } else {
//   console.log(0);
// }

// //bodlogo14 ugugdsun 4 toonii 5-aas ih toonuudin urjverig ol.(11,9,4,3)-----------------------------

// const t = 11;
// const y = 9;
// const u = 4;
// const i = 3;
// let mult = 1;
// let count = 0;
// if (t > 5) {
//   mult = mult * t;
//   count++;
// }
// if (y > 5) {
//   mult = mult * y;
//   count++;
// }
// if (u > 5) {
//   mult = mult * u;
//   count++;
// }
// if (i > 5) {
//   mult = mult * i;
//   count++;
// }
// if (count >= 2) {
//   console.log(mult);
// } else {
//   console.log(0);
// }

// //bodlogo15-----------------------------------------------------------------------------------------
// const a = 8;
// const b = 9;
// const c = 5;
// const d = 7;
// let mult = 1;
// let count = 0;
// if (a < 5) {
//   mult = mult * a;
//   count++;
// }
// if (b < 5) {
//   mult *= b;
//   count++;
// }
// if (c < 5) {
//   mult *= c;
//   count++;
// }
// if (d < 5) {
//   mult *= d;
//   count++;
// }
// if (count >= 2) {
//   console.log(mult);
// } else {
//   console.log(0);
// }

//bodlogo FUNCTION--------------------------------------------------------------------------------------

// //bodlogo1-------------------------------------------------------------------------------------------
// const triangle = (a, b, c) => {
//   if (a && b && c) {
//     return a + b + c;
//   } else {
//     return "buruu";
//   }
// };

// const perimeter = triangle(5, 6, 7);
// console.log(perimeter);

// const triangle = (a, b, c) => {
//   return a + b + c;
// };
// const perimeter = triangle(5, 6, 7);
// console.log(perimeter);

// //bodlogo2--------------------------------------------------------------------------------------------

// const sum = (a, b, c, d, e) => {
//   return parseInt(a + b + c + d + e);
// };

// const niilber = sum(1, 3, 5, 7, 8.7);
// console.log(niilber);

// //bodlogo3--------------------------------------------------------------------------------------------
