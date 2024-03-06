const array = [1,2,3,4,5]
console.log(array);
console.log("a",array);
// slice not menupulete actual array
const myArray=array.slice(1,3)

console.log(myArray);

console.log("b",array);

// this splice menupulet actual array
const myArray1=array.splice(1,3)

console.log(myArray1);

console.log("d",array);