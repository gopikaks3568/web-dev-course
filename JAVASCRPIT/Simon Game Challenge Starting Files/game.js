var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];

var started = false;

var level = 0;


$(document).keypress(function () {
  if (!started) {
    // Update the h1 text
    started = true;

    // Delay nextSequence() by 1000ms after the game starts
    setTimeout(function () {
      nextSequence();
    }, 1000);
  }
});


function nextSequence() {
  userClickedPattern = [];
  level += 1;

  $("h1").text("Level " + level); // Update the h1 text with the new level
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  console.log(gamePattern); // Debugging purpose to see the game pattern

  // Flash the chosen button
  $("#" + randomChosenColour)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);
  playSound(randomChosenColour);
}

// Handles the button press animation
function animatePress(currentColour) {
  $("#" + currentColour).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColour).removeClass("pressed");
  }, 100);
}

// Plays the corresponding sound
function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

// Handles the user's button click
$(".btn").click(function () {
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);

  
  checkAnswer(userClickedPattern[userClickedPattern.length - 1]);

  playSound(userChosenColour); // Play the sound for the button
  animatePress(userChosenColour); // Animate the button press
});

function checkAnswer(currentLevel) {
  // Check if the current user choice matches the corresponding item in gamePattern
  if (currentLevel === gamePattern[userClickedPattern.length - 1]) {
    console.log("success");

    // If the user has completed the current sequence
    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(function () {
        nextSequence(); // Move to the next sequence after a 1000ms delay
      }, 1000);
    }
  } else {
    console.log("wrong");
    // Display "Game Over" message

    $("h1").text("Game Over! Press Any Key to Restart");
    $("body").addClass("game-over");
    playSound("wrong");
    setTimeout( function(params) {
      $("body").removeClass("game-over");
    },200);
    startOver();
  }
}


function startOver() {
  level = 0;
  gamePattern = [];
  started = false;
}
