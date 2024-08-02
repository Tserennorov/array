const boardsContainer = document.getElementById("boards");
const statusContainer = document.getElementById("status");

const boards = [
  { id: "todo", title: "To do" },
  { id: "inProgress", title: "In progress" },
  { id: "stuck", title: "Stuck" },
  { id: "done", title: "Done" },
];

boards.forEach(({ id, title }) => {
  boardsContainer.innerHTML += ` <div class="board">
          <div class="header">
            <h3>${title}</h3>
            <p "counter-${id}">1</p>
          </div>
          <div class="tasks" id="${id}"></div>
          <button id="activeModal" onclick="activeModalTwo()"><span>+</span>Add card</button>
        </div>`;
  statusContainer.innerHTML += `<option value="${id}">${title}</option>`;
});

const priorities = [
  { title: "High", value: "high" },
  { title: "Medium", value: "medium" },
  { title: "Low", value: "low" },
];

const priorityContainer = document.getElementById("priority");

priorities.forEach(({ title, value }) => {
  priorityContainer.innerHTML += `<option value="${value}">${title}</option>`;
});

const modalContainer = document.getElementById("modalContainer");

const activeModalTwo = () => {
  modalContainer.style.display = "block";
};

const removeModal = () => {
  modalContainer.style.display = "none";
};
