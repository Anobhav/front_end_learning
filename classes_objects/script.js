const student={
    name:"Anobhav",
    age:22,
    last_name:"Singh",
    printage(){
        console.log("age",this.age);
    }
}

const employee={
    caltax(){
        console.log("tax is 10%");
    }
}

const karan={
    salary:50000
}

karan.__proto__=employee

class brand{
    constructor(brand){
        console.log('this is a constructor');
        this.brand=brand
    }
    start(){
        console.log('start');
    }
    stop(){
        console.log('stop');       
    }
}
class car extends brand{
    constructor(brand,milage){
        super(brand)
        this.milage=milage
        console.log('milage',milage);
    }
}
let a=new car('a_brand',28);
