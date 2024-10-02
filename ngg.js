let number = Math.floor(Math.random()*100)+1;
let running = true;
let guess;

while(running){
guess = window.prompt("Guess a number between 1 and 100: ");
guess = Number(guess);

if(guess < number){
  window.alert("TOO LOW! TRY AGAIN!");
}else if(guess>number){
    window.alert("TOO HIGH! TRY AGAIN!");
}else{
    window.alert(`CORRECT! OUR NUMBER WAS ${number}.`);
    running = false;
}

}