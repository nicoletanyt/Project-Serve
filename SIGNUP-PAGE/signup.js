let username = document.getElementById("username").value;
let password = document.getElementById("password").value;

let signup = document.getElementById("sign_up")

signup.onclick = function() {
  if (password.includes(Symbol) && password.includes(Number) && password>=6 && password<= 12) {
    alert("Passsaword works like shit man");
  }
}​​

function start() {
  let playerId;
  let playerRef;

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      //you're logged in
      playerId = user.uid;
      playerRef = firebase.database().ref(`players/${playerId}`);
      playerRef.set({
        name: username,
        password: password,
        level: 3,
      });

      //remove from firebase when one's disconnected
      //playerRef.onDisconnect().remove();
    } else {
      //you're logged out
    }
  });

  firebase
    .auth()
    .signInAnonymously()
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode, errorMessage);
    });
}

start();