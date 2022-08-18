const grid = document.querySelector(".city-layout"); //grid of squares, aka the playfield

const width = 3;

for (let i = 0; i < width * width; i++) {
  let square = document.createElement("div");
  grid.append(square);
}

let username = localStorage.getItem("username");
let password = localStorage.getItem("password");

console.log("username: " + username);
console.log("password: " + password);
