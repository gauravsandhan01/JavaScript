let heading = document.getElementById("heading");

console.dir(heading);
console.log(heading);

//
// using class
let headings= document.getElementsByClassName("head");
console.dir(headings);
console.log(headings);


// using tag

let para =document.getElementsByTagName("p");

console.dir(para);
console.log(para);

// Query selector

let element = document.querySelector("p"); //1st elment //.class also // #id
console.dir(element);
console.log(element);

let allE1 =document.querySelectorAll("p"); //all element
console.dir(allE1);
console.log(allE1);

let div = document.getElementsByClassName("div1");
console.dir(div);