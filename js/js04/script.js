/* function greeting(name){
    console.log("hello", name);
}
greeting()

function user_greating(){
    let name=prompt("enter your name")
    return name 
}

greeting(user_greating())

*/

const arrowsum=(a,b)=>{
    return a+b
};
console.log(arrowsum(10,20));

const mul=(a,b)=>{
    return a*b
}
console.log(mul(10,10));

function count_vowels(a){
    arr_vo=["a","e","i","o","u"]
    a=a.toLowerCase()
    let count=0
    for (let cha of a){
        if(arr_vo.includes(cha)){
            count+=1
        }
    }
    return count
}
console.log(count_vowels("anobhav"));

let arr=[1,2,3,4,5]
arr.forEach((num,idx)=>{
    console.log(num," ",idx)  
})

let nums=[1,2,3,4,5]
let new_arr=nums.map((val)=>{
    return val*val
})
console.log(new_arr);

let even=new_arr.filter((val)=>{
    return val%2===0
})

let larger=nums.reduce((p,c)=>{
    return p>c ? p :c
})
console.log(larger);

let marks=[90,91,98,88,78,96]

let res=marks.filter((val)=>{
    return val>90
})
console.log(res);
