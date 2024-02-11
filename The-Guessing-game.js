const colors = require('colors')


const readline = require("readline");
// create an interface where we can talk to the user
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
secretNuumber();
function genNum(num1, num2){
    let ranNum = Math.floor(Math.random()*num2)+ num1;
    return ranNum
}


function secretNuumber(){
    rl.question("Ok.. So. Give me a Low number...? ", lowNum => {
        const lN = Number(lowNum)
        rl.question(`Well.. The secret number will be between ${lN} and...? `, highNum => {
            const hN = Number(highNum)
            const randNum = genNum(lN, hN)
            console.log(randNum);
            askGuess()
            function askGuess(){
                rl.question("Before we begin, How many guesses you want...? ", amount =>{
                    let _amount = Number(amount)
                    rl.question("Please enter your first guess...? ", guess1 => {
                        let guess = Number(guess1)
                        console.log(`you guessed ${guess}`.bgGreen);
                        // console.log(_amount);
                        checkGuess(guess, _amount, randNum)
                        return askGuess
                    })
                })

            }



        })
    })
    return secretNuumber
}

function checkGuess(num, count = 0, n){
    console.log(count);
    if(count === 1){
        console.log("Sorry the game is over and youy lost..");
        rl.close()
        return true
    }
    if(num > n){
        console.log("To High");
        rl.question("Whooo boy.. You're a bit oveer. Plesase, Guess again...", guess1 => {
            let guess = Number(guess1)
            console.log(`OK.. You guessed ${guess}, and that's`);
            checkGuess(guess, count-1, n)
        })
        return false
    }else if(num < n){
        console.log("To low");
        rl.question("You thinking to small.. Bring it up a bit...", guess2 => {
            let guessw = Number(guess2)
            console.log(`Alright, Let's see.. You guessed ${guessw}... which is`.red)
            checkGuess(guessw, count-1, n)
        })
        return false
    }else if(num === n){
        console.log("Correct");
        rl.close()
        return true
    };
return checkGuess
};
