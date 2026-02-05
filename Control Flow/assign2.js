let score = prompt("enter the mark")

if(score>=81 && score<=100){
    console.log("grade is A");

}
else if(score >=61 && score <= 80){
    console.log("grade is B")
}

else if(score >=41 && score <= 60){
    console.log("grade is c")
}

else if(score ==40){
    console.log("grade is P")
}
else{
    console.log("student id fail")
}

// also use
// let grade;
// if(){
//     grade ="A";
// }