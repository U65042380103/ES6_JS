// Array
const score = [10,20,30,40,50];
const score1 = [100, 200];
console.log(score);
// join ทั้งหมดถูกมองเป็นข้อความ สามารถเปลี่ยน separate ในวงเล็บชมพู
console.log(score.join());  
console.log(score.join(":"));
// concat การเชื่อมข้อความเข้าด้วยกัน โดย return new array และไม่แก้อันเก่า
console.log(score.concat(score));
// push การเพิ่มสมาชิก
score.push(100);
console.log(score);
// pop การลบสมาชิกตัวสุดท้าย
score.pop();
console.log(score);
// shift การลบสมาชิกตัวแรก
console.log(score.shift());
// unshift การเพิ่มสมาชิก
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