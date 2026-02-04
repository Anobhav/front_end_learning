let button_new=document.createElement("button")
button_new.type="submit"
button_new.innerText="click me"
let body = document.querySelector("body")
body.prepend(button_new)
button_new.style.backgroundColor="red"
button_new.style.color="white"
