function printMessage(msg){
	var div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}

function getMoveName(moveId){
    console.log("wywolano funkce getMoveName");
    if(moveId == 1){
        return 'kamień'
    } else if(moveId == 2) {
        return 'papier'
    } else if(moveId == 3) {
        return 'nozyce'
    }
}

function result(playerMove, computerMove){
    
    
    if(playerMove == "nozyce" && computerMove == "papier"){
        printMessage('Wygrywasz!');
        return true;
    } else if(playerMove == "papier" && computerMove == "kamień"){
        printMessage('Wygrywasz!');
        return true;
    } else if(playerMove == "kamień" && computerMove == "nozyce"){
        printMessage('Wygrywasz!');
        return true;
    } else if(playerMove == computerMove) {
        printMessage('Remis!');
    } else {
        printMessage('Przegrales')
        return false;
    }

}

var buttonTest, buttonRock, buttonPaper, buttonRazer, computerPoints, playerPoints;

buttonRock = document.getElementById('button-rock');
buttonPaper = document.getElementById('button-paper');
buttonScissors = document.getElementById('button-scissors');

function buttonClicked(argButtonName) {
    clearMessages();
    console.log(argButtonName + ' został kliknięty');

    var computerMove, playerMove, randomMove;
    
    randomMove = Math.floor(Math.random() * 3 + 1);
    console.log('Wylosowano liczbe ' + randomMove);
    computerMove = getMoveName(randomMove);

    playerMove = argButtonName;

    result(playerMove, computerMove);
}

buttonRock.addEventListener('click', function(){ buttonClicked('kamień'); });
buttonPaper.addEventListener('click', function(){ buttonClicked('papier'); });
buttonScissors.addEventListener('click', function(){ buttonClicked('nozyce'); });

computerPoints = 0;
playerPoints = 0; 

document.getElementById('points').innerHTML = "a";