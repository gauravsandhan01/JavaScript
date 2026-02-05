let nums =[1,2,3,4,5,6];

nums.forEach((num)=>{
    console.log(num*num);
})


//also use 
let clcSquare =(num)=>{
    console.log(num*num);
}
nums.forEach(clcSquare); //call back method