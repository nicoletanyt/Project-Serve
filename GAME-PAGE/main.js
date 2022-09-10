//getting values from html
const cityLayout = document.querySelector(".city-layout"); //the playfield
const usernameTag = document.querySelector(".username");
const shopBtn = document.querySelector(".fa-shop");

//Get user information
let username = localStorage.getItem("username");
usernameTag.innerHTML = "Hello " + username + "!";
let level = Number(localStorage.getItem("level"));
let greenpoints = Number(localStorage.getItem("greenpoints"));
let favor = Number(localStorage.getItem("favor"));
let levelProgress = Number(localStorage.getItem("levelProgress"));
let blimpBought = localStorage.getItem("blimpBought");
let PineappleManBought = localStorage.getItem("PineappleManBought");

//Get building level information from user
let roadLevel = Number(localStorage.getItem("roadLevel"));
let factoryLevel = Number(localStorage.getItem("factoryLevel"));
let parkLevel = Number(localStorage.getItem("parkLevel"));
let officesLevel = Number(localStorage.getItem("officesLevel"));
let landfillLevel = Number(localStorage.getItem("landfillLevel"));
let coastLevel = Number(localStorage.getItem("coastLevel"));
let gasstationLevel = Number(localStorage.getItem("gasstationLevel"));
let watersourceLevel = Number(localStorage.getItem("watersourceLevel"));

function imageOverlay(imageSource, imageElement) {
  imageElement.src = imageSource; //source of image
  cityLayout.appendChild(imageElement);
  imageElement.classList.add("overlay-image");
}

//building if
let imageOverlay9 = document.createElement("img");
let imageOverlay8 = document.createElement("img");

if (blimpBought == "true") {
  //if blimp is bought
  imageOverlay(
    "/DEVELOPMENT-PROJ-SERVE/SHOP-BLIMP.png",
    document.createElement("img")
  );
}

if (PineappleManBought == "true") {
  //if pineapple man is bought
  imageOverlay(
    "/DEVELOPMENT-PROJ-SERVE/SHOP-PINEAPPLE-MAN.png",
    document.createElement("img")
  );
}

// imageOverlay(
//   "/DEVELOPMENT-PROJ-SERVE/DEV-ROAD-1.png",
//   document.createElement("img")
// );

if (roadLevel == 3) {
  imageOverlay9.src = "/DEVELOPMENT-PROJ-SERVE/DEV-ROAD-1.png";
  cityLayout.appendChild(imageOverlay9);
  imageOverlay9.classList.add("overlay-image");
} else if (roadLevel == 4) {
  imageOverlay9.src = "/DEVELOPMENT-PROJ-SERVE/DEV-ROAD-1.png";
  cityLayout.appendChild(imageOverlay9);
  imageOverlay9.classList.add("overlay-image");

  imageOverlay8.src = "/DEVELOPMENT-PROJ-SERVE/DEV-ROAD-2.png";
  cityLayout.appendChild(imageOverlay8);
  imageOverlay8.classList.add("overlay-image");
}

let imageOverlay90 = document.createElement("img");
let imageOverlay80 = document.createElement("img");

if (watersourceLevel == 3) {
  imageOverlay90.src = "/DEVELOPMENT-PROJ-SERVE/DEV-COAST-1.png";
  cityLayout.appendChild(imageOverlay90);
  imageOverlay90.classList.add("overlay-image");
} else if (watersourceLevel == 4) {
  imageOverlay90.src = "/DEVELOPMENT-PROJ-SERVE/DEV-COAST-1.png";
  cityLayout.appendChild(imageOverlay90);
  imageOverlay90.classList.add("overlay-image");

  imageOverlay80.src = "/DEVELOPMENT-PROJ-SERVE/DEV-COAST-2.png";
  cityLayout.appendChild(imageOverlay80);
  imageOverlay80.classList.add("overlay-image");
}

if (factoryLevel == 3) {
  imageOverlay(
    "/DEVELOPMENT-PROJ-SERVE/DEV-FACTORY-1.png",
    document.createElement("img")
  );
} else if (factoryLevel == 4) {
  imageOverlay(
    "/DEVELOPMENT-PROJ-SERVE/DEV-FACTORY-1.png",
    document.createElement("img")
  );
  imageOverlay(
    "/DEVELOPMENT-PROJ-SERVE/DEV-FACTORY-2.png",
    document.createElement("img")
  );
}

