let btn2c=document.getElementById("btnclick2times")
btn2c.onclick = (e)=>{
    console.log("btn2 was clicked ")
    console.log(e)
    console.log(e.type);
    console.log(e.target);
    console.log(e.clienX, e.clientY);
}

let btn1 = document.getElementById("btn1")
btn1.addEventListener("click", ()=> {
    console.log('button1 was click, event by eventlistener');
    
})

const event2 =()=>{
    console.log("to remove this evenet we can store it in a memeory location ");
}
btn1.addEventListener("click", event2)
btn1.removeEventListener("click", event2)
