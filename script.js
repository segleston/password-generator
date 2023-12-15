// Array of special characters to be included in password
const specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
const numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
const lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
const upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// global character options
const charOptions = [];
const generatedPassword = "";
//generate password - concate each character

let passwordLength = 0 
// Function to prompt user for password options
function getPasswordOptions() {

  let pwLength = parseInt(prompt("How many characters would you like your password to be? (This needs to be between 8 and 128 characters)")) 
    if (pwLength < 8 || pwLength > 128) {
      alert("Invalid length, please choose between 8 and 128 characters long")
      return
    }

  let specialChar = confirm("Do you want special characters in your password?");
  let numChar = confirm

  let pwOptions = {
      length: pwLength;
      special:
      number:
      lower: 
      upper: 
  }

  return pwOptions

}

//prompt for password length
// 8 - 128 characters  -- selectedLength
// conditional to check if number is within range. 
// prompts store data as strong, parse to number
// if input out of range, return out of function or call again

//confirm which character sets to use. 
// if user answers false for all, return out of function or call again
// once they select a character set:
// generate a random character for each 
// push/concatanate selected characters to a new array of all selected characters 
// once character sets are selevted, move on to generate random characters



// Function for getting a random element from an array
function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
//variable for password
//variable for index 

//for loop selectedLength number of times
//generate random number - index for character in mega array
//mega-array[generated-index] is character, add this to password

//once we finishthe for loop, return password. 

// Function to generate password with user input
function generatePassword() {
  let options = getPasswordOptions()

  //array to store types of chars to include in password
  let possibleChar = []

  //array to contain each type of chosen char to ensure each will be used
  let guaranteedChar = []

  if (options.special) {
    possibleChar = possibleChar.concat(specialCharacters)
    guaranteedChar.push(getRandom(specialCharacters)) = 
  }

}

// Generate a password when the button is clicked
// Present a series of prompts for password criteria
// Length of password
// At least 8 characters but no more than 128.  -- selectedLength
// Character types
// Lowercase
// Uppercase
// Numeric
// Special characters ($@%&*, etc)
// Code should validate for each input and at least one character type should be selected
// Once prompts are answered then the password should be generated and displayed in an alert or written to the page



// Get references to the #generate element
const generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', getPasswordOptions);