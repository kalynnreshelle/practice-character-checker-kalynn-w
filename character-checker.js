const readline= require('readline-sync');

let favoriteColor = readline.question("Enter your favorite color: ");
let selectedCharacter= readline.questionInt(" Choose any random character: ");

console.log(" You chose character: "+ favoriteColor[selectedCharacter]);
