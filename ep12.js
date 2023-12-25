//loop การวนรอบ ออกสอบด้วยเด้อ 555555
const data = [10,20,30,40,50]

for (let i = 0; i < data.length;i++){
    console.log(`index ${i} : ${data[i]}`)
}
//การวนรอบเข้าถึงสมาชิกของ array โดยใช้ arrow function
data.forEach(e => {
    //ใช้ e ในลักษณะ callback function
    console.log(`value : ${e}`)
});

for (e of data){
    if (e % 3 == 0)
        console.log(`value : ${e}`)
}