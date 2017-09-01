//猜數字遊戲不需refresh

var secretNumber = 4;

// 1)ask User for guess
var stringGuess= prompt("Guess a number");
var guess=Number(stringGuess); 

/// 3) guessnumber!==secretNumber, show message
while(guess !== secretNumber){
   console.log("you got it wrong");
   // #otherwise.check if higher
   if(guess > secretNumber){
   alert("Too high. Guess agian");
   var stringGuess= prompt("Guess a number");
   var guess=Number(stringGuess); 
   }
   // #otherwise,check if lower 
   else{
   alert("Too low, guess again");
   var stringGuess= prompt("Guess a number");
   var guess=Number(stringGuess); 
   }
}
// 4)guessnumber===secretNumber
alert("you got it right");


/*
// 1) create a secretNumber
var secretNumber = 4;

// 2) ask User for guess
var stringGuess= prompt("Guess a number");
var guess=Number(stringGuess); 

// 3) check if guess is right
if(guess === secretNumber){
	alert("YOU GOT IT RIGHT!");
}

// 4)otherwise.check if higher
else if(guess > secretNumber){
	alert("Too high. Guess agian");
}
// 5)otherwise,check if lower 
else {
	alert("Too low, guess again");
}

/*
// 4) otherwiase, you get it wrong
else{
  alert("WRONG");
}
*/

/* 
因為guess 是文字資料型別;secretNumber是數字資料型別,所以下面兩者無法相等
需把guesse改寫成Number(guess)，下面寫法就算猜對數字，也跑不出you got it right
if(guess === secretNumber){
	alert("YOU GOT IT RIGHT!");
}
*/

