//Display username
const usernameTag = document.querySelector(".Username");
let username = localStorage.getItem("username");
usernameTag.textContent = "Hello " + username + "!";

//Cost of items
const costOfItems = [
  ["PineappleMan", 10],
  ["Blimp", 30],
];
//Getting the variables from LocalStorage
let blimpBought = localStorage.getItem("blimpBought");
let PineappleManBought = localStorage.getItem("PineappleManBought");
let greenpoints = Number(localStorage.getItem("greenpoints"));

//Get elements from HTML
const buyButtonPineappleMan = document.querySelector(".PineappleMan"); //buy button for pineapple man
const buyButtonBlimp = document.querySelector(".Blimp"); //buy button for blimp
const cartCont = document.querySelector(".cartCont");
const totalCost = document.querySelector(".total-cost");
const GPointLabel = document.querySelector(".GPoint");
const backBtn = document.querySelector(".fa-angle-left");
//Set greenpoint (or leaf sticker) levels
GPointLabel.textContent = "Leaf Stickers:  " + greenpoints;

buyButtonPineappleMan.addEventListener("click", handleBuyPineappleMan);

function handleBuyPineappleMan() {
  addToCart(buyButtonPineappleMan);
  PineappleManBought = "true";
  buyButtonPineappleMan.removeEventListener("click", handleBuyPineappleMan); //so that nothing will happen once this button is clicked
}

buyButtonBlimp.addEventListener("click", () => {
  addToCart(buyButtonBlimp);
  blimpBought = "true";
  buyButtonPineappleMan.removeEventListener("click", handleBuyPineappleMan); //so that nothing will happen once this button is clicked
});

function addToCart(btn) {
  for (let i = 0; i < costOfItems.length; i++) {
    //if this is the item that they are buying
    if (btn.classList.contains(costOfItems[i][0])) {
      if (greenpoints - costOfItems[i][1] >= 0) {
        //if the user has enough greenpoints to purchase the item
        greenpoints = greenpoints - costOfItems[i][1];
        alert("Item purchased successfully.");
        GPointLabel.textContent = "Green Points:  " + String(greenpoints); //update greenpoint label
        btn.textContent = "Bought";
        btn.style.backgroundColor = "red";
      } else {
        alert("You do not have enough greenpoints to purchase this item.");
      }
    }
  }
}

backBtn.addEventListener("click", () => {
  //update localStorage before leaving this page
  localStorage.setItem("greenpoints", greenpoints);
  localStorage.setItem("PineappleManBought", PineappleManBought);
  localStorage.setItem("blimpBought", blimpBought);
  setTimeout(function () {
    window.location.href = "https://sus-city.github.io/GAME-PAGE/main.html";
  }, 500);
});
