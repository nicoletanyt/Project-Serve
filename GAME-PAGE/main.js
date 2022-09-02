const grid = document.querySelector(".city-layout"); //grid of squares, aka the playfield
const usernameTag = document.querySelector(".username");

let username = localStorage.getItem("username");
usernameTag.innerHTML = "Hello " + username + "!";
let password = localStorage.getItem("password");

//firebase stuff
function startFirebase() {
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
}

//questions stuff
class Question {
  constructor(question, option1, option2, option3, option4, correctanswer) {
    this.question = question;
    this.option1 = option1;
    this.option2 = option2;
    this.option3 = option3;
    this.option4 = option4;
    this.correctanswer = correctanswer;
  }
}

const arrayOfQuestions = [
  //Questions
  new Question(
    "How do EVs reduce noise pollution?",
    "EVs lack internal combustion engines",
    "EVs travel at slower speeds",
    "EVs have sound dampeners",
    "EVs do not.",
    1
  ),
  new Question(
    "What component is not in an AV?",
    "Actuators",
    "Combustion Engines",
    "Sensors",
    "Semiconductors",
    2
  ), //oic aEEHEHAAHEHAEHAHEHAEH why are you running why are you running r u okah SAMIR YOU ARE BREAKING THE CAR
  new Question(
    "What is not one of the advantages of AVs?",
    "Decreased road accidents",
    "Lesser time spent travelling",
    "Lower cost to manufacture",
    "Reduced air pollution",
    3
  ),
  //doing one question then so we need too add more elements we can add without having to add to the other ones and stuff
];

//firebase

startFirebase();

//terminal
const terminalResultsCont = document.querySelector("#terminalResultsCont");
const terminalTextInput = document.querySelector("#terminalTextInput");
const terminalResultWrapper = document.querySelector(".terminalResultWrapper");
const sendBtn = document.querySelector("#sendBtn");
let terminalInput;
let randomQn = Math.floor(Math.random() * arrayOfQuestions.length);
let option; //for displaying the options for the qn

let level; //Note: FIREBASE STORAGE LATER

class Command {
  constructor(commandName, action) {
    this.commandName = commandName;
    this.action = action;
  }
}

const arrayOfCommands = [
  new Command("/help", "Display all the commands"),

  //Questions
  new Command("/question", "Toggle Questions"),
  new Command("/1", "Toggle Option 1"),
  new Command("/2", "Toggle Option 2"),
  new Command("/3", "Toggle Option 3"),
  new Command("/4", "Toggle Option 4"),

  //Developing areas
  new Command("/develop /road", "Develop road developments"),
  new Command("/develop /factory", "Develop the grid for the factory"),
  new Command("/develop /offices", "Develop the grid for the offices"),
  new Command("/develop /watersource", "Develop the grid for the water source"),
  new Command("/develop /wasteland", "Develop the grid for the wasteland"),
  new Command(
    "/develop /park",
    "Develop the grid for the park (only available after you buy it in the store)"
  ), //brought in shop so this shouldn't appear on default
];

function sendInput() {
  terminalInput = terminalTextInput.value;

  switch (terminalInput) {
    case "/help":
      //display all the commands
      for (let i = 0; i < arrayOfCommands.length; i++) {
        let text = document.createElement("p");
        text.textContent =
          arrayOfCommands[i].commandName + ": " + arrayOfCommands[i].action;
        terminalResultsCont.append(text);
      }
      break;
    case "/question":
      let text = document.createElement("p");
      let lineBreak = document.createElement("br");

      //display question
      text.textContent = `Question: ${arrayOfQuestions[1].question}`;
      console.log(arrayOfQuestions[1].question);
      text.append(lineBreak);
      terminalResultsCont.append(text);

      //display options
      for (let i = 1; i < 5; i++) {
        let text = document.createElement("p");
        switch (i) {
          case 1:
            option = arrayOfQuestions[randomQn].option1;
            break;
          case 2:
            option = arrayOfQuestions[randomQn].option2;
            break;
          case 3:
            option = arrayOfQuestions[randomQn].option3;
            break;
          case 4:
            option = arrayOfQuestions[randomQn].option4;
            break;
        }
        text.textContent = `Option ${i}: ${option}`;
        text.append(lineBreak);
        terminalResultsCont.append(text);
      }
      break;
    case "/1" || "/2" || "/3" || "/4":
      if (`/${arrayOfQuestions[randomQn].correctanswer}` == terminalInput) {
        //if user input correct answer
        let text = document.createElement("p");
        text.textContent = "Correct!";
        terminalResultsCont.append(text);
        terminalResultsCont.append(
          (document.createElement("p").textContent =
            "Type /develop /[grid] to develop one of the grids.")
        );
        //btw
      } else {
        let text = document.createElement("p");
        text.textContent = "Incorrect, try again.";
        terminalResultsCont.append(text);
        //nothing happens if they get it wrong
      }
      break;
    case "/develop /road":
      break;
    case "/develop /factory":
      break;
    case "/develop /park":
      break;
    case "/develop /offices":
      break;
    case "/develop /watersource":
      break;
    case "/develop /wasteland":
      break;
    case "":
      break;
    default: //it's called notText cuz this is being annoying yes
      let notText = document.createElement("p");
      notText.textContent = "Unfortunately, I don't understand you.";
      terminalResultsCont.append(notText);
      break;
  }
  terminalTextInput.value = "";
  terminalResultWrapper.scrollTop =
    terminalResultWrapper.scrollHeight - terminalResultWrapper.clientHeight;
}
sendBtn.addEventListener("click", sendInput);
document.addEventListener("keypress", function (e) {
  switch (e.key) {
    case "Enter":
      sendInput();
  }
});
