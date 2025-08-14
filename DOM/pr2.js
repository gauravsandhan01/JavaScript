let divs =document.querySelectorAll(".box");
//console.log(divs.innerText);

idx =1;

for(let div of divs){
    div.innerText=`this is new value ${idx}`;
    idx++;
}

//console.log(div.innerText);
