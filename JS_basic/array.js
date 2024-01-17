
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


