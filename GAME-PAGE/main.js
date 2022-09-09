const cityLayout = document.querySelector(".city-layout"); //grid of squares, aka the playfield
const usernameTag = document.querySelector(".username");

//Get user information
let username = localStorage.getItem("username");
usernameTag.innerHTML = "Hello " + username + "!";
let level = Number(localStorage.getItem("level"));
let greenpoints = Number(localStorage.getItem("greenpoints"));
let favor = Number(localStorage.getItem("favor"));
let levelProgress = Number(localStorage.getItem("levelProgress"));

// building levels
let roadLevel = 2;
let factoryLevel = 2;
let parkLevel = 2;
let officesLevel = 2;
let landfillLevel = 2;
let coastLevel = 2;
let gasstationLevel = 2;

//dialogue
let nofavorsText = document.createElement("p");
let noinnoText = document.createElement("p");
let eggText = document.createElement("p");
let egg2Text = document.createElement("p");
let egg3Text = document.createElement("p");

let parkinnoText = document.createElement("p");

let parkinno2Text = document.createElement("p");
let parkinno3Text = document.createElement("p");

let imageOverlay2 = document.createElement("img");
let imageOverlayed3 = document.createElement("img");
let imageOverlayed4 = document.createElement("img");

nofavorsText.textContent =
  "POL: The citizens ran out of motivation I guess. Time to answer... more questions.";

noinnoText.textContent =
  "POL: Ooh, sorry, it seems the citizens have ran out of innovation. Don't worry, you can develop another grid.";
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
  // new Question(
  //   "What component is not in an AV?",
  //   "Actuators",
  //   "Combustion Engines",
  //   "Sensors",
  //   "Semiconductors",
  //   2
  // ), //oic aEEHEHAAHEHAEHAHEHAEH why are you running why are you running r u okah SAMIR YOU ARE BREAKING THE CAR
  // new Question(
  //   "What is not one of the advantages of AVs?",
  //   "Decreased road accidents",
  //   "Lesser time spent travelling",
  //   "Lower cost to manufacture",
  //   "Reduced air pollution",
  //   3
  // ),
  // new Question(
  //   "How many charging points will be available in Singapore by 2030?",
  //   "30000",
  //   "40000",
  //   "50000",
  //   "60000",
  //   4
  // ),
  // new Question(
  //   "What are NOT some efforts put in to encourage the transition to EVs?",
  //   "Reduced ERP charges on Electric vehicles from 2030",
  //   "Cleaner energy models for all new car and taxi registrations from 2030",
  //   "No new diesel car and taxi registrations from 2025",
  //   "EEAI (EV Early Adoption Incentive) subsidies",
  //   1
  // ),
  // new Question(
  //   "Who benefits from LTA's initiative, Green Man + ?",
  //   "Regular pedestrians",
  //   "Elderly",
  //   "Emergency workers",
  //   "Young children & Toddlers",
  //   2
  // ),
  // new Question(
  //   "What are some challenges in Transport planning?",
  //   "Land scarcity",
  //   "Topography issues",
  //   "Traffic conditions",
  //   "All of the above",
  //   4
  // ),
  // new Question(
  //   "How big will Singapore's rail network be by 2030?",
  //   "230km",
  //   "310km",
  //   "360km",
  //   "420km",
  //   3
  // ),
  // new Question(
  //   "What is Singapore's goal for transportation efficiency according to the LTA Master Plan 2040?",
  //   "30min city, 10 min towns",
  //   "40min city, 15 min towns",
  //   "35min city, 15 min towns",
  //   "45min city, 20 min towns",
  //   4
  // ),
  // new Question(
  //   "What are the benefits of using LEDs?",
  //   "No impact on the environment",
  //   "Flexible designs",
  //   "Low cost up-front",
  //   "All of the above",
  //   2
  // ),
  // new Question(
  //   "LED lights are more power efficient than...",
  //   "Fluorescent lamps",
  //   "Incandescent bulbs",
  //   "Halogen Light Bulbs",
  //   "All of the above",
  //   4
  // ),
  // new Question(
  //   "Conditions that affect solar panel efficiency",
  //   "Humidity",
  //   "Shade",
  //   "Temperature",
  //   "All of the above",
  //   4
  // ),
  // new Question(
  //   "How many households does Singapore plan on powering (per year)by 2030?",
  //   "300000",
  //   "350000",
  //   "400000",
  //   "530000",
  //   2
  // ),
  // new Question(
  //   "Recycling reduces...",
  //   "Water pollution",
  //   "Energy Usage",
  //   "Air pollution",
  //   "All of the above",
  //   4
  // ),
  // new Question(
  //   "According to Singapore's Zero Waste Masterplan, how much of an increase in overall recycling rate will there be by 2030?",
  //   "70%",
  //   "90%",
  //   "100%",
  //   "150%",
  //   1
  // ),
  // new Question(
  //   "Green roofs and walls DO NOT help...",
  //   "Regulate building internal temperature",
  //   "Decrease incidence of lightning strikes",
  //   "One's mental health",
  //   "Reduce carbon footprint",
  //   2
  // ),
  //doing one question then so we need too add more elements we can add without having to add to the other ones and stuff
];

