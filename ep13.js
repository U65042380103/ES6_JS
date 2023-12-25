//const data = ["red","green","blue"]
const data = [10, 20, 33, 40, 50]
// indexOf()
console.log(data.indexOf(35));
console.log(data.indexOf(20));

function isOdd(num){
    return num % 2 == 1;
}
//find()
console.log(data.find(isOdd));
console.log(data.find((num) => num % 2 == 0));
// findIndex() หาแล้วทราบลำดับ
console.log(data.findIndex(isOdd)); // method
console.log(data.findIndex((num) => num % 2 == 0)); // arrow function