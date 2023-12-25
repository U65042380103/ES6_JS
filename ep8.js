// Default Parameter
getMax=(x=1,y=2)=> {
    if (x > y){
        return x
    }else{
        return y
    }
}

console.log(getMax(5,10))
console.log(getMax())