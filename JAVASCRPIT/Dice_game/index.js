// for left dice
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomeDiceImage1 = "dice"+ randomNumber1 +".png";
var randomImageSource1 = "images/" + randomeDiceImage1;
var imageLeft = document.querySelectorAll("img")[0];
imageLeft.setAttribute("src",randomImageSource1);



// for right dice
var randomNumber2 = Math.floor(Math.random() * 6) + 1
var randomeDiceImage2 = "dice"+ randomNumber2 +".png";
var randomImageSource2 = "images/" + randomeDiceImage2;
var imageRight = document.querySelectorAll("img")[1];
imageRight.setAttribute("src",randomImageSource2);

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").textContent = "🚩Player 1 wins!";
}else if (randomNumber1 < randomNumber2){
    document.querySelector("h1").textContent = "Player 2 wins!🚩";
}else{
    document.querySelector("h1").textContent = "draw";
}