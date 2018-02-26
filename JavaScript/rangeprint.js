function printRange(start, finish, change) {
    if (!finish) {
        console.log("Starting at 0. Setting endpoint as " + start + " and change as " + 1);
        finish = start;
        start = 0;
        change = 1;
    }
    if (!change || change <= 0) {
        console.log("Change value set to 1")
        change = 1;
    }
    if (start > finish) {
        while (start >= finish) {
            console.log(start);
            start -= change;
        }
    }
    else if (start === finish) {
        return "Error: start = finish."
    }
    else {
        while (start <= finish) {
            console.log(start); 
            start += change;
        }
    }
}