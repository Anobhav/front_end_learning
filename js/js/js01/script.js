console.log("variables in js");
// variables-> containers in memory used to store datetypes = null, undefined, int, float, double, string, bool etc.

name="anobhav"
age=22
console.log(name,age)
console.log(age)
// dynamically typed ->  we dont have to declare the type of variable to store data 

//var -> allows for re-declared and updated, global scope
//const -> does not allow for re-declared or updated. block scope 
// let -> does not allow for re-declare but can be update block scope

/* 
data types -> primitive and non primitive 
    primitive = number, string, boolean, undefined, null, bigint, symbol
    non primitive - objects, array, function, date, regexp,map, set, weapmap, weakset 
*/
const product ={
    name:"Parker",
    deal:true,
    rating:4.5,
    price:100,
    offer:5
};

let a= Number(prompt("enter 1 numbers"))
let b= Number(prompt("enter 2 numbers"))
console.log("sum is :",a+b)
console.log("sub is :",a-b)
console.log("product is :",a*b)
console.log("division is :",a/b)
console.log("modulus is :",a%b)
console.log("exponential :",a**b)
console.log("pre increment of a :",++a)
console.log("pre decrement of b :",--b)

t=5
j="5"
console.log(t==j) // returns true becuase does not take into account data type 
console.log(t===j) //  returns false becuause compares values and datatypes

if(a+b>10){
    console.log("sum is greater than 10")
}
else if (a+b==10) {
    console.log("sum is exactly 10")
}
else{
    console.log("its less than 10")
}