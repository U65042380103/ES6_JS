const data = [10,20,30,40,50]

for (let i = 0; i < data.length;i++){
    console.log(`index ${i} : ${data[i]}`)
}

data.forEach(e => {
    console.log(`value : ${e}`)
});

for (e of data){
    if (e % 3 == 0)
        console.log(`value : ${e}`)
}