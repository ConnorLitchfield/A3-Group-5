// a key map of allowed keys
var allowedKeys = {
  37: 'left',
  38: 'up',
  39: 'right',
  40: 'down',
  65: 'a',
  66: 'b'
};

// the 'official' Konami Code sequence
var konamiCode = ['up', 'up', 'down', 'down', 'left', 'right', 'left', 'right', 'b', 'a'];

// a variable to remember the 'position' the user has reached so far.
var konamiCodePosition = 0;

// add keydown event listener
document.addEventListener('keydown', function(e) {
  // get the value of the key code from the key map
  var key = allowedKeys[e.keyCode];
  // get the value of the required key from the konami code
  var requiredKey = konamiCode[konamiCodePosition];

  // compare the key with the required key
  if (key == requiredKey) {

    // move to the next key in the konami code sequence
    konamiCodePosition++;

    // if the last key is reached, activate the cat
    if (konamiCodePosition == konamiCode.length) {
      activateCat();
      konamiCodePosition = 0;
    }
  } else {
    konamiCodePosition = 0;
  }
});

function activateCat() {
  alert("Release the CAT!!!!");
  var audio = new Audio('index_files/cat.mp3');
  audio.play();
  document.getElementById('cat').style.visibility="visible";
  setTimeout(function(){document.getElementById('cat').style.visibility="hidden";}, 11000);
}

//Code taken from and then modified. https://stackoverflow.com/questions/31626852/how-to-add-konami-code-in-a-website-based-on-html