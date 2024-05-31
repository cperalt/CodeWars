
// Challenge: 

// Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2
// with the exponent ranging from 0 to n ( inclusive ).

function powersOfTwo(n) {

    //create empty array
    let arr = [];

    //Iterate from 0 to n, squaring each number and pushing each into the array
    for (let i = 0; i <= n; i++) {
        arr.push(Math.pow(2, i));
    }

    //Return the array
    return arr;
}

//Test Cases
console.log(powersOfTwo(2));
console.log(powersOfTwo(4));


//Comment How I felt
//Super Easy Challenge
