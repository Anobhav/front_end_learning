let marks=[1,2,3,4,5,6,7,8,9,10]
for ( let i=0; i<marks.length; i++) {
    console.log(marks[i]);
}
let sum=0
for (let mark of marks){
    sum+=mark
}
sum=sum/marks.length
console.log("avg",sum);


let ans={
    name:"anohbav",
    age:15
};

for (let val in ans){
    console.log(ans[val]);
}

// offer 10 percent off
let prices=[250,645,300,900,50]
let i=0
for (let price of prices){
    let discount=price/10
    prices[i]=price-discount
    i++
}
prices.push("last1","last2","last3")
prices.pop()
prices.toString()
let newarray=prices.concat(marks)
newarray.unshift("first to added")
for (let price of newarray){
    console.log(price);
}

