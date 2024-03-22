var audio = new Audio('Main/MP3/Anthem.mp3');
var audio2 = new Audio('Main/MP3/Jumpscare.mp3');
let bruh;
bruh = 1;

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
  document.getElementById('pete').className = "gandhee";
  audio2.play();
  setTimeout(B2, 5500)
}

function B2() {
  window.location = "https://www.youtube.com/"
}

function C() {
if (bruh === 1) {
  document.getElementById('xd').style.fontFamily = "Krimis";
  bruh = 2
  }
  
else {
  document.getElementById('xd').style.fontFamily = "Olddd";
  bruh = 1
}
}
