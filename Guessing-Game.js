const { resourceUsage } = require('node:process');
const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


// CODE FOR USER IMPUT
// rl.question('What do you think of Node.js? ', (answer) => {
//   // TODO: Log the answer in a database
//   console.log(`Thank you for your valuable feedback: ${answer}`);

//   rl.close();
// });



let generateNum = rl.question("Enter a max number: ", maxNum => {
    const maxiNum = Number(maxNum)
    rl.question("Now, enter a min number: ", minNum => {
        const mininum = Number(minNum)
        let randoNum = Math.floor(Math.random() * maxiNum) + mininum
            console.log(randoNum);
        rl.question(`I;m thinking of a number between ${maxiNum} and ${mininum}... Enter a guess: `, guess => {
            let userGuess = Number(guess)
            console.log(userGuess, randoNum);
            startGuessing(userGuess, randoNum)
        })
    })
})

return generateNum

function startGuessing(userGuess, randoNum, count = 14){
    console.log(userGuess, randoNum, count--);
    //WORKS: count === 11 ? console.log("recursive"): startGuessing(userGuess, randoNum, count-1)
    if(count === 0){
        rl.close();
        return "You Loose..."
    }else if(userGuess === randoNum){
        rl.close();
        return "You Win.."
    }else{
        function highLow(randoNum){
            if(nextGuess < randoNum){
                console.log("you're to Low");
                rl.question("Guess a little higher", nextGuess => {
                    count--
                    startGuessing(nextGuess, randoNum, count-1)
                })
            }else if(nextGuess > randoNum){
                console.log("You're to high");
                rl.question("Guess a little Lower", nextGuess => {
                    count--
                    startGuessing(nextGuess, randoNum, count-1)
                })
            }
        };
        return highLow
    }
};
