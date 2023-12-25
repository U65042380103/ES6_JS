// Array
const score = [10,20,30,40,50];
const score1 = [100, 200];
console.log(score);
// join
console.log(score.join());  
console.log(score.join(":"));
// concat
console.log(score.concat(score));
// push
score.push(100);
console.log(score);
// pop
score.pop();
console.log(score);
// shift
console.log(score.shift());
// unshift
console.log(score.unshift(0));
console.log (score);
// splice
console.log(score.splice(2,1));
console.log(score);
console.log(score.splice(2,1,1));
console.log(score);
// slice
console.log(score.slice(2,3));
console.log(score);