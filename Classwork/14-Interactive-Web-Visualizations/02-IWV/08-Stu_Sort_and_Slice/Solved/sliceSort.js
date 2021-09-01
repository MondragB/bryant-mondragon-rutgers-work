// An unsorted array
let numArray = [9.9, 6.1, 17.1, 22.7, 4.6, 8.7, 7.2];

// Sort the array in descending order and assign the results to a variable
let sortedDescending = numArray.sort((a, b) => {return b - a})
console.log(sortedDescending);

// Reverse the array order
let reverse = numArray.reverse();
console.log(reverse);

// Slice the first five elements of the sortedAscending array, assign to a letiable
let slicedArray = reverse.slice(0,5);
console.log(slicedArray);