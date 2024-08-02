const username = document.getElementById("username");
const password = document.getElementById("password");
const button = document.getElementById("login");

button.addEventListener("click", () => {
  if (!username.value || !password.value) {
    alert("fill the inputs");
    return;
  }

  const dbPassword = window.localStorage.getItem(username.value);

  if (!dbPassword) {
    alert("password or username wrong");
    return;
  }
  if (password.value == dbPassword) {
    alert("successfullly logged in");
  }
});
