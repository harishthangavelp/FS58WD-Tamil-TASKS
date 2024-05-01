// --------------------------------------------------------------------------------------------------------------------------------------
//                                           How to compare two JSON have same properties without order
// --------------------------------------------------------------------------------------------------------------------------------------
//input
let obj1 = {name:"Person1", age:5};
let obj2 = {age:5, name:"Person1"};
console.log("Object 1 keys are ",Object.keys(obj1));
console.log("Object 2 keys are ",Object.keys(obj2));

function checkObjEqual(obj1, obj2){
  var keys1 = Object.keys(obj1);
  var keys2 = Object.keys(obj2);
  
if(keys1.length !== keys2.length){
  return false;
  }
  
for (var i=0; i< keys1.length; i++){
  if(obj1[keys1[i]] !== obj2[keys1[i]]){
    return false;
  }
}

return true;
}

console.log(checkObjEqual(obj1, obj2));
// --------------------------------------------------------------------------------------------------------------------------------------
//output
// Object 1 keys are  [ 'name', 'age' ]
// Object 2 keys are  [ 'age', 'name' ]
// true
// --------------------------------------------------------------------------------------------------------------------------------------