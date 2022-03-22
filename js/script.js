function printMessage(msg){

    var div = document.createElement('div');

    div.innerHTML = msg;

    document.getElementById('messages').appendChild(div);

}

function clearMessages(){
    document.getElementById('messages').innerHTML = '';
}

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
printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
}

function buttonClicked(argButtonName) {
clearMessages();
console.log(argButtonName + ' został kliknięty');
playerMove = argButtonName;
console.log('wybór ruchu gracza to: ' + playerInput);
console.log('ruch gracza to: ' + playerMove);
randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('wylosowana liczba to: ' + randomNumber);
computerMove = getMoveName(randomNumber);
console.log('ruch komputera to: ' + computerMove);
result = displayResult(playerMove, computerMove);
if(result == true){
    playerPoints = playerPoints + 1;
} else if (result == false){
    computerPoints = computerPoints + 1; 
}
printMessage(playerPoints + ":" + computerPoints);
}

var argComputerMove, argMoveId, argPlayerMove, computerMove, playerInput, playerMove, randomNumber, buttonPaper, buttonRock, buttonScissors, computerPoints, playerPoints, result;
buttonRock = document.getElementById('button-rock');
buttonRock.addEventListener('click', function(){ buttonClicked('kamień'); });
buttonPaper = document.getElementById('button-paper');
buttonPaper.addEventListener('click', function(){ buttonClicked('papier'); });
buttonScissors = document.getElementById('button-scissors');
buttonScissors.addEventListener('click', function(){ buttonClicked('nozyce'); });

computerPoints = 0;
playerPoints = 0;