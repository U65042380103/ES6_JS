// Array Map
const numbers = [10,20,30,40,50]
const result = numbers.map(e=> e*2)
    //{
    //const a = e*2
    //return a

    //return e*2
    //})
console.log(result)

const bonus = [10,20,30,40,50]
const add_bonus = bonus.map(e=> (e <= 25) ? e*1.1: e*1.05)
console.log(add_bonus)