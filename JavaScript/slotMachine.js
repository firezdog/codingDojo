//User puts "quarters" into the "slot machine".  1/100 chance of winning, in which case a random number of quarters is added to input.  Slot machine runs until player wins or all quarters are gone.

function slotMachine(quarters, leave) {
    while (quarters > 0) {
        quarters--;
        var randomNumber = Math.floor(Math.random()*100);
        if (randomNumber === 0) {
            quarters += Math.floor(Math.random()*51) + 50;
            if (quarters >= leave) {
                return "You won! Total quarters: " + quarters;
            }
        }
    }
    return 0;
}