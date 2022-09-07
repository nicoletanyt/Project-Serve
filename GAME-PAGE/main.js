const cityLayout = document.querySelector(".city-layout"); //grid of squares, aka the playfield
const usernameTag = document.querySelector(".username");

let username = localStorage.getItem("username");
usernameTag.innerHTML = "Hello " + username + "!";
let password = localStorage.getItem("password");
let favor = 0;
let roadLevel = 2;
let factoryLevel = 2;
let parkLevel = 2;

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
  new Question(
    "How many charging points will be available in Singapore by 2030?",
    "30000",
    "40000",
    "50000",
    "60000",
    4
  ),
  new Question(
    "What are NOT some efforts put in to encourage the transition to EVs?",
    "Reduced ERP charges on Electric vehicles from 2030",
    "Cleaner energy models for all new car and taxi registrations from 2030",
    "No new diesel car and taxi registrations from 2025",
    "EEAI (EV Early Adoption Incentive) subsidies",
    1
  ),
  new Question(
    "Who benefits from LTA's initiative, Green Man + ?",
    "Regular pedestrians",
    "Elderly",
    "Emergency workers",
    "Young children & Toddlers",
    2
  ),
  new Question(
    "What are some challenges in Transport planning?",
    "Land scarcity",
    "Topography issues",
    "Traffic conditions",
    "All of the above",
    4
  ),
  new Question(
    "How big will Singapore's rail network be by 2030?",
    "230km",
    "310km",
    "360km",
    "420km",
    3
  ),
  new Question(
    "What is Singapore's goal for transportation efficiency according to the LTA Master Plan 2040?",
    "30min city, 10 min towns",
    "40min city, 15 min towns",
    "35min city, 15 min towns",
    "45min city, 20 min towns",
    4
  ),
  new Question(
    "What are the benefits of using LEDs?",
    "No impact on the environment",
    "Flexible designs",
    "Low cost up-front",
    "All of the above",
    2
  ),
  new Question(
    "LED lights are more power efficient than...",
    "Fluorescent lamps",
    "Incandescent bulbs",
    "Halogen Light Bulbs",
    "All of the above",
    4
  ),
  new Question(
    "Conditions that affect solar panel efficiency",
    "Humidity",
    "Shade",
    "Temperature",
    "All of the above",
    4
  ),
  new Question(
    "How many households does Singapore plan on powering (per year)by 2030?",
    "300000",
    "350000",
    "400000",
    "530000",
    2
  ),
  new Question(
    "Recycling reduces...",
    "Water pollution",
    "Energy Usage",
    "Air pollution",
    "All of the above",
    4
  ),
  new Question(
    "According to Singapore's Zero Waste Masterplan, how much of an increase in overall recycling rate will there be by 2030?",
    "70%",
    "90%",
    "100%",
    "150%",
    1
  ),
  new Question(
    "Green roofs and walls DO NOT help...",
    "Regulate building internal temperature",
    "Decrease incidence of lightning strikes",
    "One's mental health",
    "Reduce carbon footprint",
    2
  ),
  //doing one question then so we need too add more elements we can add without having to add to the other ones and stuff
];

