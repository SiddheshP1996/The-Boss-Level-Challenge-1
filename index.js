var randomNumber1 = Math.floor(Math.random() * 6) + 1; // 1-6 dice images
var randomNumber2 = Math.floor(Math.random() * 6) + 1; // 1-6 dice images

var randomDiceImage1 = "dice" + randomNumber1 + ".png"; // dice1.png - dice6.png
var randomDiceImage2 = "dice" + randomNumber2 + ".png"; // dice1.png - dice6.png

var randomImageSource1 = "images/" + randomDiceImage1; // images/dice1.png - images/dice6.png
var randomImageSource2 = "images/" + randomDiceImage2; // images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[0].setAttribute("src" , randomImageSource1);
var image2 = document.querySelectorAll("img")[1].setAttribute("src" , randomImageSource2);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML ="🚩Player 1 Wins";
}

else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML ="Player 2 Wins🚩";

}

else {
  document.querySelector("h1").innerHTML ="It's Draw😱";
}
