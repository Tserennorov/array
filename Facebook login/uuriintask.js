window.localStorage.setItem("email", "24LP1665@nest.edu.mn");
window.localStorage.setItem("password", "@Pi25880");

document.getElementById("login").addEventListener("click", (event) => {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const storedEmail = window.localStorage.getItem("email");
  const storedPassword = window.localStorage.getItem("password");
  const image = document.getElementById("image");

  console.log(storedEmail, storedPassword, email, password);

  if (email == storedEmail && password == storedPassword) {
    image.style.display = "block";
  }
});
