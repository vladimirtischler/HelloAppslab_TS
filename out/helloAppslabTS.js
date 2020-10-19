console.log(greeting("Hello appslab!"));
console.log(totalDistance(0.2, 0.4, 100));
console.log(equal(1, 3, 2));
console.log(triangle(20, 30, 20));
console.log(multiplyByLenght([10, 20, 30, 5]));
console.log(equalSlices(11, 5, 2));
console.log(palindrome("moml"));
console.log(numberMaxAndMin([2, -98, 7, 5, 3, 32, 22]));
console.log(warOfNumbers([5, 6, 5, 7]));
function greeting(a) {
    return a;
}
function totalDistance(heightOfStep, lenghtOfStep, towerHeight) {
    var sum = towerHeight / heightOfStep * (lenghtOfStep + heightOfStep);
    return sum;
}
function equal(a, b, c) {
    var value = 0;
    if (a == b && b == c)
        return value + 3;
    else if (b == c || a == c || a == b)
        return value + 2;
    else if (a != b && a != c)
        return value;
}
function triangle(a, b, c) {
    if (a + b > c && a + c > b && b + c > a)
        return true;
    else
        return false;
}
function multiplyByLenght(a) {
    for (var i = 0; i < a.length; i++) {
        a[i] = a[i] * a.length;
    }
    return a;
}
function equalSlices(totalSlices, recipients, slicesEach) {
    if (recipients * slicesEach <= totalSlices)
        return true;
    else
        return false;
}
function palindrome(word) {
    var reverseWord = "";
    for (var i = word.length - 1; i >= 0; i--) {
        reverseWord += word[i];
    }
    if (word == reverseWord)
        return true;
    else
        return false;
}
function numberMaxAndMin(numbers) {
    var sortNumbers = numbers.sort(function (a, b) { return a - b; });
    var minNumber = sortNumbers[0];
    var maxNumber = sortNumbers[numbers.length - 1];
    return "Min number:" + minNumber + ", max number:" + maxNumber;
}
function warOfNumbers(numbers) {
    var evenNumbers = 0;
    var oddNumbers = 0;
    for (var i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 == 0) {
            evenNumbers += numbers[i];
        }
        else {
            oddNumbers += numbers[i];
        }
    }
    if (evenNumbers > oddNumbers)
        return evenNumbers - oddNumbers;
    else
        return oddNumbers - evenNumbers;
}
//# sourceMappingURL=helloAppslabTS.js.map