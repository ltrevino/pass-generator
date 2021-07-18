// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;


}

//Generate secure password
function generatePassword(){

  //Global Variables
  var length;
  var upper;
  var lower;
  var numeric;
  var special;
  var alphabet='';
  var pass='';

  //Routines to define length and Alphabet
  defineLength();
  defineChars();

  //Define password length
  function defineLength(){

    //Iterates until the pass is between 8 and 128
    length = prompt("Introduce your password length between 8 and 128:");
    if (8 <= length && length<=128)
    {
      return;
    }
    else
    {
      defineLength();
    }

  }

  //Function to determine the Alphabet
  function defineChars(){
  
    //Prompts to let the user select the characters to be used
    lower = confirm("Would you like to include lowercase?");
    upper = confirm("Would you like to include upercase?");
    numeric = confirm("Would you like to include numeric?");
    special = confirm("Would you like to include special chars?");

    //Validates that at least 1 set of characters is selected
    if ( lower || upper || numeric || special ){
        return;
    }
    else
    {
      alert("At least 1 type must be selected!!!!")
      defineChars();
    }
  
  } 

  //Builds the alphabet based in the user selection
  if(numeric){
    alphabet="1234567890";
  }
  
  if(lower){
    alphabet+="abcdefghijklmnopqrstuvwxyz";
  }

  if(upper){
    alphabet+="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }

  if(special){
    alphabet+="!$%&/(#)=+-.*";
  }

  alphabet=alphabet.split('');

  //Randomize the characters and build the pass based on the user length selection.
  for (var x=0; x<length ; x++)
  {
    var random = Math.floor(Math.random() * alphabet.length);
    pass+=alphabet[random];

  }

  //Shows the results in an alert and in the html
  alert("This is your password: "+pass);
  return pass;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
