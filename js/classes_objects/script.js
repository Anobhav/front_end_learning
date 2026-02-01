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