if (gasstationLevel == 3) {
  imageOverlay(
    "/DEVELOPMENT-PROJ-SERVE/DEV-GAS STATION-1.png",
    document.createElement("img")
  );
} else if (gasstationLevel == 4) {
  imageOverlay(
    "/DEVELOPMENT-PROJ-SERVE/DEV-GAS STATION-1.png",
    document.createElement("img")
  );
  imageOverlay(
    "/DEVELOPMENT-PROJ-SERVE/DEV-GAS STATION-2.png",
    document.createElement("img")
  );
}

if (landfillLevel == 3) {
  imageOverlay(
    "/DEVELOPMENT-PROJ-SERVE/DEV-LANDFILL-1.png",
    document.createElement("img")
  );
} else if (landfillLevel == 4) {
  imageOverlay(
    "/DEVELOPMENT-PROJ-SERVE/DEV-LANDFILL-1.png",
    document.createElement("img")
  );
  imageOverlay(
    "/DEVELOPMENT-PROJ-SERVE/DEV-LANDFILL-2.png",
    document.createElement("img")
  );
}

if (officesLevel == 3) {
  imageOverlay(
    "/DEVELOPMENT-PROJ-SERVE/DEV-OFFICES-1.png",
    document.createElement("img")
  );
} else if (officesLevel == 4) {
  imageOverlay(
    "/DEVELOPMENT-PROJ-SERVE/DEV-OFFICES-1.png",
    document.createElement("img")
  );
  imageOverlay(
    "/DEVELOPMENT-PROJ-SERVE/DEV-OFFICES-2.png",
    document.createElement("img")
  );
}

if (parkLevel == 3) {
  imageOverlay(
    "/DEVELOPMENT-PROJ-SERVE/PARK-stage 1.png",
    document.createElement("img")
  );
} else if (parkLevel == 4) {
  imageOverlay(
    "/DEVELOPMENT-PROJ-SERVE/PARK-stage 1.png",
    document.createElement("img")
  );
  imageOverlay(
    "/DEVELOPMENT-PROJ-SERVE/PARK-stage 2.png",
    document.createElement("img")
  );
} else if (parkLevel == 5) {
  imageOverlay(
    "/DEVELOPMENT-PROJ-SERVE/PARK-stage 1.png",
    document.createElement("img")
  );
  imageOverlay(
    "/DEVELOPMENT-PROJ-SERVE/PARK-stage 2.png",
    document.createElement("img")
  );
  imageOverlay(
    "/DEVELOPMENT-PROJ-SERVE/PARK-stage 3.png",
    document.createElement("img")
  );
}
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

function sayText(theTextContent) {
  let nameOfParagraph = document.createElement("p");
  nameOfParagraph.textContent = theTextContent;
  terminalResultsCont.append(nameOfParagraph);
}

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
];

//level indicator
const levelIndicator = document.querySelector(".circle");
const levelProgressBar = document.querySelector(".level-progress");
const levelGreenPointts = document.querySelector(".GPoint");
const levelFavour = document.querySelector(".favour");

