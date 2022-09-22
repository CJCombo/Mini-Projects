for(var num = 1; num < 20; num+=2) {
    console.log(num)
}


var myArray = [1,2,3,4,5]
var sum = 0
for (var i = 0; i < myArray.length; i++) {
    sum = myArray[i] + sum

    console.log ("value:" + myArray[i] + "sum" + sum)
}