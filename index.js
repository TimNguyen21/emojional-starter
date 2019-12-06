var happyButton = document.querySelector('.happy');
var sillyButton = document.querySelector('.silly');
var cryingButton = document.querySelector('.crying');
var messageBox = document.querySelector('.message');

happyButton.addEventListener('click', changeHappy);
sillyButton.addEventListener('click', changeSilly);
cryingButton.addEventListener('click', changeCrying);

var happyArray = ["You Go!", "Your smile just cheered me up!", "YAY!", "Good way to start the day!"];
var sillyArray = ["Interesting Response", "Sounds ... good?", "Me too.", "Let's get silly up in here!"];
var cryingArray = ["Do you want to talk?", "Keep your head up", "We can cry together!", "What can I do?"];

function changeHappy() {
  var rand = happyArray[Math.floor(Math.random() * happyArray.length)];
  messageBox.innerText = rand;
}

function changeSilly() {
  var rand = sillyArray[Math.floor(Math.random() * happyArray.length)];
  messageBox.innerText = rand;
}

function changeCrying() {
  var rand = cryingArray[Math.floor(Math.random() * happyArray.length)];
  messageBox.innerText = rand;
}
