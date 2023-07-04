let fc=10
let sc=4
let sum=fc+sc
let hasBlackJack=false
let isAlive=true
let message=""
let messageEl=document.getElementById("message-el")

function startGame(){
    if(sum<=20){
        message="Do you want to draw a new card? "
    }else if(sum==21){
        message="You 've got BlackJack"
        hasBlackJack=true
    }else{
        message="You're out of the game! "
        isAlive=false
    }
    messageEl.textContent=message
}