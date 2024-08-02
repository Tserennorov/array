const usernameInput = document.getElementById("usernameInput");
const passwordInputFirst = document.getElementById("passwordInputFirst");
const passwordInputSecond = document.getElementById("passwordInputSecond");
const registerButton = document.getElementById("register");

registerButton.addEventListener("click", () => {
  if (
    !usernameInput.value ||
    !passwordInputFirst.value ||
    !passwordInputSecond.value
  ) {
    alert("ali neg ni hooson baina");
    return;
  }
  if (passwordInputFirst.value != passwordInputSecond.value) {
    alert("hoyr password taarahgvi bna");
    return;
  }

  window.localStorage.setItem(usernameInput.value, passwordInputFirst.value);
  alert("success");
  window.location.href = "./login.html";
});