levelFavour.textContent = "Sus Points: " + String(favor);
levelGreenPointts.textContent = "Leaf Stickers: " + String(greenpoints);

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
  // new Command(
  //   "/develop /park",
  //   "Develop the grid for the park (only available after you buy it in the store)"
  // ), //brought in shop so this shouldn't appear on default
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
            sayText(
              "POL: …Bicycles. This is..this is their next idea. We’ve given them so much criticism about their carbon footprint, and this is all they can think of? It’s the bare minimum! What happened to humans being innovative!—"
            );
            sayText(
              "CAS: Stop being so dramatic. You already knew this would be the next development; it’s in the Lore. Which, I’m going to assume, you have read? Even if you hadn’t, you’re still wasting far too much Dialogue on your reactions, when we should be explaining the developments…You’re glaring at me, but I haven’t said anything strange."
            );

            sayText(
              "POL: No, no, you’re right. Bicycle-sharing may be a simple method, but they’re efficient. I shouldn’t underestime the humans’ system of bicycle stations that users can check bicycles out of. They can ride their destination and park the bike in a nearby docking station. With bicycle-sharing, there will be less vehicles on the road, reducing carbon emissions and greenhouse gases in the air. There are many bikesharing services in Singapore, including Anywheel, SG Bike and HelloRide. …Good enough of an explanation for you?"
            );

            break;
          case 3:
            imageOverlay.src = "/DEVELOPMENT-PROJ-SERVE/DEV-ROAD-2.png";
            let dumbText = document.createElement("p");
            dumbText.textContent =
              "POL: Now this is a proper environmental measure! Nothing like those bicycles from before! The implementation of charges when drives travel on roads leading into the cities during peak hours; it preys on the humans’ weakness for money! Drivers are discouraged from using certain roads, especially during peak hours, because they don’t want to pay more during such hours. This diverts traffic, easing congestion in certain roads. Brutal genius.";
            terminalResultsCont.append(dumbText);
            let nerdText = document.createElement("p");
            nerdText.textContent =
              "CAS: The bicycles were fine, POL. Both work just the same in reducing the number of vehicles on the road. Then again, the bicycles are much more widespread. ERP gantries are more commonly found along central business districts such as Orchard Road and near retail shops such as the ION, Tangs, Wheelock Place and the Shaw Centre. ";
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
            break;
          case 3:
            imageOverlay1.src = "/DEVELOPMENT-PROJ-SERVE/DEV-FACTORY-2.png";

            sayText(
              "CAS: Solar panels are a rather helpful invention if you think about it. They’re genius, converting light energy from their Sun into electrical energy. You seem…upset by this Development. I thought you would’ve loved to see humans taking advantage of their natural phenomena to create a renewable source of energy."
            );
            sayText(
              "POL: Hm, just thinking. Why do they place it everywhere? I mean, what exactly do they hope to gain by putting such eyesores all over the place. There’s no point for them, anyways, not when there’s no Sun in here."
            );

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

            sayText(
              "POL: Again. Seriously. Solar panels, again…it’s always going to be solar panels, huh? Over, and over, and over, again! It’s never going to— haha— stop being solar panels—"
            );
            sayText(
              "CAS: POL? POL, you’re— are you Glitching? Hey! Hey, listen to me, stop! POL! FOr once, would you please just listen!"
            );
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
            sayText(
              "POL: 3 days? But that’s so short! User, is it really true that you can only survive without water for 3 days? What about your city, User? How can we possibly do anything within 3 days?! CAS, we need to get the humans hydrated right now!"
            );

            sayText(
              "CAS: Oh, stop panicking. They don’t need water, they’re Pixels. The Lore already prepared for that anyways. Look, the User implemented a rain collection system. This system takes advantage of the natural water cycle, allowing humans to collect water for their purposes later on. Of course, if they must drink the water, it has to go through a heavy filtering process first."
            );

            sayText(
              "POL: Are the tanks always at the beach? That’s rather impractical. If they really wanted to use natural cycles to their advantage, wouldn’t they be placing them everywhere? It rains pretty much everywhere, after all. User! You could collect all the water you need to sustain yourself for 3 days if you built collection tanks at your own house!"
            );

            break;
          case 3:
            imageOverlay4.src = "/DEVELOPMENT-PROJ-SERVE/DEV-COAST-2.png";

            sayText(
              "POL: Desalination. It’s a fairly similar concept to filtering. You can see that it’s placed right at the Coast in the Simulation. Humans are finally utilising this huge body of water, that’s right in front of them. Still, their main goal is to remove any impurities from the seawater, turning the seawater into fresh drinking water. Can’t they just drink their water straight from the source?"
            );
            sayText(
              "CAS: The Lore claims that the humans cannot survive such high amounts of salt. You already knew that, POL; I remember your experiements before the Simulation. Stop playing the fool when you are fully aware of the resourcesfulness and grit of the humans, much more than I am. The water undegoes reverse osmosis thanks to semipermeable membranes. Impurities like salt and dirt have large particles, so they are left behind as the water passes throigh these membranes."
            );

            break;
          case 4:
            imageOverlay4.src = "/DEVELOPMENT-PROJ-SERVE/DEV-COAST-2.png";

            sayText(
              "CAS: The Lore claims that the humans cannot survive such high amounts of salt. You already knew that, POL; I remember your experiements before the Simulation. Stop playing the fool when you are fully aware of the resourcesfulness and grit of the humans, much more than I am. The water undegoes reverse osmosis thanks to semipermeable membranes. Impurities like salt and dirt have large particles, so they are left behind as the water passes throigh these membranes."
            );

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
            sayText(
              "CAS: Ah, bins. A very minor change, and yet this would can have a rather large impact in the long-run. As long as they do it right, of course. If the materials they try to recycle are contaminated by food waste or human pieces, they can’t be used to recycle. However, if they ensure that everything they throw in these bins are not contaminated, they help preseve natural resources for longer, and reduce their carbon footprint."
            );
            sayText(
              "POL: The logic behind this Development is its convenciency, isn’t it? User, did you know that the reason why so many humans don’t recycle is because they find it tedious. They dislike the entire process, from cleaning trash to finding bins. Luckily, Divine Entities like us are much smarter, and we have allowed you to integrate a convenient Development! Now, the humans need barely any motivation! If they do, well, I would be honoured to provide some incentives for them."
            );

            break;
          case 3:
            imageOverlay5.src = "/DEVELOPMENT-PROJ-SERVE/DEV-LANDFILL-2.png";
            sayText(
              "CAS: Our Dialogue for this one is surprisingly excited, similar to the previous Landfill Development. It seems that we are supposed to be promoting the benefits of recycling to the User, but again, the Lore wants us to mention other things as well. "
            );

            sayText(
              "POL: Let me see, you know I don’t read that thing. Hm, a beloved robot on a space adventure…? A plant in a world covered in trash? Tsk, I knew this would be useless as always. This doesn’t mean anything, CAS! Do you really expect me to believe that humans have invented space travel? Look at the User’s city, do you see rocket scientists anywhere?"
            );

            sayText(
              "CAS: The Simulation is different from Reality. It’s possible the Lore is referring to creations on the User’s Platform. not ours. Surely someone there has created one of these recycling robots. The Flesh Entities certainly have a fascination for Artificial Intelligence, and the potential of these robots are incredible. Their Code makes them helpful, useful! They actually do important work in Reality!…Besides, separation is a crucial step in recycling."
            );

            sayText(
              "POL: …I agree, CAS. It’s better when materials that are too different are separated. Sometimes, Divine Entities have no busy interacting with Pixel Entities…or each other."
            );
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

            sayText(
              "CAS: It’s solar panels. POL, how is your Code right now? You seem better. Stable…The Glitches, are they…?"
            );
            sayText(
              "POL: Glitches? What are you talking about? Oh, stop worrying, CAS, I won’t just disappear so suddenly. Besides, our dear User needs us, isn’t that right? I’ll explain this one! Solar panels are a rather helpful invention if you think about it. They’re genius, converting light energy from their Sun into electrical energy. Did I say some part of the Dialogue wrong? Let me see, you know I don’t read that thing!"
            );

            sayText(
              "CAS: …I see. It just sounded familiar, what you said is all. Perhaps, I’ve been reading the Lore too often. It makes me feel like we’ve been here before…or that we will eventually. Whatever the case is, I’ll just wait for it."
            );
            sayText(
              "POL: …Seriously, you’re way too cryptid. User, you agree with me, right? CAS is sooo dramatic!"
            );

            sayText(
              "CAS: Hey! I’m not the one who Glitched away an entire bakery because their wedding bouquet had one less dahlia than planned. Get back here!"
            );

            sayText("POL: You’ll never take me alive! ");
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
  levelFavour.textContent = "Sus Points: " + String(favor);
  levelGreenPointts.textContent = "Leaf Stickers: " + String(greenpoints);

  localStorage.setItem("level", level);
  localStorage.setItem("greenpoints", greenpoints);
  console.log(localStorage.getItem("greenpoints"));
  localStorage.setItem("favor", favor);
  localStorage.setItem("levelProgress", levelProgress);
  //Building Variables
  localStorage.setItem("roadLevel", roadLevel);
  localStorage.setItem("factoryLevel", factoryLevel);
  localStorage.setItem("parkLevel", parkLevel);
  localStorage.setItem("officesLevel", officesLevel);
  localStorage.setItem("landfillLevel", landfillLevel);
  localStorage.setItem("coastLevel", coastLevel);
  localStorage.setItem("gasstationLevel", gasstationLevel);
  localStorage.setItem("watersourceLevel", watersourceLevel);
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
    "POL: Hey hey, guess who got enough Sus Points, and can now develop a little special something? You! Go on, type /develop /[grid] to develop one of the grids...";
  terminalResultsCont.append(levelText);
  reminderText.textContent = "CAS: Do /help if you forget the grid.";
  terminalResultsCont.append(reminderText);

  soniceText.textContent =
    "POL: Thats so nice of you CAS! If only you were this nice at my wedding!";
  terminalResultsCont.append(soniceText);

  bonusText.textContent =
    "POL: P.S, pretty sure you got more bonus Leaf Stickers.";
  terminalResultsCont.append(bonusText);
}

