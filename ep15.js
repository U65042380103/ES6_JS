// Filter กาครคัดกรองข้อมูลตามเงื่อนไข
const data = [ {id:"1",name:"pornthep",salary:45000},
               {id:"2",name:"wirawan",salary:10000}]
const result = data.filter(e=>e.salary > 10000)
console.log(result)
