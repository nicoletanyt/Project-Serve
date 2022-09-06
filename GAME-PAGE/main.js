const cityLayout = document.querySelector(".city-layout"); //grid of squares, aka the playfield
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

//level indicator
const levelIndicator = document.querySelector(".circle");
const levelProgressBar = document.querySelector(".level-progress");
let level = 1; //Note: FIREBASE STORAGE LATER
let levelProgress = 0;
levelIndicator.textContent = level;
levelProgressBar.style.width = levelProgress + "%";

//questions
// let isQuestionAnswered = false;

//terminal
const terminalResultsCont = document.querySelector("#terminalResultsCont");
const terminalTextInput = document.querySelector("#terminalTextInput");
const terminalResultWrapper = document.querySelector(".terminalResultWrapper");
const sendBtn = document.querySelector("#sendBtn");
let terminalInput;
let option; //for displaying the options for the qn

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
      window.isQuestionAnswered = false;
      let text = document.createElement("p");
      let lineBreak = document.createElement("br");
      window.randomQn = Math.floor(Math.random() * arrayOfQuestions.length);
      //display question
      text.textContent = `Question: ${
        arrayOfQuestions[window.randomQn].question
      }`;
      text.append(lineBreak);
      terminalResultsCont.append(text);

      //display options
      for (let i = 1; i < 5; i++) {
        let text = document.createElement("p");
        switch (i) {
          case 1:
            option = arrayOfQuestions[window.randomQn].option1;
            break;
          case 2:
            option = arrayOfQuestions[window.randomQn].option2;
            break;
          case 3:
            option = arrayOfQuestions[window.randomQn].option3;
            break;
          case 4:
            option = arrayOfQuestions[window.randomQn].option4;
            break;
        }
        text.textContent = `Option ${i}: ${option}`;
        text.append(lineBreak);
        terminalResultsCont.append(text);
      }
      break;
    case "/1":
      if (window.isQuestionAnswered == false)
        checkForCorrectAns(terminalInput, window.randomQn);
      else dontUnderstand();
      break;
    case "/2":
      if (window.isQuestionAnswered == false)
        checkForCorrectAns(terminalInput, window.randomQn);
      else dontUnderstand();
      break;
    case "/3":
      if (window.isQuestionAnswered == false)
        checkForCorrectAns(terminalInput, window.randomQn);
      else dontUnderstand();
      break;
    case "/4":
      if (window.isQuestionAnswered == false)
        checkForCorrectAns(terminalInput, window.randomQn);
      else dontUnderstand();
      break;
    case "/develop /road":
      let imageOverlay = document.createElement("img");
      switch (level) {
        case 1:
          imageOverlay.src = "";
      }
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
      dontUnderstand();
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

function dontUnderstand() {
  let notText = document.createElement("p");
  notText.textContent = "Unfortunately, I don't understand you.";
  terminalResultsCont.append(notText);
}

function checkForCorrectAns(terminalInput, randomQn, isQuestionAnswered) {
  if (terminalInput == `/${arrayOfQuestions[randomQn].correctanswer}`) {
    //if user input correct answer
    let text = document.createElement("p");
    text.textContent = "Correct!";
    terminalResultsCont.append(text);
    // terminalResultsCont.append(
    //   (document.createElement("p").textContent =
    //     "Type /develop /[grid] to develop one of the grids.")
    // );
    if (level !== 4) {
      if (levelProgress > 75) {
        level += 1;
        levelProgress = 0; //restart the bar
        let imageOverlay = document.createElement("img");
        switch (level) {
          case 2:
            imageOverlay.src = "/DEVELOPMENT-PROJ-SERVE/PARK-stage 1.png";
            break;
          case 3:
            imageOverlay.src = "/DEVELOPMENT-PROJ-SERVE/PARK-stage 2.png";
            break;
          case 4:
            imageOverlay.src = "/DEVELOPMENT-PROJ-SERVE/PARK-stage 3.png";
            break;
        }
        cityLayout.appendChild(imageOverlay);
        imageOverlay.classList.add("overlay-image");
      } else {
        levelProgress == 75 ? (levelProgress += 24) : (levelProgress += 25); //just for styling purposes so it looks good
      }
    } else {
      level = 4; //max level
      levelProgress = 99; //to show that no longer can level up
    }
    levelIndicator.textContent = level;
    levelProgressBar.style.width = levelProgress + "%";
  } else {
    let text = document.createElement("p");
    text.textContent = "Incorrect. Try again with another question.";
    terminalResultsCont.append(text);
    //nothing happens if they get it wrong
  }
  window.isQuestionAnswered = true;
}
