var numbers = [
    { value: 0, color: -1, colorUI: "green", type: "zero" },
    { value: 1, color: 0, colorUI: "red", type: "odd" },
    { value: 2, color: 1, colorUI: "black", type: "even" },
    { value: 3, color: 0, colorUI: "red", type: "odd" },
    { value: 4, color: 1, colorUI: "black", type: "even" },
    { value: 5, color: 0, colorUI: "red", type: "odd" },
    { value: 6, color: 1, colorUI: "black", type: "even" },
    { value: 7, color: 0, colorUI: "red", type: "odd" },
    { value: 8, color: 1, colorUI: "black", type: "even" },
    { value: 9, color: 0, colorUI: "red", type: "odd" },
    { value: 10, color: 1, colorUI: "black", type: "even" },
    { value: 11, color: 1, colorUI: "black", type: "odd" },
    { value: 12, color: 0, colorUI: "red", type: "even" },
    { value: 13, color: 1, colorUI: "black", type: "odd" },
    { value: 14, color: 0, colorUI: "red", type: "even" },
    { value: 15, color: 1, colorUI: "black", type: "odd" },
    { value: 16, color: 0, colorUI: "red", type: "even" },
    { value: 17, color: 1, colorUI: "black", type: "odd" },
    { value: 18, color: 0, colorUI: "red", type: "even" },
    { value: 19, color: 0, colorUI: "red", type: "odd" },
    { value: 20, color: 1, colorUI: "black", type: "even" },
    { value: 21, color: 0, colorUI: "red", type: "odd" },
    { value: 22, color: 1, colorUI: "black", type: "even" },
    { value: 23, color: 0, colorUI: "red", type: "odd" },
    { value: 24, color: 1, colorUI: "black", type: "even" },
    { value: 25, color: 0, colorUI: "red", type: "odd" },
    { value: 26, color: 1, colorUI: "black", type: "even" },
    { value: 27, color: 0, colorUI: "red", type: "odd" },
    { value: 28, color: 1, colorUI: "black", type: "even" },
    { value: 29, color: 1, colorUI: "black", type: "odd" },
    { value: 30, color: 0, colorUI: "red", type: "even" },
    { value: 31, color: 1, colorUI: "black", type: "odd" },
    { value: 32, color: 0, colorUI: "red", type: "even" },
    { value: 33, color: 1, colorUI: "black", type: "odd" },
    { value: 34, color: 0, colorUI: "red", type: "even" },
    { value: 35, color: 1, colorUI: "black", type: "odd" },
    { value: 36, color: 0, colorUI: "red", type: "even" }
];

let initialBalance = prompt("initial balance $:");
while (initialBalance > 0) {
    var moneyForBet = prompt("make a bet: amount $:");
    var betValue = prompt("enter the straight or enter skip for choosing the color: ");
    var betColor = prompt("enter the color or enter skip for choosing the even or odd: ");
    var betEvenOdd = prompt("enter the even or odd skip if u chose the straight/color: ");
    var index = Math.floor(Math.random()*37);
    var resultRoulette = numbers[index];
    if (resultRoulette.value == betValue) {
       initialBalance=initialBalance + moneyForBet*35;
       alert("0 Win " + resultRoulette.value + " " + resultRoulette.colorUI + " " + ", Your " + betValue + " win, " + "balance left: " + initialBalance);
    } else if (resultRoulette.value != betValue) {
        initialBalance=initialBalance-moneyForBet;
        alert("1 Win " + resultRoulette.value + " " + resultRoulette.colorUI + " " + ", Your " + betValue +  " " + "loss, " + "balance left: " + initialBalance);
    } else if (resultRoulette.colorUI == betColor) {
       initialBalance=initialBalance + moneyForBet*2;
       alert("2 Win " + resultRoulette.value + " " + resultRoulette.colorUI +  " "  +  ", Your " + betColor +  " win, " + "balance left: " + initialBalance);
    } else   if (resultRoulette.colorUI != betColor){
       initialBalance=initialBalance-moneyForBet;
       alert("3 Win " + resultRoulette.value + " " + resultRoulette.colorUI + ", Your " + betColor + " loss, " + "balance left: " + initialBalance);
    } else if (resultRoulette.type ==betEvenOdd) {
        initialBalance=initialBalance + moneyForBet*2;
        alert("4 Win " + resultRoulette.value + "" + resultRoulette.type +  ", Your " + betEvenOdd  + " win, " + "balance left: " + initialBalance);
    } else  if (resultRoulette.type !=betEvenOdd) {
        initialBalance=initialBalance - moneyForBet;
        alert("5 Win " + resultRoulette.value + "" + resultRoulette.type   + ", Your " +  betEvenOdd + " loss, " + "balance left: " + initialBalance);
    }
}

//Run the game
runGame()

function runGame() {
    let currentBalance = prompt("How much money do you have?");

    while (currentBalance > 0) {
        var bet = makeBet(currentBalance)

        //say bets maked...

        var rouletteResult = rollRoulette()

        var isBetWon = checkBet(bet, rouletteResult)

        //adjusting balance
        if (isBetWon) {

        } else {

        }
    }
}

//enum!!!!
var betTypes = [
    "strait",
    "split",
    "street",
    "corner",
    //etc
]

//FOR EACH BET TYPE
function isStraitValid(bet) {
    return boolean
}

//FOR EACH BET TYPE
function isStraitWon(rouletteResult, bet) {
    return boolean
}

function makeBet(currentBalance) {
    //explain possible bets
    alert()
    //ask amount, bet type, fact bet value
    var bet = {
        type: betType,
        value: betValue,
        amount: betAmount,
    }
    //validate made bet
    isStraitValid()

    return bet
}

function rollRoulette() {
    // rolling roulette

    return resultRoulette
}

function checkBet(bet, rouletteResult) {
    //verify bet status
    isStraitWon()

    return boolean
}



