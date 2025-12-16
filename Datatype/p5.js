function checkValue(value){
    if(typeof value === "number"){
        console.log("type: number");
    }

    else if(typeof value === "Boolean"){
        console.log("type: Boolean");
    }

    else if(typeof value === String){
        console.log("type: String");
    }

    else if(typeof value === undefined){
        console.log("type: undefined");

    }

    else{
        console.log("other type :", typeof value);
    }

}



checkValue(10);
checkValue("Gaurav");
checkValue(undefined);