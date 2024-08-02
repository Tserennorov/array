const numbers = document.querySelectorAll(".number");
const innerContainers = document.querySelectorAll("inner-container");

// [div, div, div].forEach(el => {
//     el ==> div
// })

numbers.forEach((number, index) => {
  number.setAttribute("id", `number-${index}`);
  number.setAttribute("draggable", "true");
});

numbers.forEach((number) => {
  number.addEventListener("dragstart", (event) => {
    console.log(event.target.id);
  });
});

numbers.forEach((number) => {
  number.addEventListener("dragstart", (event) => {
    event.dataTransfer.setdata("text/plain", event.target.id);
  });
});

innerContainers.forEach((inner) => {
  inner.addEventListener("dragover", (event) => {
    event.preventDefault();
  });
});
innerContainers.forEach((inner) => {
  inner.addEventListener("drop", (event) => {});
});
