const readline = require("readline");
// create an interface where we can talk to the user
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

let secretNuumber = 23


function checkGuess(num, count = 0){
    console.log(count);
    if(count === 1){
        console.log("Sorry the game is over and youy lost..");
        rl.close()
        return true
    }
    if(num > secretNuumber){
        // console.log("To High");
        rl.question("Whooo boy.. You're a bit oveer. Plesase, Guess again...", guess1 => {
            let guess = Number(guess1)
            console.log(`OK.. You guessed ${guess}, and that's`);
            checkGuess(guess, count-1)
        })
        return false
    }else if(num < secretNuumber){
        // console.log("To low");
        rl.question("You thinking to small.. Bring it up a bit...", guess2 => {
            let guessw = Number(guess2)
            console.log(`Alright, Let's see.. You guessed ${guessw}... which is`)
            checkGuess(guessw, count-1)
        })
        return false
    }else if(num === secretNuumber){
        console.log("Correct");
        rl.close()
        return true
    };
    return checkGuess
};

askGuess()
function askGuess(){
    rl.question("Before we begin, How many guesses you want...? ", amount =>{
        let _amount = Number(amount)
        rl.question("Please enter your first guess...?", guess1 => {
            let guess = Number(guess1)
            console.log(`you guessed ${guess}`);
            // console.log(_amount);
            checkGuess(guess, _amount)
        })
    })
};
return askGuess
