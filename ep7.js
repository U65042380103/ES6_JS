// Destructuring
const colors = ["red","green","blue"]
const [red, green, blue] = colors
// red   = colors[0]
// green = colors[1]
// blue  = colors[2]
//แบบเดิม โดยใส่ index
console.log(colors[0])
console.log(colors[1])
console.log(colors[2])
//แบบใหม่
console.log(red)
console.log(green)
console.log(blue)

const students = {
    id : "111",
    name : "Warit",
    gpa : 3.33
}
const {id,name,gpa} = students
console.log(students.id)
console.log(students.name)
console.log(students.gpa)
console.log("ID : "+id)
console.log(name)
console.log(gpa)