//level indicator
const levelIndicator = document.querySelector(".circle");
const levelProgressBar = document.querySelector(".level-progress");
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
  new Command("/develop /landfill", "Develop the grid for the landfill"),
  new Command("/develop /gasstation", "Develop the grid for the gas station"),
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
      let helpText = document.createElement("p");
      helpText.textContent =
        "POL: OK, its a lot. How do I put this in simple terms...";
      terminalResultsCont.append(helpText);

      for (let i = 0; i < arrayOfCommands.length; i++) {
        let text = document.createElement("p");
        text.textContent =
          arrayOfCommands[i].commandName + ": " + arrayOfCommands[i].action;
        terminalResultsCont.append(text);
      }

      let failText = document.createElement("p");
      failText.textContent =
        "POL: I failed, didn't I? Don't worry, you'll be fine. Uhhh, try starting off with /question.";
      terminalResultsCont.append(failText);
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

      if (favor > 0 && roadLevel != 4) {
        switch (roadLevel) {
          case 2:
            imageOverlay.src = "/DEVELOPMENT-PROJ-SERVE/DEV-ROAD-1.png";

            terminalResultsCont.append(
              "POL: After all you did, they added... bicycles! That's great. Seriously though, bike sharing would help carbon emissions. I mean, its better than cars really.-"
            );
            break;
          case 3:
            imageOverlay.src = "/DEVELOPMENT-PROJ-SERVE/DEV-ROAD-2.png";
            let dumbText = document.createElement("p");
            dumbText.textContent =
              "POL: Ah nice, race flag banners. Should improve congestio";
            terminalResultsCont.append(dumbText);
            let nerdText = document.createElement("p");
            nerdText.textContent =
              "CAS:  Those are Electronic Road Pricing gantries.  ERP gantries erected at key positions charge motorists for utilising certain roads at times when these roads are more prone to congestion. Those who travel on ERP roads enjoy smoother journeys and reach their destinations in a shorter time. ERP rates are determined based on traffic conditions.";
            terminalResultsCont.append(nerdText);

            let scoffText = document.createElement("p");
            scoffText.textContent = "POL: *scoffs* Nerd.";
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
      } else if (roadLevel == 4) {
        terminalResultsCont.append(noinnoText);
      } else {
        terminalResultsCont.append(nofavorsText);
      }
      break;
    case "/develop /factory":
      let imageOverlay1 = document.createElement("img");

      if (favor > 0 && factoryLevel != 4) {
        switch (factoryLevel) {
          case 2:
            imageOverlay1.src = "/DEVELOPMENT-PROJ-SERVE/DEV-FACTORY-1.png";
            let factory1Text = document.createElement("p");
            let factory2Text = document.createElement("p");
            let factory3Text = document.createElement("p");

            factory1Text.textContent =
              "POL: Oh, this is lovely! Irresponsible industrial manufacturing causes so much unecessary air pollution. Using recycled materials has definitely reduced the All those unwanted chemicals, gases and particles gone from the atmosphere! You’re doing so well, fighting against climate change-";
            terminalResultsCont.append(factory1Text);

            factory2Text.textContent =
              "CAS: Climate change doesn’t exist here. It does in Reality, where the User is. But we wouldn’t be affected even if that feature was added. Humans, on the other hand, suffer from respiriatory illnesses, eye irritation, lung damage, colds, coughs and breathing difficulties.";
            terminalResultsCont.append(factory2Text);

            factory3Text.textContent =
              "POL: So fragile! Length of exposure, amount and type of the pollutants varies, and each human is affected so differently…Humans face so many health risks. We must keep working to keep the city Sustainable, User. To the next question!";
            terminalResultsCont.append(factory3Text);
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
      } else if (factoryLevel == 4) {
        terminalResultsCont.append(noinnoText);
      } else {
        terminalResultsCont.append(nofavorsText);
      }

      break;

    case "/develop /offices":
      let imageOverlay3 = document.createElement("img");

      if (favor > 0 && officesLevel != 4) {
        switch (officesLevel) {
          case 2:
            imageOverlay3.src = "/DEVELOPMENT-PROJ-SERVE/DEV-OFFICES-1.png";

            let office1Text = document.createElement("p");
            let office2Text = document.createElement("p");
            let office3Text = document.createElement("p");
            let office4Text = document.createElement("p");

            office1Text.textContent =
              "CAS: This one is rather straightforward. Rooftop gardens provide space for agriculture, add aesthetic beauty to cityscapes and reduce ambient temperatures. Thanks to photosynthesis, there’s less cabron in the air but more oxygen. Humans work efficiently when provided with sufficient and quality air. In addition, it’s been proven that the presence of nature soothes humans. The Simulation really does enjoy running smoothly with all these simple but neat Developments.";
            terminalResultsCont.append(office1Text);

            office2Text.textContent =
              "POL: The National Parks Board has plans for something similar, though, with their OneMillionTrees movement. A million planted trees in Singapore by 2030, can you imagine? I mean, can humans even achieve something like that? They’re so weak by themselves!";
            terminalResultsCont.append(office2Text);

            office3Text.textContent =
              "CAS: It’s true that they’re nothing more than Flesh Beings by themselves, but together these Pixels create a whole city. Their collaboration with one another is key in accomplishing their Singapore Green Plan. That’s not relevant, though. the Lore doesn’t mention anything about the Singapore Green Plan so it likely won’t appear in the Simulation.";
            terminalResultsCont.append(office3Text);
            office4Text.textContent =
              "POL: And yet, we have Dialogue about it…But like you said, CAS, it’s irrelevant. Nothing more than my observations about the humans.";
            terminalResultsCont.append(office4Text);

            break;
          case 3:
            imageOverlay3.src = "/DEVELOPMENT-PROJ-SERVE/DEV-OFFICES-2.png";
            break;
          case 4:
            imageOverlay3.src = "/DEVELOPMENT-PROJ-SERVE/DEV-OFFICES-2.png";
            break;
        }
        favor -= 1;
        officesLevel += 1;
        cityLayout.appendChild(imageOverlay3);
        imageOverlay3.classList.add("overlay-image");
      } else if (officesLevel == 4) {
        terminalResultsCont.append(noinnoText);
      } else {
        terminalResultsCont.append(nofavorsText);
      }
      break;
    case "/develop /watersource":
      let imageOverlay4 = document.createElement("img");

      if (favor > 0 && coastLevel != 4) {
        switch (coastLevel) {
          case 2:
            imageOverlay4.src = "/DEVELOPMENT-PROJ-SERVE/DEV-COAST-1.png";
            break;
          case 3:
            imageOverlay4.src = "/DEVELOPMENT-PROJ-SERVE/DEV-COAST-2.png";
            break;
          case 4:
            imageOverlay4.src = "/DEVELOPMENT-PROJ-SERVE/DEV-COAST-2.png";
            break;
        }
        favor -= 1;
        coastLevel += 1;
        cityLayout.appendChild(imageOverlay4);
        imageOverlay4.classList.add("overlay-image");
      } else if (coastLevel == 4) {
        terminalResultsCont.append(noinnoText);
      } else {
        terminalResultsCont.append(nofavorsText);
      }
      break;
    case "/develop /landfill":
      let imageOverlay5 = document.createElement("img");

      if (favor > 0 && landfillLevel != 4) {
        switch (landfillLevel) {
          case 2:
            imageOverlay5.src = "/DEVELOPMENT-PROJ-SERVE/DEV-LANDFILL-1.png";
            break;
          case 3:
            imageOverlay5.src = "/DEVELOPMENT-PROJ-SERVE/DEV-LANDFILL-2.png";
            break;
          case 4:
            imageOverlay5.src = "/DEVELOPMENT-PROJ-SERVE/DEV-LANDFILL-2.png";
            break;
        }
        favor -= 1;
        landfillLevel += 1;
        cityLayout.appendChild(imageOverlay5);
        imageOverlay5.classList.add("overlay-image");
      } else if (landfillLevel == 4) {
        terminalResultsCont.append(noinnoText);
      } else {
        terminalResultsCont.append(nofavorsText);
      }
      break;
    case "/develop /gasstation":
      let imageOverlay6 = document.createElement("img");

      if (favor > 0 && gasstationLevel != 4) {
        switch (gasstationLevel) {
          case 2:
            imageOverlay6.src = "/DEVELOPMENT-PROJ-SERVE/DEV-GAS STATION-1.png";

            let gas1Text = document.createElement("p");
            let gas2Text = document.createElement("p");
            let gas3Text = document.createElement("p");

            gas1Text.textContent =
              "CAS: Electric vehicles are electrically charged at the charging station so they do not use petrol, reducing carbon emissions. The key to an electric future is batteries where the most energy is packed into the smallest one. It can be recharged again and again, making it the most sustainble option for storing power.";
            terminalResultsCont.append(gas1Text);

            gas2Text.textContent =
              "POL: I knew humans were innovative! A car that runs on such a tiny battery, and yet works just the same, if not better, than other cars. What’s next, a car that doesn’t even need humans to drive them?!";
            terminalResultsCont.append(gas2Text);

            gas3Text.textContent =
              "CAS: You would know, if you spent more time reading the Lore, instead of. The “innovation” of these methods doesn’t really matter anyways, most of the Dialogue ends the same: The reduced carbon emissions lead to reduced air pollution and reduced carbon footprint. Thus, the greenhouse effect is not enhanced. ";
            terminalResultsCont.append(gas3Text);

            break;

          case 3:
            imageOverlay6.src = "/DEVELOPMENT-PROJ-SERVE/DEV-GAS STATION-2.png";
            break;
          case 4:
            imageOverlay6.src = "/DEVELOPMENT-PROJ-SERVE/DEV-GAS STATION-2.png";
            break;
        }
        favor -= 1;
        gasstationLevel += 1;
        cityLayout.appendChild(imageOverlay6);
        imageOverlay6.classList.add("overlay-image");
      } else if (gasstationLevel == 4) {
        terminalResultsCont.append(noinnoText);
      } else {
        terminalResultsCont.append(nofavorsText);
      }
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
  updateValues();
}

sendBtn.addEventListener("click", sendInput);
document.addEventListener("keypress", function (e) {
  switch (e.key) {
    case "Enter":
      sendInput();
  }
});

function updateValues() {
  localStorage.setItem("level", level);
  localStorage.setItem("greenpoints", greenpoints);
  localStorage.setItem("favor", favor);
  localStorage.setItem("levelProgress", levelProgress);
}

function dontUnderstand() {
  let notText = document.createElement("p");
  notText.textContent = "CAS: Unfortunately, I don't understand you.";
  terminalResultsCont.append(notText);

  let ignoreText = document.createElement("p");
  ignoreText.textContent =
    "POL: Ignore her, what we mean is *please use commands that exist.*";
  terminalResultsCont.append(ignoreText);
  updateValues();
}

function levelUp() {
  let levelText = document.createElement("p");
  let reminderText = document.createElement("p");
  let soniceText = document.createElement("p");
  let bonusText = document.createElement("p");
  levelText.textContent =
    "POL: Hey hey, guess who can now develop a little special something? You! Go on, type /develop /[grid] to develop one of the grids...";
  terminalResultsCont.append(levelText);
  reminderText.textContent = "CAS: Do /help if you forget the grid.";
  terminalResultsCont.append(reminderText);

  soniceText.textContent =
    "POL: Thats so nice of you CAS! If only you were this nice at my wedding!";
  terminalResultsCont.append(soniceText);

  bonusText.textContent =
    "POL: P.S, pretty sure you got more bonus Green Points.";
  terminalResultsCont.append(bonusText);
}

function checkForCorrectAns(terminalInput, randomQn) {
  if (terminalInput == `/${arrayOfQuestions[randomQn].correctanswer}`) {
    //if user input correct answer

    let text = document.createElement("p");
    text.textContent = "Correct!";
    terminalResultsCont.append(text);
    Greenpoints();
    if (level !== 12) {
      if (levelProgress > 75) {
        level += 1;
        favor += 1;
        levelUp();
        greenpoints += roundNearest5(20 / level);

        if (level % 4 == 0) {
          switch (parkLevel) {
            case 2:
              imageOverlay2.src = "/DEVELOPMENT-PROJ-SERVE/PARK-stage 1.png";
              parkinnoText.textContent =
                "POL: It seems like... they have developed the park. By themselves.";
              terminalResultsCont.append(parkinnoText);
              break;
            case 3:
              imageOverlayed3.src = "/DEVELOPMENT-PROJ-SERVE/PARK-stage 2.png";
              parkinno2Text.textContent =
                "POL: It seems like... they have developed the park. By themselves. Again.";
              terminalResultsCont.append(parkinno2Text);
              break;
            case 4:
              imageOverlayed4.src = "/DEVELOPMENT-PROJ-SERVE/PARK-stage 3.png";
              parkinno3Text.textContent = "POL: Are those birds???";
              terminalResultsCont.append(parkinno3Text);
              break;
          }

          parkLevel += 1;
          cityLayout.appendChild(imageOverlay2);
          imageOverlay2.classList.add("overlay-image");
          cityLayout.appendChild(imageOverlayed3);
          imageOverlayed3.classList.add("overlay-image");
          cityLayout.appendChild(imageOverlayed4);
          imageOverlayed4.classList.add("overlay-image");
        } else {
        }

        levelProgress = 0;
      } else {
        levelProgress == 75 ? (levelProgress += 99) : (levelProgress += 100);
        // levelProgress == 75 ? (levelProgress += 24) : (levelProgress += 25);
      }
    } else {
      level = 12; //max level
      levelProgress = 99; //to show that no longer can level up
    }
    levelIndicator.textContent = level;
    levelProgressBar.style.width = levelProgress + "%";
  } else {
    let text = document.createElement("p");
    text.textContent = "CAS: Incorrect. Try again with another question.";
    terminalResultsCont.append(text);

    let sozText = document.createElement("p");
    sozText.textContent = "POL: Soz. Don't worry, happens with all... gods.";
    terminalResultsCont.append(sozText);
    //nothing happens if they get it wrong
  }
  window.isQuestionAnswered = true;
  updateValues();
}

function roundNearest5(num) {
  return Math.round(num / 5) * 5;
}

function Greenpoints() {
  greenpoints += 5;

  let wonText = document.createElement("p");

  wonText.textContent =
    "POL: You have 5 more GreenPoints now, isn't that great? Think of all the things you could buy in the store...";
  terminalResultsCont.append(wonText);
  localStorage.setItem("greenpoints", greenpoints);
  updateValues();
}

//Shows the text on login
if (levelProgress == 0 && level == 1) {
  eggText.textContent =
    "000: The Console bridges the gap between - due to - collapse in the ▯▯▯▯ - a Glitch, - filled in the ▯▯▯▯. but Lore has Meaning, has Purpose... the -";
  terminalResultsCont.append(eggText);
  egg2Text.textContent = "001: User is here.";
  terminalResultsCont.append(egg2Text);
  egg3Text.textContent = "POL: Ah, welcome User!";
  terminalResultsCont.append(egg3Text);
}
