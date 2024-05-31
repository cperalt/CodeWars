
//Challenge

// Your task is to make a function that can take any non-negative integer as an argument and return 
// it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.
//
// Examples:
// Input: 42145 Output: 54421
//
// Input: 145263 Output: 654321
//
// Input: 123456789 Output: 987654321


function descendingOrder(n){
    return Number(n.toString().split("").sort().reverse().join(""));
}


//Test Case
console.log(descendingOrder(42145));
console.log(descendingOrder(145263));
console.log(descendingOrder(123456789));

//Comment How I felt
//Pretty easy to be considered a level 7 difficulty
//I am very familitar with the methods I used