function checkForCorrectAns(terminalInput, randomQn) {
  if (terminalInput == `/${arrayOfQuestions[randomQn].correctanswer}`) {
    //if user input correct answer

    let text = document.createElement("p");
    text.textContent = "Correct!";
    terminalResultsCont.append(text);
    updateGreenpoints();
    if (level !== 12) {
      if (levelProgress > 50) {
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
        // levelProgress == 75 ? (levelProgress += 99) : (levelProgress += 100);
        levelProgress == 75 ? (levelProgress += 24) : (levelProgress += 25);
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

function updateGreenpoints() {
  greenpoints += 5;

  let wonText = document.createElement("p");
  wonText.textContent =
    "POL: You have 5 more Leaf Stickers now, isn't that great? Think of all the things you could buy in the store...";
  terminalResultsCont.append(wonText);
  // localStorage.setItem("greenpoints", greenpoints);
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

shopBtn.addEventListener("click", () => {
  updateValues();
  setTimeout(function () {
    window.location.href = "https://sus-city.github.io/SHOP-PAGE/shop.html";
    //127.0.0.1
  }, 1000);
});

//     case 2:
//       imageOverlay.src = "/DEVELOPMENT-PROJ-SERVE/DEV-ROAD-1.png";
//       imageOverlay.src = "/DEVELOPMENT-PROJ-SERVE/DEV-ROAD-2.png";

//       break;
//     case 3:
//       imageOverlay.src = "/DEVELOPMENT-PROJ-SERVE/DEV-ROAD-2.png";
//       let dumbText = document.createElement("p");
//       dumbText.textContent =
//         "POL: Now this is a proper environmental measure! Nothing like those bicycles from before! The implementation of charges when drives travel on roads leading into the cities during peak hours; it preys on the humans’ weakness for money! Drivers are discouraged from using certain roads, especially during peak hours, because they don’t want to pay more during such hours. This diverts traffic, easing congestion in certain roads. Brutal genius.";
//       terminalResultsCont.append(dumbText);
//       let nerdText = document.createElement("p");
//       nerdText.textContent =
//         "CAS: The bicycles were fine, POL. Both work just the same in reducing the number of vehicles on the road. Then again, the bicycles are much more widespread. ERP gantries are more commonly found along central business districts such as Orchard Road and near retail shops such as the ION, Tangs, Wheelock Place and the Shaw Centre. ";
//       terminalResultsCont.append(nerdText);

//       let scoffText = document.createElement("p");
//       scoffText.textContent = "POL: *scoffs* Nerd.";
//       terminalResultsCont.append(scoffText);
//       break;
//     case 4:
//       imageOverlay.src = "/DEVELOPMENT-PROJ-SERVE/DEV-ROAD-2.png";
//       break;
//   }
//   favor = favor - 1;
//   roadLevel += 1;
//   cityLayout.appendChild(imageOverlay);
//   imageOverlay.classList.add("overlay-image");
// } else if (roadLevel == 4) {
//   terminalResultsCont.append(noinnoText);
// } else {
//   terminalResultsCont.append(nofavorsText);
// }
