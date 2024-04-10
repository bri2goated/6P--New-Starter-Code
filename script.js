// Game container
let game = document.querySelector(".game");
// 4 buttons
let buttonShow = document.querySelector(".show");
let buttonDouble = document.querySelector(".double");
let buttonShuffle = document.querySelector(".shuffle");
let buttonFlip = document.querySelector(".flip");
// Array containing image URLs
let cards = [
"https://cdn.glitch.global/63526844-33ee-4f88-8cca-81d00953972f/diego.jpeg?v=1710258756059",
"https://cdn.glitch.global/63526844-33ee-4f88-8cca-81d00953972f/Fidalg%20copy.jpg?v=1710258777163",
"https://cdn.glitch.global/63526844-33ee-4f88-8cca-81d00953972f/H.Martin%20copy.jpg?v=1710258789196",
"https://cdn.glitch.global/63526844-33ee-4f88-8cca-81d00953972f/J.Quinones%20copy.jpg?v=1710258798229",
"https://cdn.glitch.global/63526844-33ee-4f88-8cca-81d00953972f/Leo.Suarez%20copy.jpg?v=1710258819571",
"https://cdn.glitch.global/63526844-33ee-4f88-8cca-81d00953972f/k.alvarez.jpg?v=1710258828690",
"https://cdn.glitch.global/63526844-33ee-4f88-8cca-81d00953972f/CA2.jpg?v=1710258967284",
"https://cdn.glitch.global/63526844-33ee-4f88-8cca-81d00953972f/pelones.jpeg?v=1710259110068"


];

// Button to Show Deck
buttonShow.onclick = function() {
    // Log message
    console.log("Showing the deck...");
    // For of loop
    for (let card of cards) {
        game.insertAdjacentHTML("beforeend",
            "<div style='background-image: url(" +
            card +
            ")' class='card'>");
    }
};

// Button to Double Deck


// Button to Shuffle Cards


// Button to Flip All Cards


// Here we need a function for clicking on individual cards.
// (It won't work until we finish writing it.)
$(document).click(function(event) {
    // Get the id property of the clicked thing.
    let clickedId = event.target.id;
});