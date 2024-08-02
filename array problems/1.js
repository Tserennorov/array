// //bodlogo1 ugugdsun massivin niilberig olj butsaa.--------------------------------------------------------

// const arr = [1, 2, 234, 123, 556, 123, 9, 19, 12, 976];

// let niilber = 0;
// for (let i = 0; i < arr.length; i++) {
//   niilber = niilber + arr[i];
// }
// console.log(niilber);

// //bodlogo2 ugugdsun massivin dundjiig olj butsaa.------------------------------------------------------

// const arr = [1, 2, 234, 123, 556, 123, 9, 19, 12, 976];

// let niilber = 0;
// for (let i = 0; i < arr.length; i++) {
//   niilber += arr[i];
// }
// dundaj = 0;
// dundaj = niilber / 10;
// console.log(dundaj);

// //bodlogo3 ugugdsun massivin hamgiin ih toog olj butsaa.-----------------------------------------------

// const arr = [1, 2, 234, 123, 977, 123, 9, 19, 12, 556];

// let max = 0;
// for (let i = 0; i < arr.length; i++) {
//   if (max < arr[i]) {
//     max = arr[i];
//   }
// }
// console.log(max);

// //bodlogo4 ugugdsun string iin utvuug butsaa.(Hello-> olleH)------------------------------------------

// const urvuu = "Hello";
// let ug = "";

// for (let i = urvuu.length - 1; i >= 0; i--) {
//   ug = ug + urvuu[i];
// }

// console.log(ug);

// // bodlogo5 davhardah ugugdsun string iin temdegt bvr davhardaj oroogvi esehiig shalga.(Check if all chars are unique)

// const a = "check if all chars are unique";
// for (let i = 0; i <= a.length - 1; i++) {
//   for (let j = i + 1; j <= a.length; j++) {
//     if (a[i] == a[j]) {
//       console.log(a[i]);
//     }
//   }
// }

// //bodlogo6 ugugdsun 2 massiviin ogtloltsolig olj butsaa.----------------------------------------------
// const a = [1, 2, 234, 123, 556, 123, 9, 19, 12, 976];
// const b = [99, 123, 554, 998];
// const c = [];
// for (let i = 0; i < a.length; i++) {
//   for (let j = 0; j < b.length; j++) {
//     if (a[i] == b[j]) {
//       console.log(b[j]);
//       break;
//     }
//   }
// }

// //bodlogo7 ugugdsun N too hvrtelh bvh tegsh toog hevleh.----------------------------------------------
// let a = 20;
// const b = [];
// for (let i = 0; i <= a; i++) {
//   if (i % 2 == 0) {
//     b.push(i);
//   }
// }
// console.log(b);

// //bodlogo8 ugugdsun N toonii undurtei pyramid '*' ashiglan hevle.-------------------------------------
// const n = 5;
// const mid = Math.floor((2 * n - 1) / 2);
// for (let row = 0; row < n; row++) {
//   let line = "";
//   for (let col = 0; col < 2 * n - 1; col++) {
//     if (col >= mid - row && col <= mid + row) {
//       line += "*";
//     } else {
//       line += " ";
//     }
//   }
//   console.log(line);
// }

// const a = 5;

// let rows = 10;
// for (let i = 0; i < a; i++) {
//   let a = "";
//   for (let j = 0; j < rows - i; j++) a += " ";
//   for (let k = 0; k <= i; k++) a += "* ";
//   console.log(a);
// }

// //bodlogo9  n toonii factorial
// let sum = 1;
// for (i = 1; i <= 10; i++) {
//   sum = sum * i;
//   console.log(sum);
// }
// console.log(sum);

// //bodlogo10 n=even number
// let sum = 1;
// for (i = 1; i <= 10; i++) {
//   if (i % 2 == 0) {
//     console.log(i);
//   }
// }
