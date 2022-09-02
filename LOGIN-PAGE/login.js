const usernameButton = document.getElementById("username");
const passwordButton = document.getElementById("password");

let loginButton = document.getElementById("login");

let username;
let password;

loginButton.onclick = function () {
  username = usernameButton.value;
  password = passwordButton.value;

  localStorage.setItem("username", username);
  localStorage.setItem("password", password);
  //for the future people, if you want, make the page only redirect when the password met a certain criteria. i give up with it.
};
