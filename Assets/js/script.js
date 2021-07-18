// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;


}

function generatePassword(){

  var length;
  
  var upper;
  var lower;
  var numeric;
  var special;
  var alphabet='';
  var pass='';

  defineLength();
  defineChars();

  function defineLength(){

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

  function defineChars(){
  
    lower = confirm("Would you like to include lowercase?");
    upper = confirm("Would you like to include upercase?");
    numeric = confirm("Would you like to include numeric?");
    special = confirm("Would you like to include special chars?");

    if ( lower || upper || numeric || special ){
        return;
    }
    else
    {
      alert("At least 1 type must be selected!!!!")
      defineChars();
    }
  
  } 

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

  for (var x=0; x<length ; x++)
  {
    var random = Math.floor(Math.random() * alphabet.length);
    pass+=alphabet[random];

  }
  alert("This is your password: "+pass);
  return pass;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
