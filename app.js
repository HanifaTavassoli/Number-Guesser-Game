//GAME FUNCTION
/*
-Player must guess a number between a min and max
-player gets a certain amount of guesses
-Notify player of guesses remaining
-Notify the player of the correct answer if loose
-Let player choose to play again
*/

// Game values
   let min=1,
       max=10,
       winningNum=Math.round(Math.random()*10),
       guessesLeft=3;
       
// UI Elements
 const game = document.querySelector('#game'),
       minNum = document.querySelector('.min-num'),
       maxNum = document.querySelector('.max-num'),
       guessBtn = document.querySelector('#guess-btn'),
       guessInput = document.querySelector('#guess-input'),
       message = document.querySelector('.message');


// Assign UI min and max
minNum.textContent=min;
maxNum.textContent=max;

// play again
game.addEventListener('mousedown',function(e){
    if(e.target.className==='play-again'){
        window.location.reload();
    }
});
function submitting(event){
      if(event.keyCode==13){
        //   window.location.reload();
        document.getElementById('sub').submit();
      }
}
// Listen for guess
guessBtn.addEventListener('click', function(){
    document.querySelector('#guess-btn').style.outline='none';
    // console.log(guessInput.value);
    let guess=parseInt(guessInput.value);

    // validate 
    if(isNaN(guess) || guess<min || guess>max){
        setMessage(`please enter a number between ${min} and ${max}`,'red');

    }
    //check if won
    if(guess===winningNum){
        //Game over-lost

          gameOver(true,`${winningNum} is correct, YOU WIN! `);
    }else{
        // wrong number
        guessesLeft--;
        if(guessesLeft===0){
            //Game Over -lost

        gameOver(false,` Game Over, you lost. the correct number was ${winningNum} `);
        setMessage(` Game Over, you lost. the correct number was ${winningNum} `,'red');
        }else{
            // Game continues-answer wrong
           
             // change border color
        guessInput.style.border=' 1px solid red';
        guessInput.style.borderRadius='2px';
        
        //clear Input
        guessInput.value='';
            // tell user its wrong number
       setMessage( `${guess} is not correct, you have ${guessesLeft} round`,'red');
       document.getElementById('guess-input').focus();
        }
    
    }
});

// Game over
function gameOver(won,msg){
    let color;
    won=== true ? color='green': color='red';
          //Disable input
        guessInput.disabled=true;
        // change border color
        guessInput.style.border='1px solid';
        guessInput.style.borderColor=color;
        guessInput.style.border
        //set text color
        message.style.color=color;
        guessInput.style.borderRadius='2px';
        
        // set Message
        setMessage(msg);

        // play  again?
        guessBtn.value='play again';

        guessBtn.className += 'play-again';

}
// setMassage function
function setMessage(msg,color){
    message.textContent=msg;
    message.style.color=color;

}
function focusing(){
      document.getElementById('guess-input').focus();
}
