'use strict'

let theirLanguage = getLanguage();

function getLanguage(){
    const userLanguage = prompt("What's your language?");
    return userLanguage;    
}

console.log(theirLanguage);

function greetUser(){
    while(theirLanguage == ""){
        theirLanguage = prompt("Please let me know what language to use!");
        console.log(theirLanguage.toUpperCase());
    }
}

function starWarsGamesChecker(){
    let message = "Welcome gamer! Are you ready?";
    alert(message);
    if (confirm("You love games?")) {
        document.write("Hello there. ");
    } else {
        document.write("Hello there. ");
    }    
    let usersGame = prompt("What's your favorite game?");
    if(usersGame == ""){
        usersGame = prompt("Really?");
    }
    console.log("We love " + usersGame + "! ");
    document.write("We love " + usersGame + "! ");
}

function guessGames(){
    let myNumber = 27;
    let usersGuess = prompt("On a scale of 20-27, how many Star Wars games should you try?");
    while (usersGuess != myNumber){
    usersGuess = prompt("Seriously?");
  }
  let gameMessage = "27!";
  alert(gameMessage);
}

function rateSite(){
    let userNum = prompt("How awesome is this experience on a scale of 1-3?");
    for(let i = 0; i < userNum; i++){
        document.write("<img src='https://wallpapers.com/images/hd/darth-revan-kotor-fan-art-rn5tt0xcn8qm0e7t.jpg' alt='Revan'/>");
}
}

starWarsGamesChecker();
guessGames();
rateSite();
