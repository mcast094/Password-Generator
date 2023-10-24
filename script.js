// Assignment code here
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var specialChar = "~!@#$%&*";
var lengthOfPassword = 0;
var upperCaseAmount;
var passwordCreated = document.querySelector("#password");
function getLength() {
  // prompts user to input lenght
  lengthOfPassword = prompt("How long would you like your password to be");
  console.log(lengthOfPassword);
  if (lengthOfPassword < 8) {
    alert("please enter a longer password of minimun 8 characters");
    getLength();
  } else if (lengthOfPassword > 128) {
    alert("please choose a shorter password that is no more that 128 characters");
    getLength();
  } else {
    // alert("You will be prompted which type of characters you need for you password");
  }
  return lengthOfPassword;
}
// Determine the amount of upper case letters
function getUpperCase() {
  upperCaseAmount = prompt("How many uppercase letters would you like your password to have?");

}
function generatePassword() {
  if (lengthOfPassword === 0) {
    lengthOfPassword = getLength();
  }

  var confirmUpperCase = confirm("Would you like Uppercase Letters in your password");
  var confirmLowerCase = confirm("would you like lowercase letters in your password");
  var confirmCharacters = confirm("Would you like Special characters in your password");
  var confirmNumbers = confirm("Would you like numbers included in your password?");
  var finalPassword = "";
  var index = 0;
  if (confirmUpperCase === false && confirmLowerCase === false && confirmCharacters === false && confirmNumbers === false) {
    alert("Please enter at least one requirement to generate a password");
    // generatePassword();
    return finalPassword;
  } else {


    for (var i = 0; i < lengthOfPassword; i++) {
      if (confirmUpperCase && finalPassword.length < lengthOfPassword) {
        index = Math.random() * upperCase.length;
        index = Math.floor(index);
        finalPassword = finalPassword + upperCase[index];
      }
      if (confirmLowerCase && finalPassword.length < lengthOfPassword) {
        index = Math.random() * lowerCase.length;
        index = Math.floor(index);
        finalPassword = finalPassword + lowerCase[index];
      }
      if (confirmCharacters && finalPassword.length < lengthOfPassword) {
        index = Math.random() * specialChar.length;
        index = Math.floor(index);
        finalPassword = finalPassword + specialChar[index];
      }
      if (confirmNumbers && finalPassword.length < lengthOfPassword) {
        index = Math.random() * numbers.length;
        index = Math.floor(index);
        finalPassword = finalPassword + numbers[index];
      }
    }
    return finalPassword;
  }
  
}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
