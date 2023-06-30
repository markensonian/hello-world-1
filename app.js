// Anatomy of a function
// Function declaration
// function nameOfFunction(parameters){
//    code to be executed; 
//    code to be executed;
// }

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
    let myNumber = 10;
    let usersGuess = prompt("How many Star Wars games do I have?");
    while (usersGuess != myNumber){
    usersGuess = prompt("Seriously?");
  }
  let gameMessage = "10!";
  alert(gameMessage);
}

function rateSite(){
    let userNum = prompt("How many stars is this experience 1-5?");
    for(let i = 0; i < userNum; i++){
        document.write("<img src='https://wallpapers.com/images/hd/darth-revan-kotor-fan-art-rn5tt0xcn8qm0e7t.jpg' alt='Revan'/>");
}
}

function birthYearChecker(){
    let age = prompt("What's your name?");
    if (birthyear > 1993) {
    document.write("Welome to heaven.");
    } else {
    window.location.href = "https://google.com";
}
}

starWarsGamesChecker();
guessGames();
rateSite();