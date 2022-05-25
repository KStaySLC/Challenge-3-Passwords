// These are for the slider function
var numberOfCharacter = document.getElementById("numberOfCharacters");
var numberRange = document.getElementById("numberRange");

//These are the definitions the function pulls its characters from. 
var upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var hasUpperCaseLetters = upperCaseLetters.split("");

var numbers = "1234567890";
var hasNumbers = numbers.split("");

var specialSymbols = "!@#$%^&*()[]{]<>?";
var hasSpecialSymbols = specialSymbols.split("");

var characterLength = "";
var allOfIt = []


// This connects the slider and the number selector together and allows the input to be pulled
//into the password construction.  FUNCTIONAL. 
numberOfCharacter.addEventListener('input', syncSlider);
numberRange.addEventListener('input', syncSlider);

function syncSlider(event) {
  var slider = event.target.value
  numberOfCharacter.value = slider
  numberRange.value = slider
 return slider
}

// var uppercase = document.querySelector("uppercase");
// uppercase.addEventListener('click', )


// Get references to the #generate element
 

function generatePassword(slider, hasSpecialSymbols) { 
  console.log("It's here.")
  var password = "";
  var randomString = "";
    if (hasSpecialSymbols) {
      randomString = 
      password = password + specialSymbols[Math.floor(Math.random() * specialSymbols.length)];
    }
    for (var i = 0; i <= slider; i++) {
    var randomNumber = Math.floor(Math.random() * slider.length);
    console.log("random number", randomNumber)
  }
}
generatePassword(variables)

// Write password to the #password input
function writePassword() {

}

// Add event listener to generate button
generateBtn.addEventListener("click", generate); 
  


//STRINGS and Arrays!!!!  That's what's going to make this thing work. 
// W3 schools tutorials.  Embrace the pain. 

