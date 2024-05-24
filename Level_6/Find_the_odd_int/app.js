// DESCRIPTION:
// Given an array of integers, find the one that appears an odd number of times.
//
// There will always be only one integer that appears an odd number of times.
//
// Examples
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).
//


function findOdd(A) {
    let count = 0;
    //sorts array in ascending order
    A.sort();

    //iterate through the array
    for (let i = 0; i < A.length; i++) {
        //increase the count
        count++
        // Log to help visualize what is happening;
        // console.log("number",A[i], 'index', i, 'count',count);

        if (A[i] !== A[i+1]){  //Conditional for when the next number is not the same as previous

            //conditional to check if the remainder of current count divided by 2 is equal to 0;
            //This checks if count number is odd bc if its even the remainder should be 0
            if (count % 2 !== 0){
                return A[i];
            }

            //reset the count;
            count = 0;
        }
    }
}


//Test Cases
console.log(findOdd([1,1,2])); //returns 2
console.log(findOdd([0,1,0,1,0,1,1])); //returns 0
console.log(findOdd([1,2,2,3,3,3,4,3,3,3,2,2,1])); //returns 4
console.log(findOdd([5,1,2,2,3,3,3,4,3,3,3,2,2,1,4,])); //returns 5
