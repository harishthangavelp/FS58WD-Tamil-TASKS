// --------------------------------------------------------------------------------------------------------------------------------------
//                                                              IIFE
// --------------------------------------------------------------------------------------------------------------------------------------

// 1) Print odd numbers in an array

// <----------INPUT---------->
(function assignFunction1(){
    var sampArr = [1, 2, 227, 9, 12, 67, 150, 1289, 39, 12345];
    var oddNums = []
    for(var i = 0; i < sampArr.length; i++){
        sampArr[i] % 2 === 1 && oddNums.push(sampArr[i]);
    }
    console.log(oddNums);
    })();
  
  // <----------OUTPUT---------->
  // [ 1, 227, 9, 67, 1289, 39, 12345 ]
  
  // 2) Convert all the strings to title caps in a string array
  
  // <----------INPUT---------->
  (function(assignFunction2){
      for(var i = 0 ; i< assignFunction2.length ; i++){
                 if(assignFunction2[i]%2!=0){
                    console.log(assignFunction2[i])
                 } 
            }
      })([1,2,3,4])
  
  // <----------OUTPUT---------->
  // 1
  // 3
  
  // 4) Return all the prime numbers in an array
  
  // <----------INPUT---------->
  var a = [5, 9, 63, 29, 35, 6, 55, 23]
  var prime = [];
  
  (function assignFunction4(item) {
      var identifier = item / 2;
        for (var j = 2; j <= identifier; j++) {
         if ((item % j) == 0) { 
          return false;
         } 
       }
       return true;
  
  for (var index = 0; index < a.length; index++) {
    if (assignFunction4(a[index])) {
        prime.push(a[index])
    }
  }
  
  console.log(prime);
  })();
  
  // <----------OUTPUT---------->
  // [5, 29, 23]
  
  // 5) Return all the palindromes in an array
  
  // <----------INPUT---------->
  let input = [28,79,13,55,'bang','vice','gangster','cute'];
  let palindrome = function(input) {
      let i=0;
      let ans="";
      while(i<input.length) {
        let temp="";
        temp=temp+input[i];
        let flag=0;
        for(let j=0; j<temp.length; j++)
        {
           if(temp[j] == temp[temp.length-1-j])
           {
              flag++;
           }
           else
           {
              break;
           }
        }
          if(flag === temp.length) {
           ans=ans+input[i]+" ";
          }
          i++;
      }
      if(ans.length>0)
      {
          return ans.trimEnd();
      }
      else
      {
          return 'No Palindrome found'
      }
  }
  console.log(palindrome(input));
  
  // <----------OUTPUT---------->
  // 55
  
  // 6) Return median of two sorted arrays of the same size
  
  // <----------INPUT---------->
  (function assignFunction6(){
  var samArr1 = [1, 3, 5, 7, 9];
  var samArr2 = [2, 4, 6, 8, 10];
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
  })();
  
  // <----------OUTPUT---------->
  // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
  // 10
  // 5
  // 4
  // Median of two sorted arrays is 5.5
  
  // 7) Remove duplicates from an array
  
  var assignFunction7 = (function(){
      let arr = ["apple", "mango", "apple",
      "orange", "mango", "mango"];
      return arr.filter((item,
          index) => arr.indexOf(item) === index);
  })();
  console.log(assignFunction7);
  
  // <----------OUTPUT---------->
  // ['apple', 'mango', 'orange']
  
  // 8) Rotate an array by k times
  
  // <----------INPUT---------->
  var assignFunction8 = (function(){
      let arr = [1,2,3,4,5];
      let kValue = 2;
      if (kValue) arr.unshift(arr.pop());
      else arr.push(arr.shift());
      return arr;
  })();
  console.log(assignFunction8);
  
  // <----------OUTPUT---------->
  // [ 5, 1, 2, 3, 4 ]

    // 3) Sum of all numbers in an array
  
  // <----------INPUT---------->
  (function(array){
    var sum = 0;
         for(var i = 0 ; i< array.length ; i++){
            sum = sum + array[i];
          }
          return sum;
    })([1,2,3,4])

// <----------OUTPUT---------->
// 10
  
  // --------------------------------------------------------------------------------------------------------------------------------------