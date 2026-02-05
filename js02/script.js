console.log("anobhav")

for (let i=0; i<=5; i++){
    console.log("value of i:",i)
}

num=5
sum=0
while(num>=0){
    sum+=num
    num-=1
}
 console.log("sum is:",sum);
 
do{
    console.log("do always runs, sum is: ",sum);
}while(sum>20)

let str="for-of is used to itterate over datatypes like string,arrays "
for(let val of str){
    console.log(val);
    
}

let student={
    name:"anobhav",
    pass: true,
    cgpa: 9.3
};

for ( let key in student){
    console.log("key=", key, "value",student[key]);
}

console.log(student.name.length);
console.log(student.name[0]);


let name=prompt("enter your name to get your username: ")
username="@"+name+name.length
console.log(username);
