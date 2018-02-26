function countDown(number) {
    while (number >= 0) {
        if (number >= 30) {
            console.log("T-" + number + ". Such a long time.");    
            number--; 
            continue;
        }
        else if (number >= 5) {
            console.log("T-" + number + ". It's coming...");
            number--;
            continue;
        }
        else if (number > 0) {
            console.log("T-" + number + ". ALMOST...");
            number--;
            continue;
        }
        else {
            console.log("Blastoff (time is relative).");
            break;
        }
    }
}