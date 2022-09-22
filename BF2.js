//Given an array, write a function that changes all positive numbers in the array to the string "big".  Example: makeItBig([-1,3,5,-5]) returns that same array, changed to [-1, "big", "big", -5].

function Value (arr){
    for (var i = 0; i< arr.length; i++){
        if (arr[i] > 0) {
            arr[i] = "big"
        }
    }
    return arr; 
}
console.log(Value([-1,3,5,-5]))

//Create a function that takes in an array of numbers.  The function should print the lowest value in the array, and return the highest value in the array.

function Value(arr) {
    var min = arr[0]
    var max = arr[0]
    for (var i = 0; i < arr.length; i++){
        if (arr[i] < min) {
            min = arr[i];
            }
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    console.log(min)
    return max;
}
console.log(Value([1,10,5]))

//Build a function that takes in an array of numbers. The function should print the second-to-last value in the array, and return the first odd value in the array.

function Value(arr){
    console.log(arr[arr.length-2]);
    for (var i = 0; i < arr.length; i++){
        if (arr[i] % 2 !==0){
            return arr[i];
        }
    }
}
console.log(Value([1,2,5,6,8]))

//Given an array (similar to saying 'takes in an array'), create a function that returns a new array where each value in the original array has been doubled.  Calling double([1,2,3]) should return [2,4,6] without changing the original array.

function Value(arr){
    for (var i = 0; i < arr.length; i++){
        arr[i] = arr[i] * 2;
    }
return arr;
}
console.log(Value([1,2,3]))

//Given an array of numbers, create a function to replace the last value with the number of positive values found in the array.  Example, countPositives([-1,1,1,1]) changes the original array to [-1,1,1,3] and returns it.

function Value(arr){
    var sum = 0;
    for (var i = 0; i < arr.length; i++){
        if (arr[i] > 0){
            sum++;
        }
    }
    arr[arr.length-1] = sum;
    return arr;
}
console.log(Value([-1,1,1,1]));

//Create a function that accepts an array.  Every time that array has three odd values in a row, print "That's odd!".  Every time the array has three evens in a row, print "Even more so!".

function Value(arr) {
    var count1 = 0
    var count2 = 0
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 1) {
            count1 += 1;
            count2 = 0
            if (count1 == 3) {
                console.log("That's odd")
                count1 = 0
            }
        }
        else {
            count2 += 1;
            count1 = 0
            if (count2 == 3) {
                console.log("Even more so!")
                count2 = 0
            }
        }
    }
}
Value([1, 2, 3, 4, 5, 5, 5, 6, 7, 8, 8, 8, 9, 10])

//Given an array of numbers arr, add 1 to every other element, specifically those whose index is odd (arr[1], arr[3], arr[5], etc).  Afterward, console.log each array value and return arr.

function Value(arr){
    for (var i = 0; i < arr.length ; i++){
        if(i % 2 !==0){
            arr[i] = arr[i] + 1; 
        }
    }
    return arr;
}
console.log(Value([0,6,3,8,-4,-7]));

// You are passed an array (similar to saying 'takes in an array' or 'given an array') containing strings.  Working within that same array, replace each string with a number - the length of the string at the previous array index - and return the array.  For example, previousLengths(["hello", "dojo", "awesome"]) should return ["hello", 5, 4]. Hint: Can for loops only go forward?

function Value(arr){
    for (var i = arr.length - 1; i > 0; i--){
        arr[i] = arr[i-1].length;
    }
    return arr;
}
console.log(Value(["hello","dojo","awesome"]));

// Build a function that accepts an array. Return a new array with all the values of the original, but add 7 to each. Do not alter the original array.  Example, addSeven([1,2,3]) should return [8,9,10] in a new array.

function Value(arr){
    var newArr = [];
    for(var i = 0; i < arr.length; i++){
        arr[i]= arr[i] + 7
        newArr.push(arr[i]);
    }
    return newArr;
}
console.log(Value([1,2,3]));

//Given an array, write a function that reverses its values, in-place.  Example: reverse([3,1,6,4,2]) returns the same array, but now contains values reversed like so... [2,4,6,1,3].  Do this without creating an empty temporary array.  (Hint: you'll need to swap values).

function Value(arr){
    for (var i = 0; i < arr.length / 2 ; i++){
        var temp = arr[i];
        arr[i] =  arr[arr.length - 1 - i]; 
        arr[arr.length - 1 - i] = temp;
    }
    return arr;
}
console.log(Value([3,1,6,4,2]));

//Given an array, create and return a new one containing all the values of the original array, but make them all negative (not simply multiplied by -1). Given [1,-3,5], return [-1,-3,-5].

function Value(arr){
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            arr[i]= arr[i] * -1;
        } 
        newArr.push(arr[i]);
    }
    return newArr;
}
console.log(Value([1,-3,5]));

//Create a function that accepts an array, and prints "yummy" each time one of the values is equal to "food".  If no array values are "food", then print "I'm hungry" once.

function Value(arr){
    var sum = 0;
    for (var i = 0; i < arr.length; i++){
    if (arr[i] == "food"){
        console.log("yummy");
    }
    else{
        sum++
    }
    if(sum == arr.length){
        console.log("I'm hungry");
    }
}
}
console.log(Value([1,5,7]))
console.log(Value([1,"food", 1,"food"]))

//Given an array, swap the first and last values, third and third-to-last values, etc.  Example: swapTowardCenter([true,42,"Ada",2,"pizza"]) turns the array into ["pizza", 42, "Ada", 2, true].  swapTowardCenter([1,2,3,4,5,6]) turns the array into [6,2,4,3,5,1].  No need to return the array this time.

var array = [true,42,"Ada",2,"pizza"];
var nums = [1,2,3,4,5,6];
function Value(arr){
    var temp = arr[0]; 
    arr[0] = arr[arr.length-1];
    arr[arr.length-1] = temp;
    var temp2 = arr[2];
    arr[2] = arr[arr.length-3];
    arr[arr.length-3] = temp2;
    return arr;
}
console.log(Value(array));
console.log(Value(nums));

// Given an array arr and a number num, multiply all values in the array arr by the number num, and return the changed array arr.  For example, scaleArray([1,2,3], 3) should return [3,6,9].

function Value (arr,num){
    for (var i = 0; i < arr.length; i++){
    arr[i] = arr[i] * num;
    }
    return arr;
}
console.log(Value([1,2,3],3));