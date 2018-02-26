//Return a new array with only numbers.

function numbersOnly(arr) {
    var newArr = [];
    for (var i=0; i<arr.length; i++) {
        if (typeof arr[i] === "number") {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

//Remove non-numbers.

function removeNonNumbers(arr) {
    for (var i = 0; i<arr.length;i++) {
        if (typeof arr[i] !== "number") {
            arr.splice(i,1);
            i--;
        }
    }
    return arr;
}