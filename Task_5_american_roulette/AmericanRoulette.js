var numbers = [
    { value: 0, colorUI: "green", type: "zero" },
    { value: 1, colorUI: "red", type: "odd" },
    { value: 2, colorUI: "black", type: "even" },
    { value: 3, colorUI: "red", type: "odd" },
    { value: 4, colorUI: "black", type: "even" },
    { value: 5, colorUI: "red", type: "odd" },
    { value: 6, colorUI: "black", type: "even" },
    { value: 7, colorUI: "red", type: "odd" },
    { value: 8, colorUI: "black", type: "even" },
    { value: 9, colorUI: "red", type: "odd" },
    { value: 10, colorUI: "black", type: "even" },
    { value: 11, colorUI: "black", type: "odd" },
    { value: 12, colorUI: "red", type: "even" },
    { value: 13, colorUI: "black", type: "odd" },
    { value: 14, colorUI: "red", type: "even" },
    { value: 15, colorUI: "black", type: "odd" },
    { value: 16, colorUI: "red", type: "even" },
    { value: 17, colorUI: "black", type: "odd" },
    { value: 18, colorUI: "red", type: "even" },
    { value: 19, colorUI: "red", type: "odd" },
    { value: 20, colorUI: "black", type: "even" },
    { value: 21, colorUI: "red", type: "odd" },
    { value: 22, colorUI: "black", type: "even" },
    { value: 23, colorUI: "red", type: "odd" },
    { value: 24, colorUI: "red", type: "odd" },
    { value: 26, colorUI: "black", type: "even" },
    { value: 27, colorUI: "red", type: "odd" },
    { value: 28, colorUI: "black", type: "even" },
    { value: 29, colorUI: "black", type: "odd" },
    { value: 30, colorUI: "red", type: "even" },
    { value: 31, colorUI: "black", type: "odd" },
    { value: 32, colorUI: "red", type: "even" },
    { value: 33, colorUI: "black", type: "odd" },
    { value: 34, colorUI: "red", type: "even" },
    { value: 35, colorUI: "black", type: "odd" },
    { value: 36, colorUI: "red", type: "even" }
];


//Run the game
runGame()

function runGame() {
    var currentBalance = prompt("How much money do you have $"); /let *позволяет объявить локальную переменную с областью видимости*/

    while (currentBalance > 0) {
        var bet = makeBet(currentBalance)

        var rouletteResult = rollRoulette()

        var isBetWon = isBetWon(bet, rouletteResult)

        if (isBetWon) {
            //adjusting balance
            switch (bet.type) { //depends on bet's type
                case betType.STRAIGHT:
                    currentBalance = currentBalance + bet.amount*35;
                    break;
                case betType.COLOR:
                    currentBalance = currentBalance + bet.amount*2;
                    break;
                case betType.EVENODD:
                    currentBalance == currentBalance + bet.amount*2;
                    break;
                case betType.DOZEN:
                    currentBalance = currentBalance + bet.amount*2;
                    break;
                case betType.COLUMN:
                    currentBalance == currentBalance + bet.amount*3;
                    break;
                case betType.ROW:
                    currentBalance == currentBalance + bet.amount*11;
                    break;
            }
        } else {
            currentBalance = currentBalance - bet.amount;
        }
    }
}

//make enum
const betType = {
    STRAIGHT: "straight" ,
    COLOR: "color",
    EVENODD: "EvenOdd",
    DOZEN: "dozen",
    COLUMN: "columns",
    ROW: "rows"
}; /* corner, etc*/


//FOR EACH BET TYPE
function isStraightValid(bet) {
    return bet.type == betType.STRAIGHT && bet.value >= 0 && bet.value <= 36
}

//FOR EACH BET TYPE
function isStraightWon(rouletteResult, bet) {
    return rouletteResult.value == bet.value
}

//FOR EACH BET TYPE
function isColorValid(bet) {
    return bet.type == betType.COLOR && (bet.value == "red" || bet.value == "black")
}

//FOR EACH BET TYPE
function isColorWon(rouletteResult, bet) {
    return rouletteResult.colorUI == bet.value
}

function isEvenOddValid(bet) {
    return bet.type == betType.EVENODD && (bet.value == "even" || bet.value == "odd")
}

//FOR EACH BET TYPE
function isEvenOddWon(rouletteResult, bet) {
    return rouletteResult.type == bet.value
}

function isDozenValid(bet) {
    return bet.type == betType.DOZEN && ((bet.value >0 &&  bet.value <=12) || (bet.value >12 && bet.value <=24) || (bet.value >=25 && bet.value <=36))
}

function isDozenWon(rouletteResult, bet) {
    return rouletteResult.value == bet.value



function isColumnValid(bet) {
    return bet.type == betType.COLUMN && (bet.value >= 1 && bet.value <= 3)

function isColumnWon(rouletteResult, bet) {
    return rouletteResult.value == bet.value ||
           (rouletteResult.value % 3 == 1) || (rouletteResult.value % 3 == 2) || (rouletteResult.value % 3 == 3)
}

function isRowValid(bet) {
    return bet.type == betType.ROW && ( (bet.value >= 1 && bet.value <= 3) || (bet.value >= 4 && bet.value <= 6) || (bet.value >= 7 && bet.value <= 9) ||
    (bet.value >= 10 && bet.value <= 12) || (bet.value >= 13 && bet.value <= 15) || (bet.value >= 16 && bet.value <= 18) ||
    (bet.value >= 19 && bet.value <= 21) || (bet.value >= 22 && bet.value <= 24) || (bet.value >= 25 && bet.value <= 27) ||
    (bet.value >= 28 && bet.value <= 30) || (bet.value >= 31 && bet.value <= 33) || (bet.value >= 34 && bet.value <= 36) )
}

function isRowWon(rouletteResult, bet) {
    return rouletteResult.value == bet.value
}
function makeBet(currentBalance) {
    //explain possible bets
    alert("Possible bets are straight ( 0-36 winning 35:1), color (red/black winning 1:1)")
    //ask amount, bet type, fact bet value
    var betType = prompt("input bet type")
    var betValue = prompt("input bet value")
    var betAmount = prompt("input bet Amount")
    var bet = {
        type: betType,
        value: betValue,
        amount: betAmount,
    }
    //validate made bet
    switch (bet.type) {
        case :
            isStraightValid();
        case :
            isColorValid();
        case :
            isEvenOddValid();
        case :
            isDozenValid();
        case :
            isColumnValid();
        case :
            isRowValid();
    default:
        return bet;
}

function rollRoulette() {
    // rolling roulette
    var index = Math.floor(Math.random()*37);
    var resultRoulette = numbers[index];
    return resultRoulette
}

function isBetWon(bet, rouletteResult) {
    //verify bet status
    isStraightWon()
    isColorWon()
    isEvenOddWon()
    isDozenWon()
    isColumnWon()
    isRowWon()
    return
}