// callback function

// function GFGexample(fact, callback){ 
// var myFact = "GeeksforGeeks Is Awesome, " + fact; 
// callback(myFact); // 2 
// } 

// function logFact(fact){ 
// console.log(fact); 
// } 
// GFGexample("Learning is easy since", logFact); 
let nums = [1,2,3,4,5,6,7,8,9,10];

function isOdd(num){
    return num % 2 === 1;
}
function isEven(num){
    return num % 2 === 0;
}

function sumNumber(nums, callback){
    let num = 0;
    let sum = 0;
    for (num of nums){
        if (callback(num))
            sum += num;
    }
    return sum;
}

console.log(sumNumber(nums,isEven));