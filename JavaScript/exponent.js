//Function calculates number*2^(times).

function exponent(number,times) {
    if (times === 0) {
        return 1;
    }
    else {
        while (times > 0) {
            number *= 2;
            times--;
        }
        return number;
    }
}

function infinityFinder() {
    var number = 1;
    times = 0;
    while (number < Infinity) {
        number *=2;
        times++;
    }
    return "Infinity is 2^" + times;
}