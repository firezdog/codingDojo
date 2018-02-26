//Tedious bug: if it's 12:46 AM/PM you're told it's almost 13.

function tellTime(hour, minute, period) {
    var string = "It's";
    if (minute < 5) {
        string += " just after " + hour;
    }
    else if (minute < 30) {
        string += " " + minute + " minutes after " + hour;
    }
    else if (minute === 30) {
        string += " half past " + hour;
    }
    else if (minute < 45) {
        string += " " + minute + " minutes after " + hour;
    }
    else if (hour !== 12) {
        if (minute === 45) {
            string += " quarter 'til " + Number(hour+1);
        }
        else {
            string += " almost " + Number(hour+1);
        }
    }
    else {
        if (minute === 45) {
            string += " quarter 'til " + 1;
        }
        else {
            string += " almost " + 1;
        }
    }
    if (period === "AM") {
        if (hour < 6) {
            string += " in the early morning.";
        }
        else if (hour < 12) {
            string += " in the morning.";
        }
        else {
            if (minute < 45) {
                string += " midnight.";
            }
            else {
                string += " in the morning.";
            }
        }
    }
    if (period === "PM") {
        if (hour < 5) {
            string += " in the afternoon.";
        }
        else if (hour < 12) {
            string += " at night.";
        }
        else {
            if (minute < 45) {
                string += " noon.";
            }
            else {
                string += " in the afternoon.";
            }
        }
    }
    return string;
}