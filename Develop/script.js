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
// var allOfIt = []


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
 var generateBtn = document.querySelector("#generate");

function generatePassword() { 
  console.log("It's here.")
  const uppercaseCheck = document.getElementById("uppercase").checked;
  const numbersCheck = document.getElementById("numbers").checked;
  const symbolsCheck = document.getElementById("symbols").checked;
  let allOfIt = []
  let password = ""
  
    if (uppercaseCheck) {
        allOfIt = [...allOfIt, ...hasUpperCaseLetters]
        console.log("did it work?", allOfIt)
      
    }
    if (numbersCheck) {
        allOfIt = [...allOfIt, ...hasNumbers]
        console.log("Still looking", allOfIt)
    }
    if (symbolsCheck) {
        allOfIt = [...allOfIt, ...hasSpecialSymbols]
        console.log("gibberish")
    }
    for (var i = 0; i <= numberRange; i++) {
    var randomNumber = Math.floor(Math.random() * numberRange.length);
    console.log("random number", randomNumber)
  }
}


// Write password to the #password input
function writePassword() {

}

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword()); 
  


//STRINGS and Arrays!!!!  That's what's going to make this thing work. 
// W3 schools tutorials.  Embrace the pain. 

