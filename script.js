// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
var charset="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890~!@#$%^&*()_+"
var passwordLength=8 - 128;
var password="";
for(var i = 0; i <=passwordLength; i++){
    var randomnum = Math.floor(Math.random()*charset.length);
    password += charset.substring(randomnum, randomnum+1);

}
document.getElementById("input").value = password;
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
