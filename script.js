const gamecells = document.querySelectorAll(".cell");
const player1 = document.querySelector(".player1");
const player2 = document.querySelector(".player2");
const restartBtn = document.querySelector(".restartBtn");
const allert=document.querySelector(".allert");
const container=document.querySelector(".container");
// variables
let currentplayer = 'X';
let nextplayer = 'O';
let playerturn = currentplayer;

// functioon to start game

// const startgame=()=>{
//     gamecells.forEach(cell=>{
//         cell.addEventListener('click',(e)=>{
//             console.log(e.target);
//         })
//     })
// }
// startgame();
//function to change player turn
function changeplayerturn() {
    if (playerturn === currentplayer) {
        playerturn = nextplayer;
    }
    else {
        playerturn = currentplayer;
    }

}
function solveclick(e) {
    if (e.target.textContent === "") {
        e.target.textContent = playerturn;
        if (checkwin()) {
            showalert( "player having symbol "+playerturn + " Won");
            isolatecells();
        }
        else if ( checktie()) {
            showalert("oops  its a Tie!");
            isolatecells();
        }
        changeplayerturn();
    }
}

function startgame() {
    for (var i = 0; i < gamecells.length; i++) {
        gamecells[i].addEventListener('click', solveclick);
    }
}
// calling start gsame function
 startgame();

// function to check win

function checkwin() {
    const winconditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (var j = 0; j < winconditions.length; j++) {
        var p1 = winconditions[j][0];
        var p2 = winconditions[j][1];
        var p3 = winconditions[j][2];
        if (gamecells[p1].textContent === gamecells[p2].textContent &&
            gamecells[p1].textContent !== "" &&
            gamecells[p2].textContent === gamecells[p3].textContent) {
            return true;
        }
    }
    return false;
}

//function to check tie
function checktie() {
    var emptycell = 0;
    for (var i = 0; i < gamecells.length; i++) {
        if (gamecells[i].textContent === "") {
            emptycell++;
        }
    }

if(emptycell===0 && !checkwin()){
    return true;
}
else{
    return false;
}

}
//  to disable cells after win or tie
function isolatecells(){
for(var k=0;k<gamecells.length;k++){
    gamecells[k].removeEventListener('click',solveclick);
    gamecells[k].classList.add("disable");

}
}
restartBtn.addEventListener('click',restartgame);
// function to restart game;
function restartgame(){
    for(var i=0;i<gamecells.length;i++){
        gamecells[i].textContent="";
        gamecells[i].classList.remove("disable");
    }
   startgame();
}
// timeout function
function func_timeout(){
   
    allert.style.display="none";

}
//function tto show alert
function showalert (message){

allert.style.display="block";
allert.textContent=message;
setTimeout(func_timeout,2000);



}