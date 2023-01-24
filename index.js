//for clicking
var numOfDrumButtons = $(".drum").length;

for (var i = 0; i < numOfDrumButtons; i++) {
  $(".drum")[i].click(function() {
    var buttonInnerHTML = this.innerHTML;
    playSound(buttonInnerHTML);
    playAnimation(buttonInnerHTML);
  });
};

//for keyboard
$(document).keypress(function(event) {
  playSound(event.key);
  playAnimation(event.key);
});

function playSound(key) {
  switch (key) {
    case "w":
      var w_audio = new Audio("sounds/tom-1.mp3");
      w_audio.play();
      break;
    case "a":
      var a_audio = new Audio("sounds/tom-2.mp3");
      a_audio.play();
      break;
    case "s":
      var s_audio = new Audio("sounds/tom-3.mp3");
      s_audio.play();
      break;
    case "d":
      var d_audio = new Audio("sounds/tom-4.mp3");
      d_audio.play();
      break;
    case "j":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "k":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
    case "l":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    default: console.log(key);
  };
};

function playAnimation(keypressed) {
  var buttonPressed = $("." + keypressed);
  buttonPressed.addClass("pressed");
  setTimeout(function() {
    buttonPressed.removeClass("pressed");
  }, 100);
};
