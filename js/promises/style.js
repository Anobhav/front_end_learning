const getpromise = ()=>{
    return new Promise((resolve, reject) => {
        console.log('i am a promise');
        //resolve("sucess")  
        reject("network error")      
    })
}
let promse=getpromise();
promse.catch((err) => {
    console.log('error',err);
})
.then( () => {
    console.log('fullfilled');  
});


//promise chaining
const first = new Promise((resolve) => {
    console.log("first promise");
    resolve("first done");
});

const second = new Promise((resolve) => {
    console.log("second promise");
    resolve("second done");
});

const chained = new Promise((resolve) => {
    first;
    second;
    resolve("all done");
});

