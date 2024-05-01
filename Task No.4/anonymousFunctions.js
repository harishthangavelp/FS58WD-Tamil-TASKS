// --------------------------------------------------------------------------------------------------------------------------------------
//                                                              Anonymous Functions
// --------------------------------------------------------------------------------------------------------------------------------------
// 1) Print odd numbers in an array

// <----------INPUT---------->
var assignFunction1 = function(){
    var sampArr = [1, 2, 227, 9, 12, 67, 150, 1289, 39, 12345];
    var oddNums = []
    for(var i = 0; i < sampArr.length; i++){
        sampArr[i] % 2 === 1 && oddNums.push(sampArr[i]);
    }
    console.log(oddNums);
    }
    assignFunction1();
    
    // <----------OUTPUT---------->
    // [ 1, 227, 9, 67, 1289, 39, 12345 ]
    
    // 2) Convert all the strings to title caps in a string array
    
    // <----------INPUT---------->
    let assignFunction2 = function(str){
    str = str.toLowerCase().split(' ');
        for (let i = 0; i < str.length; i++) {
            str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
        }
        return str.join(' ');
    }
    console.log(assignFunction2("GUVI is AlWays the BeSt Institute in INDIA"));
    
    // <----------OUTPUT---------->
    // Guvi Is Always The Best Institute In India
    
    // 3) Sum of all numbers in an array
    
    // <----------INPUT---------->
    var assignFunction3 = function(){
    let array = [1, 2, 3, 10, 20, 30];
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
        sum += array[i];
    }
    
    console.log("The sum of numbers in array is", sum);
    }
    assignFunction3();
    
    // <----------OUTPUT---------->
    // The sum of numbers in array is 66
    
    // 4) Return all the prime numbers in an array
    
    // <----------INPUT---------->
    let assignFunction4 = function(isPrime){
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
    console.log(assignFunction4());
    
    // <----------OUTPUT---------->
    // false
    
    // 5) Return all the palindromes in an array
    
    // <----------INPUT---------->
    var assignFunction5 = function (str) {
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
     
    console.log(assignFunction5(str1));
    console.log(assignFunction5(str2));
    console.log(assignFunction5(str3));
    
    // <----------OUTPUT---------->
    // true
    // true
    // false
    
    // 6) Return median of two sorted arrays of the same size
    
    // <----------INPUT---------->
    var assignFunction6 = function(){
    var samArr1 = [1, 3, 5, 7, 9];
    let samArr2 = [2, 4, 6, 8, 10];
    var newArray = samArr1.concat(samArr2);
    newArray.sort(function(a, b){return a-b});
    console.log(newArray);
    console.log(newArray.length);
    var addVal1 = Math.floor(newArray.length/2);
    console.log(addVal1);
    var addVal2 = addVal1 - 1;
    console.log(addVal2);
    var medianCalc = (newArray[addVal1] + newArray [addVal2])/2;
    console.log("Median of two sorted arrays is " + medianCalc);
    }
    assignFunction6();
    
    // <----------OUTPUT---------->
    // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
    // 10
    // 5
    // 4
    // Median of two sorted arrays is 5.5
    
    // 7) Remove duplicates from an array
    
    // <----------INPUT---------->
    var assignFunction7 = function(){
        let arr = [1, 2, 3, 44, 7, 3, 7, 5, 73, 1];
          let uniq = arr.reduce(function(a, b){
            if (a.indexOf(b) < 0)a.push(b);
            return a;
          },[]);
          return uniq;
        }
        assignFunction7();
    
    // <----------OUTPUT---------->
    // [ 1, 2, 3, 44, 7, 5, 73 ]
    
    // 8) Rotate an array by k times
    
    // <----------INPUT---------->
    let assignFunction8 = function(arr, kValue){
      if (kValue) arr.unshift(arr.pop());
      else arr.push(arr.shift());
      return arr;
    }
    console.log(assignFunction8([1, 2, 3, 4, 5], 2));
    
    // <----------OUTPUT---------->
    // [ 5, 1, 2, 3, 4 ]
    // --------------------------------------------------------------------------------------------------------------------------------------