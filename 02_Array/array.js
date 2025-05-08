//----Array
let arr=[8,3,4,9,7]
const myarr=['Hero', 'SuperHero']

console.log(myarr[1]);

console.log(arr[0]);

// Array Methods

arr.push(6)
arr.push(8)
arr.pop()


arr.unshift(9)
arr.shift()

const newarr=arr.join()

// console.log(arr);
// console.log(newarr);

// console.log(typeof newarr);

//Slice splice

console.log("A ", arr);

const myn1 = arr.slice(1, 3)

console.log(myn1);
console.log("B ", arr);


const myn2 = arr.splice(1, 3)
console.log("C ", arr);
console.log(myn2);








/*

SUMMARRY:

1. Array is written in brackets [  ].
2.Array data type is an object.
3.Array can contain different data types . i.e string,number,boolean,array etc.
4. Array is zero based indexing. It starts with zero.
5. Once changed its original value will also change beacause it is non primitive (refrence) type.

ARRAY METHODs :

1.Push = adds value to last of an array.
2. Pop = removes last value of an array.
3. Unshift = adds value at first of an array.
4.Shift = removes first value of an array.
5. Includes = checks true or false.
6. IndexOf = checks the position of value in number form.
7.Join = converts to string.
8. Slice(value to remove from,value remove upto but don't include)= returns new array and original value remains unchanged. Use when you need to extract a portion of an array without modifying it.
9. Splice(value to delete from, number of value to delete) = returns new array with deleted one and original value changed.Use when you need to add, remove, or replace elements within an array

*/