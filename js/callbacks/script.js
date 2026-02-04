console.log('no wait1');
console.log('no wait2');
setTimeout(()=>{
    console.log('hello')
},2000)
console.log('no wait3');
console.log('no wait4');

function sum(a,b){
    console.log(a+b);
    
}
function cal(a,b,callback){
    callback(a,b)
}

function mul(a,b){
    console.log(a*b);   
}

cal(1,2,sum)
cal(1,2,mul)

const hey=()=>{
    console.log("this is async callback");
}
setTimeout(hey,2000)

function getdata(dataId, getnextdata){
    setTimeout(()=>{
        console.log("data",dataId);
        if(getnextdata){
            getnextdata()
        }
    },2000)
}

//call back hell 
getdata(1, ()=> {
    getdata(2, ()=>{
        getdata(3)
    })
})