var audio = new Audio('Main/MP3/Anthem.mp3');


// Anthem
function yes() {
  audio.play();
  no();
}

function no() {
  document.getElementById('popup').style.display = "none";
}


// Top buttons
function A() {
  document.getElementById('vid').style.display = "block";

}

function A2() {
  document.getElementById('vid').style.display = "none";
  document.getElementById('video');
  video.currentTime = 0;

}

function B() {
  document.getElementById('pete').style.display = "block";

}

function C() {

}
