// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean
// and be case insensitive. The string can contain any char.
//
// Examples input/output:
//
// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false






function XO(str) {
    str = str.toLowerCase();
    let xArray = []
    let oArray = []
    for (let i = 0; i < str.length; i++){
      (str[i] == "x") ? xArray.push(str[i]) :
      (str[i] == "o") ? oArray.push(str[i]) : false
    }
    return xArray.length == oArray.length;
}

//Comment how I felt
//This challenge was easy. I understood how to do the logic pretty fast.
