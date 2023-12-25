// Object
const customer = {
    name : "Mr.Pornthep Chanpheng",
    age : 50,
    address : "Uttaradit",
    //สามารถเขียนบรรทัดเดียวได้
    getCustomer(){
        console.log( this.name)
    }
}

console.log(customer)
console.log(customer.name)
customer.getCustomer()