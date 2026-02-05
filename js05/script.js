console.log(document.location);
console.log(document.body);
console.dir(document.body.childNodes)
console.log(document.querySelectorAll("h1"));
console.dir(document.getElementById("button1"))
console.log(document.getElementById("button1"))
console.log(document.body.childNodes[3]);

let heading=document.getElementById("header11")
heading.style.backgroundColor="green"

let cl=document.getElementsByClassName("main11")
cl[1].style.backgroundColor="red"
cl[2].style.backgroundColor="yellow"

let firstel=document.querySelector("p")
console.log(firstel);
let allel=document.querySelectorAll("p")
for ( let el of allel){
    console.log(el.innerText);
}

let button = document.getElementById("button1");
  
// Get the 'type' attribute value
let buttonType = button.getAttribute("type");
console.log("Button type is:", buttonType); // This will log "submit"

// Set a new attribute or update it (change the type from "submit to "button")
button.setAttribute("type", "button");

// Confirm the change
console.log("New button type is:", button.getAttribute("type"))

let new_para=document.createElement("p")
new_para.innerText="this is what we created "
let main=document.querySelector("main")
main.append(new_para)
//main.prepend(new_para)
//main.before(new_para)
//main.after(new_para)

new_para.remove()