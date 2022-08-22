const grid = document.querySelector(".city-layout"); //grid of squares, aka the playfield
const usernameTag = document.querySelector(".username");

for (let i = 0; i < 6; i++) {
  let square = document.createElement("div");
  grid.append(square);
}

let username = localStorage.getItem("username");
usernameTag.innerHTML = "Hello " + username + "!";
