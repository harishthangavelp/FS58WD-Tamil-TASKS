// --------------------------------------------------------------------------------------------------------------------------------------
//                                                              Arrow Functions
// --------------------------------------------------------------------------------------------------------------------------------------
// 1) Print odd numbers in an array

// <----------INPUT---------->
var assignFunction = () => {
var sampArr = [1, 2, 227, 9, 12, 67, 150, 1289, 39, 12345];
var oddNums = []
for(var i = 0; i < sampArr.length; i++){
    sampArr[i] % 2 === 1 && oddNums.push(sampArr[i]);
}
console.log(oddNums);
}
assignFunction();

// <----------OUTPUT---------->
// [ 1, 227, 9, 67, 1289, 39, 12345 ]

// 2) Convert all the strings to title caps in a string array

// <----------INPUT---------->
var assignFunction = (str) =>{
str = str.toLowerCase().split(' ');
    for (let i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(' ');
}
console.log(assignFunction("GUVI is AlWays the BeSt Institute in INDIA"));

// <----------OUTPUT---------->
// Guvi Is Always The Best Institute In India

// 3) Sum of all numbers in an array

// <----------INPUT---------->
var assignFunction = () =>{
var array = [1, 2, 3, 10, 20, 30];
var sum = 0;
for (var i = 0; i < array.length; i++) {
    sum += array[i];
}

console.log("The sum of numbers in array is", sum);
}
assignFunction();

// <----------OUTPUT---------->
// The sum of numbers in array is 66

// 4) Return all the prime numbers in an array

// <----------INPUT---------->
var assignFunction = () =>{
const ip_Value = 27; 
  if (ip_Value <= 1) 
  return false; 
  for (let i = 2; i < ip_Value; i++) {
    if (ip_Value % i === 0) {
      return false; 
        }
    }
     return true; 
}
console.log(assignFunction());

// <----------OUTPUT---------->
// false

// 5) Return all the palindromes in an array

// <----------INPUT---------->
var assignFunction = (str) => {
    let j = str.length - 1
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] != str[j]) {
            return false;
        }
        j--;
    }
    return true;
}
 
let str1 = "racecar";
let str2 = "nitin";
let str3 = "Rama";
 
console.log(assignFunction(str1));
console.log(assignFunction(str2));
console.log(assignFunction(str3));

// <----------OUTPUT---------->
true
true
false
// --------------------------------------------------------------------------------------------------------------------------------------