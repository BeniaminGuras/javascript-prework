function getMoveName(argMoveId) {
    console.log('wywołano funkcję getMoveName z argumentem: ' + argMoveId);
    if (argMoveId == 1) {
        return 'kamień';
    } else if (argMoveId == 2) {
        return 'papier';
    } else if (argMoveId == 3) {
        return 'nozyce';
    } else {

        printMessage('Nie znam ruchu o id ' + argMoveId + '. Zakładam, że chodziło o "kamień".');

        return 'kamień';

    }

}

function displayResult(argPlayerMove, argComputerMove) {

    console.log('wywołano funkcję displayResults z argumentami: ' + argPlayerMove + ', ' + argComputerMove);
    printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
    if (argPlayerMove == 'papier' && argComputerMove == 'kamień') {
        printMessage('Wygrywasz!');
        return true;
    } else if (argPlayerMove == 'kamień' && argComputerMove == 'nozyce') {
        printMessage('Wygrywasz!');
        return true;
    } else if (argPlayerMove == 'nozyce' && argComputerMove == 'papier') {
        printMessage('Wygrywasz!');
        return true;
    } else if (argPlayerMove == argComputerMove) {
        printMessage('Remis!');
        return null;
    } else {
        printMessage('Przegrywasz :(!');
        return false;
    }
}

function buttonClicked(argButtonName) {
    clearMessages();
    console.log(argButtonName + ' został kliknięty');
    const playerMove = argButtonName;
    console.log('ruch gracza to: ' + playerMove);
    const randomNumber = Math.floor(Math.random() * 3 + 1);
    console.log('wylosowana liczba to: ' + randomNumber);
    const computerMove = getMoveName(randomNumber);
    console.log('ruch komputera to: ' + computerMove);
    const result = displayResult(playerMove, computerMove);
    if (result == true) {
        playerPoints = playerPoints + 1;
    } else if (result == false) {
        computerPoints = computerPoints + 1;
    }
    printMessage(playerPoints + ":" + computerPoints);
}

const buttonRock = document.getElementById('button-rock');
buttonRock.addEventListener('click', function () { buttonClicked('kamień'); });
const buttonPaper = document.getElementById('button-paper');
buttonPaper.addEventListener('click', function () { buttonClicked('papier'); });
const buttonScissors = document.getElementById('button-scissors');
buttonScissors.addEventListener('click', function () { buttonClicked('nozyce'); });

let computerPoints = 0;
let playerPoints = 0;