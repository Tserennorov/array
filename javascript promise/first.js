//bodlogo1
// 1 sekundiin daraa Hello World gesen text uguh Promise iin response bich.-----------------------------------
// const response = (time) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log(time);
//     }, 10000);
//   });
// };

// console.log(response);

// const response = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const helloworld = "helloworld";
//     if (helloworld === "a") {
//       resolve(true);
//     } else {
//       reject("something wrong has happened");
//     }
//   }, 6000);
// });

// response.then((response) => console.log(response));

// console.log(123);

// const doPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("hello");
//   }, 10000);
// });
// console.log(
//   doPromise.then((response) => {
//     console.log(response);
//   })
// );

// const helloworld = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("hello world");
//   }, 10000);
// });
// helloworld.then((response) => console.log(response));

//bodlogo2
//1 sekund tutamd counter gesen huvisagchiig 1eer ahiulj hevle.---------------------------------------------

// const printcounter = () => {
//   setInterval(printcounter, 1000);
//   console.log("counter");
// };

// let counter = 0;
// setInterval(() => {
//   counter += 1;
//   console.log(counter);
// }, 1000);

// let i = 1;
// const counter = setInterval(() => {
//   const promise = new Promise((resolve) => {
//     i++;
//     resolve(i);

//     if (i === 10) {
//       clearInterval(counter);
//     }
//   });
//   promise.then((response) => console.log(response));
// }, 1000);

//bodlogo3
//2 sekund tutam des daraallan step1, step2, step3 gesn text hevle.------------------------------------------

// let counter = 0;
// const interval = setInterval(() => {
//   counter += 1;
//   console.log(`step${counter}`);
//   if (counter == 3) {
//     clearInterval(interval);
//   }
// }, 2000);

//bodlogo4 "Something went wrong!" gesen error iig hevle.----------------------------------------------------
// const response = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const helloworld = "helloworld";
//     if (helloworld === "a") {
//       resolve(true);
//     } else {
//       reject("something wrong has happened");
//     }
//   }, 6000);
// });

// const doPromise = (error) => {
//   return new Promise((resolve, reject) => {
//     if (error == false) {
//       resolve("no error");
//     } else {
//       reject("something went wrong");
//     }
//   });
// };
// doPromise(true)
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((reject) => {
//     console.log(reject);
//   });

//bodlogo5
//1 second tutamd nums iin utguudig uur deer ni nemeh.--------------------------------------------------------------
// const num = [1, 2, 3, 4, 5];
// let count = 0;
// let number = 0;
// const interval = setInterval(() => {
//   number += num[count];
//   console.log(number);
//   count += 1;
//   if (count == num.length) {
//     clearInterval(interval);
//   }
// }, 1000);

// const nums = [1, 2, 3, 4, 5];
// let sum = 0;
// let i = 0;

// const calculate = setInterval(() => {
//   const promise = new Promise((resolve) => {
//     sum += nums[i];
//     resolve(sum);
//     i++;

//     if (i === nums.length) {
//       clearInterval(calculate);
//     }
//   });

//   promise.then((response) => console.log(response));
// }, 1000);
