let newdiv =document.createElement("button");
newdiv.innerText ="click me";

newdiv.style.color ="red";

let div1=document.querySelector("body");
div1.prepend(newdiv);