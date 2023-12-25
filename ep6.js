//แบบเดิม
function sum1(x, y){
    return x+y
}
// Rest Operator ส่งค่า parameter ในรูปแบบอาร์เรย์(ตัวแปรชุด ข้อมูลชุด)
sum2=(...nums) => {
    let sum=0.0
    for(num of nums) sum += num
    return sum
}

console.log(sum1(1,2))
console.log(sum2(1,2,3,4,5))
console.log(sum2(10,20,30,40,50))
console.log(sum2(10,20,30,40,50,60,70,80,90,100))