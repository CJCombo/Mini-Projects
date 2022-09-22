//1
function createArray(num) {
    var arr = []
    for (var i = 1; i <= num; i++) {
        arr.push(i);
    }
    return arr;
}

//2
function evenOnly (num) {
    while (num <= 1000) {
        console.log (num)
    num = num + 2;
    }
}
evenOnly(2)

//3 Write a function that returns the sum of all the odd numbers from 1 to 5000. (e.g. 1+3+5+...+4997+4999).
function odd() {
    var sum = 0
    var num = 1
    while (num < 5000) {
        sum += num;
        num = num + 2;
    }
    return sum;
}
console.log (odd())

//4
function iterate(arr) {
    var sum = 0
    for (i = 0; i < arr.length; ++i) {
        sum += arr[i];
    }
    return sum;
}
console.log(iterate([1,4,6]))

//5
function arrMax(arr) {
    var max = arr[0];
    for (var i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
    max = arr[i];
    }
}
return max;
}
console.log (arrMax ([1,2,3,7,9]))

// 6
var arr = [5,5,5,5,5]

function printAverage(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++){
        sum += arr[i]
    }
    var avg = sum / arr.length;
    return avg;
}
var x = printAverage ([5,5,5,5,5])
console.log (x)

// 7

function odd(num) {
    var sum = [];
    while (num < 50) {
            sum.push(num)
        num = num + 2;
    }
    return sum;
}
console.log (odd(1))

//8
//Given value of Y, write a function that takes an array and returns the number of values
// that are greater than Y. For example if arr = [1, 3, 5, 7] and Y = 3, your function will
// return 2. (There are two values in the array greater than 3, which are 5, 7)

var y = 5

function Value(arr,y) {
    var sum = 0
    for (var i = 0; i < arr.length; i++){
        if (arr[i] > y) {
            sum += 1
        }
        else {continue}
}
return sum;
}
console.log(Value([1,3,5,7],y))

//Squares - Given an array with multiple values, write a function that replaces each value in the array with the value 
//squared by itself. (e.g. [1,5,10,-2] will become [1,25,100,4])

function Value(arr){
    for (var i = 0; i < arr.length; i++){
        arr[i] = arr[i] * arr[i]
    }
return arr;
}
console.log(Value ([1,5,10,2]))

//Given an array with multiple values, write a function that replaces any negative numbers within the array with the value of 0. When the program is done the array should contain no negative values. (e.g. [1,5,10,-2] will become [1,5,10,0])

function Value(arr){
    for ( var i = 0; i < arr.length; i++){
        if (arr[i] < 0) {
            arr[i]=0
        } 
    }
return arr;
}
console.log(Value([1,5,10,-2]))

//Given an array with multiple values, write a function that returns a new array that only contains the maximum, minimum, and average values of the original array. (e.g. [1,5,10,-2] will return [10,-2,3.5])

function Value(arr){
    var newArr = []
    var sum = 0
    var max = arr[0]
    var min = arr[0]
    var avg = 0
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
            }
        if (arr[i] < min) {
            min = arr[i];
            }
        sum += arr[i]
    }
    avg = sum / arr.length;
    return newArr = [min,max,avg];
}
console.log(Value([1,5,10,-2]))

//Write a function that will swap the first and last values of any given array. The default minimum length of the array is 2. (e.g. [1,5,10,-2] will become [-2,5,10,1]).

function Value (arr){
    var temp = arr[0] 
    arr[0] = arr[arr.length - 1]
    arr[arr.length - 1] = temp
}
var arr = [1,5,10,-2]
Value(arr)
console.log(arr)

//Write a function that takes an array of numbers and replaces any negative values within the array with the string 'Dojo'. For example if array = [-1,-3,2], your function will return ['Dojo','Dojo',2].

function Value (arr){
    for (var i = 0; i< arr.length; i++)
    if (arr[i] < 0) {
        arr[i] = "dojo"
    }
    return arr; 
}
console.log(Value([-1,-3,2]))