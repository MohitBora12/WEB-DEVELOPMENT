
let myarr = new Array (10,20,40,50,60)

myarr.push(100) // used to push in array

myarr.unshift(0)
console.log(myarr)
myarr.shift()
console.log(myarr)

//Note:unshift function adds take a value as argument and pushes it to the first postion in an array. It performs shifting of the elements to do so.

// Note: shift operator doesn't take any argument and removes the very first element from the array by shifting the elements.

let newarr = myarr.join()
console.log(newarr)

// Note: .join() function joins the element of the array and return it in the form of string

let narr = new Array (1,2,3,4,5)

let slicedArr = narr.slice(0,3)

console.log("Using Slice: ",slicedArr)
console.log(narr)

let spliceArr = narr.splice(0,3)
console.log(spliceArr)
console.log("Using Splice: ",narr)

// Note: slice is used to get a specific portion of the array and it's doesnt change the original array. Moreover, the last value passed in the argument is not considered

// Note: splice is used to get the specific portion of array but it changes the original array and removes the element from original array. Moreover, it also considers the last element passed in the argument


let myheros = ["BEN10","Power Rangers","Haatim","Thor"]
let trueheroes = ["Shaktimaan","Batman","Superman"]

let allheroes = [...myheros,...trueheroes]
console.log(allheroes)

// Note: ... (spread operator) is used to add up two or more Array's element. However we need a new array to store the result

let arrr = [1,2,[35,4],11,[6,7,8]]
console.log(arrr.flat(Infinity))

// Note: If we have array's within array and we want all the elements in one array then we can use flat method and Infinity checks the depth of arrays that is number of array within array and here Infinity takes all the arrays that are present inside the main array.


console.log(Array.isArray("Mohit"))
console.log(Array.from("Mohit"))
// Note: Array.from() method is used to convert any datatype to array

console.log(Array.from({name:"Mohit"}))
// Note: In the above line the object couldn't be converted into array as we need to specify whether we need to make the array of keys or values.

let num1 = 10
let num2 = 20
let num3 = 30
console.log(Array.of(num1,num2,num3))
// Note: Array.of() method is used to convert any datatype to array but it takes the set of variables 