//level indicator
const levelIndicator = document.querySelector(".circle");
const levelProgressBar = document.querySelector(".level-progress");
let level = 1; //Note: FIREBASE STORAGE LATER
let levelProgress = 0;
levelIndicator.textContent = level;
levelProgressBar.style.width = levelProgress + "%";

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
  new Command("/1", "Choose Option 1"),
  new Command("/2", "Choose Option 2"),
  new Command("/3", "Choose Option 3"),
  new Command("/4", "Choose Option 4"),

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
      terminalResultsCont.append("-How do I put this in simple terms...-");
      for (let i = 0; i < arrayOfCommands.length; i++) {
        let text = document.createElement("p");
        text.textContent =
          arrayOfCommands[i].commandName + ": " + arrayOfCommands[i].action;
        terminalResultsCont.append(text);
      }
      terminalResultsCont.append(
        "-Sound difficult? Don't worry, you'll be fine. Try starting off with /question...-"
      );
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

      if (favor > 0) {
        switch (roadLevel) {
          case 2:
            imageOverlay.src = "/DEVELOPMENT-PROJ-SERVE/DEV-ROAD-1.png";
            terminalResultsCont.append(
              "-After all you did, they added... bicycles! That's great. Seriously though, bike sharing would help carbon emissions. I mean, its better than cars really.-"
            );
            break;
          case 3:
            imageOverlay.src = "/DEVELOPMENT-PROJ-SERVE/DEV-ROAD-2.png";
            let dumbText = document.createElement("p");
            dumbText.textContent =
              " -Ah nice, race flag banners. Should improve congestio-";
            terminalResultsCont.append(dumbText);
            let nerdText = document.createElement("p");
            nerdText.textContent =
              " Those are Electronic Road Pricing gantries.  ERP gantries erected at key positions charge motorists for utilising certain roads at times when these roads are more prone to congestion. Those who travel on ERP roads enjoy smoother journeys and reach their destinations in a shorter time. ERP rates are determined based on traffic conditions.";
            terminalResultsCont.append(nerdText);

            let scoffText = document.createElement("p");
            scoffText.textContent = " scoffs* -Nerd.-";
            terminalResultsCont.append(scoffText);
            break;
          case 4:
            imageOverlay.src = "/DEVELOPMENT-PROJ-SERVE/DEV-ROAD-2.png";
            break;
        }
        favor = favor - 1;
        roadLevel += 1;
        cityLayout.appendChild(imageOverlay);
        imageOverlay.classList.add("overlay-image");
      }
      break;
    case "/develop /factory":
      let imageOverlay1 = document.createElement("img");

      if (favor > 0) {
        switch (factoryLevel) {
          case 2:
            imageOverlay1.src = "/DEVELOPMENT-PROJ-SERVE/DEV-FACTORY-1.png";
            break;
          case 3:
            imageOverlay1.src = "/DEVELOPMENT-PROJ-SERVE/DEV-FACTORY-2.png";
            break;
          case 4:
            imageOverlay1.src = "/DEVELOPMENT-PROJ-SERVE/DEV-FACTORY-2.png";
            break;
        }
        favor -= 1;
        factoryLevel += 1;
        cityLayout.appendChild(imageOverlay1);
        imageOverlay1.classList.add("overlay-image");
      }
      break;
    case "/develop /park":
      let imageOverlay2 = document.createElement("img");
      if (favor > 0 && level % 3 == 0) {
        switch (parkLevel) {
          case 2:
            imageOverlay2.src = "/DEVELOPMENT-PROJ-SERVE/PARK-stage 1.png";
            break;
          case 3:
            imageOverlay2.src = "/DEVELOPMENT-PROJ-SERVE/PARK-stage 2.png";
            break;
          case 4:
            imageOverlay2.src = "/DEVELOPMENT-PROJ-SERVE/PARK-stage 3.png";
            break;
        }
        favor -= 1;
        parkLevel += 1;
        cityLayout.appendChild(imageOverlay2);
        imageOverlay2.classList.add("overlay-image");
      }
      break;
    case "/develop /offices":
      switch (level) {
        case 2:
          imageOverlay.src = "/DEVELOPMENT-PROJ-SERVE/DEV-OFFICES-1.png";
          break;
        case 3:
          imageOverlay.src = "/DEVELOPMENT-PROJ-SERVE/DEV-OFFICES-2.png";
          break;
        case 4:
          imageOverlay.src = "/DEVELOPMENT-PROJ-SERVE/DEV-OFFICES-2.png";
          break;
      }
      cityLayout.appendChild(imageOverlay);
      imageOverlay.classList.add("overlay-image");
      break;
    case "/develop /watersource":
      switch (level) {
        case 2:
          imageOverlay.src = "/DEVELOPMENT-PROJ-SERVE/DEV-COAST-1.png";
          break;
        case 3:
          imageOverlay.src = "/DEVELOPMENT-PROJ-SERVE/DEV-COAST-2.png";
          break;
        case 4:
          imageOverlay.src = "/DEVELOPMENT-PROJ-SERVE/DEV-COAST-2.png";
          break;
      }
      cityLayout.appendChild(imageOverlay);
      imageOverlay.classList.add("overlay-image");
      break;
    case "/develop /wasteland":
      switch (level) {
        case 2:
          imageOverlay.src = "/DEVELOPMENT-PROJ-SERVE/DEV-LANDFILL-1.png";
          break;
        case 3:
          imageOverlay.src = "/DEVELOPMENT-PROJ-SERVE/DEV-LANDFILL-2.png";
          break;
        case 4:
          imageOverlay.src = "/DEVELOPMENT-PROJ-SERVE/DEV-LANDFILL-2.png";
          break;
      }
      cityLayout.appendChild(imageOverlay);
      imageOverlay.classList.add("overlay-image");
      break;
    case "":
      break;
    default:
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
  terminalResultsCont.append(
    "-Ignore her, what we mean is *please use commands that exist.*-"
  );
}

function levelUp() {
  let levelText = document.createElement("p");
  levelText.textContent =
    "-Hey hey, guess who can now develop a little special something? You! Go on, type /develop /[grid] to develop one of the grids...-";
  terminalResultsCont.append(levelText);
}

function checkForCorrectAns(terminalInput, randomQn) {
  if (terminalInput == `/${arrayOfQuestions[randomQn].correctanswer}`) {
    //if user input correct answer

    let text = document.createElement("p");
    text.textContent = "Correct!";

    terminalResultsCont.append(text);

    if (level !== 12) {
      if (levelProgress > 75) {
        level += 1;
        favor += 1;
        levelUp();

        levelProgress = 0; //restart the bar
        // levelProgress = 100; //im sick of this
      } else {
        // levelProgress == 75 ? (levelProgress += 24) : (levelProgress += 25); //just for styling purposes so it looks good
        levelProgress == 75 ? (levelProgress += 99) : (levelProgress += 100); //im tired of having to put in questions
      }
    } else {
      level = 12; //max level
      levelProgress = 99; //to show that no longer can level up
    }
    levelIndicator.textContent = level;
    levelProgressBar.style.width = levelProgress + "%";
  } else {
    let text = document.createElement("p");
    text.textContent = "Incorrect. Try again with another question.";
    terminalResultsCont.append(text);
    terminalResultsCont.append("-Soz. Don't worry, happens with all... gods.-");

    //nothing happens if they get it wrong
  }
  window.isQuestionAnswered = true;
}
