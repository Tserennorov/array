// const boards = document.getElementById("boards");

// const todoArrayone = ["To do", "Inprogress"];
// todoArrayone.forEach((item) => {
//   boards.innerHTML += `
//     <div class="todoArraytwo">
//       <div class="board">
//         <div class="board-header">
//           ${item}
//           <span class="count" id="todo-count">
//             1
//           </span>
//         </div>
//       </div>
//       <div class="cards" id="todo">
//         <div class="card" draggable="true">
//           <div class="done">
//             <i class="fa-solid fa-check"></i>
//           </div>
//           <div class="details">
//             <div>Todo</div>
//             <div>This is todo card</div>
//             <div class="priority">High</div>
//           </div>
//           <div class="actions">
//             <div class="done">
//               <i class="fa-solid fa-x"></i>
//             </div>
//             <div class="done">
//               <i class="fa-solid fa-pen"></i>
//             </div>
//           </div>
//         </div>
//         <div class="add-btn">
//           <i class="fa-solid fa-plus"></i>
//           <div>Add card</div>
//         </div>
//       </div>
//     </div>`;
// });

// const todoArray = ["Stuck", "Done"];

// todoArray.forEach((item) => {
//   boards.innerHTML += `<div class="board">
//             <div class="board-header">
//               ${item} <span class="count" id="todo-count">0</span>
//             </div>
//             <div class="cards" draggable="true"></div>
//             <div class="add-btn">
//               <i class="fa-solid fa-plus"></i>
//               <div>Add card</div>
//             </div>
//           </div>`;
// });

const backdrop = document.getElementById("backdrop");
const away = document.querySelectorAll(".away");
const addbtn = document.querySelectorAll(".add-btn");
const helpertext = document.querySelectorAll(".helper-text");
const modal = document.querySelectorAll(".modal");

addbtn.forEach((item) => {
  console.log(backdrop);
  item.addEventListener("click", () => {
    backdrop.style.display = "flex";
  });
});

away.forEach((element) => {
  element.addEventListener("click", () => {
    backdrop.style.display = "none";
  });
});

// title.addEventListener("click", () => {});

// submit.forEach((element) => {
//   element.addEventListener("click", () => {});
// });

const title = document.getElementById("title");
const description = document.getElementById("description");
const taskstatus = document.getElementById("status");
const priority = document.getElementById("priority");
const submit = document.getElementById("submit");

const check = {
  title: "",
  description: "",
  taskstatus: "",
  priority: "",
};

submit.addEventListener("click", (event) => {
  event.preventDefault();
  const todoMain = document.getElementById("todo");
  const inprogressMain = document.getElementById("inprogress");
  const stuckMain = document.getElementById("stuck");
  const doneMain = document.getElementById("done");

  (check.title = title.value),
    (check.description = description.value),
    (check.taskstatus = taskstatus.value),
    (check.priority = priority.value),
    console.log(check);

  const task = taskCreator(
    check.title,
    check.description,
    check.taskstatus,
    check.priority
  );

  switch (check.taskstatus) {
    case "todo":
      todoMain.innerHTML = todoMain.innerHTML + task;
      break;
    case "inprogress":
      inprogressMain.innerHTML = inprogressMain.innerHTML + task;
      break;
    case "stuck":
      stuckMain.innerHTML = stuckMain.innerHTML + task;
      break;
    case "done":
      doneMain.innerHTML = doneMain.innerHTML + task;
      break;
  }
});

const taskCreator = (title, description, taskstatus, priority) => {
  return `<div class="card" draggable="true">
                  <div class="done">
                    <i class="fa-solid fa-check"></i>
                  </div>
                  <div class="details">
                    <div>${title}</div>
                    <div>${description}</div>
                    <div class="priority">${priority}</div>
                  </div>
                  <div class="actions">
                    <div class="done">
                      <i class="fa-solid fa-x"></i>
                    </div>
                    <div class="done">
                      <i class="fa-solid fa-pen"></i>
                    </div>
                  </div>
                </div>`;
};
