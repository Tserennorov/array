const createPost = document.getElementById("createPost");
const modalContainer = document.getElementById("modalContainer");
const layer = document.getElementById("layer");
const modal = document.getElementsByClassName("modal")[0];
const submit = document.getElementById("submit");

createPost.addEventListener("click", () => {
  modalContainer.style.display = "flex";
});

layer.addEventListener("click", () => {
  console.log(layer);
  modalContainer.style.display = "none";
});

submit.addEventListener("click", () => {
  modalContainer.style.display = "none";
});
