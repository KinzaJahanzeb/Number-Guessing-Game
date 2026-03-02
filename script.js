let randomNumber = Math.floor(Math.random()*100) + 1;
let attempts = 0;
let guessInput = document.getElementById("guess");
let checkBtn = document.getElementById("check");
let message = document.getElementById("message");
let attemptsText = document.getElementById("attempts");
let resetBtn = document.getElementById("reset");

checkBtn.addEventListener("click",function(){
    let userGuess = Number(guess.value);
    if(!userGuess||userGuess<1||userGuess>100){
        message.innerText = "Please enter a number between 1 and 100.";
        return;
    }
    attempts++;
    attemptsText.innerText = "Attempts: " + attempts;
    if(userGuess === randomNumber){
        message.innerText = "Correct! 🎉 You guessed it! ";
        message.style.color = "green";
    }
    else if(userGuess > randomNumber){
        message.innerText = "Too high!";
        message.style.color = "orange";
    }
    else{
        message.innerText = "Too low!"
        message.style.color= "orange";
    }

});
resetBtn.addEventListener("click", function(){
    randomNumber = Math.floor(Math.random() * 100)+1;
    attempts = 0;
    attemptsText.innerText = "Attempts: 0";
    message.innerText = "";
    guessInput.value = "";
});