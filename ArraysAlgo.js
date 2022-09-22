var testArr = [6,3,5,1,2,4]
var sum = 0
for (var i = 0; i < testArr.length; i++) {
    sum = testArr[i] + sum

    console.log ("value:" + testArr[i] + "sum" + sum)
}

var testArr = [6,3,5,1,2,4]
var product = 0
for (var i = 0; i < testArr.length; i++) {
    product = testArr[i] * i;

    console.log (product)
}
