let username = document.getElementById("username").value;
let password = document.getElementById("password").value;

let signup = document.getElementById("sign_up")

signup.onclick = function() {
  if (password.includes(Symbol) && password.includes(Number) && password>=6 && password<= 12) {
    alert("Passsaword works like shit man");
  }
}​;​
