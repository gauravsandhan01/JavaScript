//write a function fetGrade(scrore) that 
// take a student marks (0 to 100)
// returns the grade based on this locgic 


function getGrade(score){
    if(score >= 90 && score <=100){
        console.log("A+");
    }
    else if(score >=80){
        console.log("A");
    }
    else if(score >=70){
        console.log("B");
    }
    else if(score >=60){
        console.log("C");
    }
    else if(score >=40){
        console.log("D");
    }
    else {
        console.log("Fail");
    }
}
getGrade(20);