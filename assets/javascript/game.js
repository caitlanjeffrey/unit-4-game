// reset game function
function resetGame() {
    // generate computerRandom number (19-120)
    computerRandomNumber = Math.floor((Math.random()* 120) + 1);

    // generate crystal random numbers (1 - 12)
    crystalOne = Math.floor((Math.random()* 12) + 1);
    crystalTwo = Math.floor((Math.random()* 12) + 1);
    crystalThree = Math.floor((Math.random()* 12) + 1);
    crystalFour = Math.floor((Math.random()* 12) + 1);

};

if (yourNewTotal === computerRandomNumber) {
    alert("You've Won!");
    win++;
    resetGame();
}
else if (yourNewTotal !== computerRandomNumber) {
    loss++;
    resetGame();
}