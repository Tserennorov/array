const rednumber = document.getElementById("rednumber");
const reset = document.getElementById("reset");
const bluenumber = document.getElementById("bluenumber");
const redbox = document.getElementById("redbox");
const bluebox = document.getElementById("bluebox");
const winner = document.getElementById("winner");

redbox.addEventListener("click", () => {
  if (rednumber.innerText < 100) {
    bluenumber.innerText = Number(bluenumber.innerText) - 10;
    rednumber.innerText = Number(rednumber.innerText) + 10;
    redbox.style.width = `${rednumber.innerText}%`;
    bluebox.style.width = `${100 - rednumber.innerText}%`;
    if (rednumber.innerText == 100) {
      winner.innerText = "redwins";
    }
  }
});

bluebox.addEventListener("click", () => {
  if (bluenumber.innerText < 100) {
    rednumber.innerText = Number(rednumber.innerText) - 10;
    bluenumber.innerText = Number(bluenumber.innerText) + 10;
    bluebox.style.width = `${bluenumber.innerText}%`;
    redbox.style.width = `${100 - bluenumber.innerText}%`;
    if (bluenumber.innerText == 100) {
      winner.innerText = "bluewins";
    }
  }
});

reset.addEventListener("click", () => {
  rednumber.innerText = 50;
  bluenumber.innerText = 50;
  bluebox.style.width = "50%";
  redbox.style.width = "50%";
});

document.addEventListener("keyup", (event) => {
  if (event.key === "l") {
    if (bluenumber.innerText < 100) {
      rednumber.innerText = Number(rednumber.innerText) - 10;
      bluenumber.innerText = Number(bluenumber.innerText) + 10;
      bluebox.style.width = `${bluenumber.innerText}%`;
      redbox.style.width = `${100 - bluenumber.innerText}%`;
      if (bluenumber.innerText == 100) {
        winner.innerText = "bluewins";
      }
    }
  } else if (event.key === "a") {
    if (rednumber.innerText < 100) {
      bluenumber.innerText = Number(bluenumber.innerText) - 10;
      rednumber.innerText = Number(rednumber.innerText) + 10;
      redbox.style.width = `${rednumber.innerText}%`;
      bluebox.style.width = `${100 - rednumber.innerText}%`;
      if (rednumber.innerText == 100) {
        winner.innerText = "redwins";
      }
    }
  }
});
